contract artWork {
	enum IdentificationMethod {pictureHash, method2}
	enum State {WaitingCertification, WaitingPayment, WaitingPickup, WaitingDelivery, Normal}
	address private currentOwner;
	bytes32 private buyerHash;
	string public name;
	string public artWorkIdentification;
	IdentificationMethod public artWorkIdentificationMethod;
	/*certificationAuthority is a trusted party that authenticate the artWork*/
	
	/*It should be publicly known*/
	address public certificationAuthority;
	address public deliveryAuthority;
	/*it may be not the right type for sellPrice in wei*/
	uint256 public sellPrice=0;
	uint256 public sellProgress=0;
	State private state=State.WaitingCertification;
	
	function artWork(string _name, string _artWorkIdentification, address _certificationAuthority){
		name = _name;
		artWorkIdentification = _artWorkIdentification;
		artWorkIdentificationMethod = IdentificationMethod.method2;
		certificationAuthority = _certificationAuthority;
		currentOwner = msg.sender;
	}
	/*
	function artWork(string _name, string _artWorkIdentification, address _certificationAuthority, IdentificationMethod _artWorkIdentificationMethod){
		name = _name;
		artWorkIdentification = _artWorkIdentification;
		artWorkIdentificationMethod = _artWorkIdentificationMethod;
		certificationAuthority = _certificationAuthority;
		currentOwner = msg.sender;
	}*/
	
	modifier onlyOwner {if(msg.sender==currentOwner) _ }
	modifier onlyBuyer {if(buyerHash==sha3(msg.sender)) _ }
	modifier onlyCertificationAuthority {if(msg.sender == certificationAuthority) _ }
	modifier onlyDeliveryAuthority {if(msg.sender==deliveryAuthority) _ }
	modifier inState(State _state) {if(state==_state) _ }
	modifier costs(uint _price) {if(sellPrice==_price ) _ }
	
	event saleInitiated();
	event paid();
	event pickedUp();
	event delivered();
	
	
	function certify() 
	inState(State.WaitingCertification)
	onlyCertificationAuthority()
	{
		state=State.Normal;
		sellProgress = 1;
	}
	
	
	function signPickUpByOwner()
	inState(State.WaitingPickup) onlyOwner{
		sellProgress = 4;
	}
	
	function signPickUpByDeliveryAuthority()
	inState(State.WaitingPickup) onlyDeliveryAuthority{
		state=State.WaitingDelivery;
		pickedUp();
		sellProgress = 5;
	}
	
	function signDeliveryByBuyer()
	inState(State.WaitingDelivery) onlyBuyer{
		/*release sell*/
		currentOwner.send(sellPrice);
		currentOwner = msg.sender;
		sellPrice = 0;
		deliveryAuthority=0;
		state=State.Normal;
		delivered();
		sellProgress = 7;
	}
	
	function signDeliveryByDeliveryAuthority()
	inState(State.WaitingDelivery) onlyDeliveryAuthority{
		sellProgress = 6;
	}
	
/*
At this stage artWork can only be bought in ether.
In the future we should offer possibility to sell in any cryptocurrency
available in Ethereum
*/
	function sell(address _newOwner, uint256 _sellPriceInEther)
	inState(State.Normal) onlyOwner{
		sellPrice = _sellPriceInEther*1 ether;
		state = State.WaitingPayment;
		buyerHash = sha3(_newOwner);
		saleInitiated();
		sellProgress = 2;
	}
	
/* Payment is realised in ether, so in msg.value
Payment can be done as a whole and from buyer address only
*/
	function pay(address _deliveryAuthority)
	inState(State.WaitingPayment) costs(msg.value) onlyBuyer
	{
		state = State.WaitingPickup;
		deliveryAuthority = _deliveryAuthority;
		paid();
		sellProgress = 3;
	}
}