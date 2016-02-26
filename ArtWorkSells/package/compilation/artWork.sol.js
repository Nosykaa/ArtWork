/*
Generated by Mix
Fr. Feb. 26 11:18:22 2016 GMT+0100
*/

var artWork = {
	"abi": "[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_deliveryAuthority\",\"type\":\"address\"}],\"name\":\"pay\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"artWorkIdentification\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"sellPrice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"signPickUpByDeliveryAuthority\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"certify\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"},{\"name\":\"_sellPriceInEther\",\"type\":\"uint256\"}],\"name\":\"sell\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"signPickUpByOwner\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"deliveryAuthority\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"sellProgress\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"certificationAuthority\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"artWorkIdentificationMethod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"signDeliveryByBuyer\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"signDeliveryByDeliveryAuthority\",\"outputs\":[],\"type\":\"function\"},{\"inputs\":[{\"name\":\"_name\",\"type\":\"string\"},{\"name\":\"_artWorkIdentification\",\"type\":\"string\"},{\"name\":\"_certificationAuthority\",\"type\":\"address\"}],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"saleInitiated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"paid\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"pickedUp\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"delivered\",\"type\":\"event\"}]",
	"codeHex": "0x6060604052600060066000505560006007600050556000600860006101000a81548160ff02191690830217905550604051610cfd380380610cfd833981016040528080518201919060200180518201919060200180519060200190919050505b8260026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100ae57805160ff19168380011785556100df565b828001600101855582156100df579182015b828111156100de5782518260005055916020019190600101906100c0565b5b50905061010a91906100ec565b8082111561010657600081815060009055506001016100ec565b5090565b50508160036000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061015b57805160ff191683800117855561018c565b8280016001018555821561018c579182015b8281111561018b57825182600050559160200191906001019061016d565b5b5090506101b79190610199565b808211156101b35760008181506000905550600101610199565b5090565b50506001600460006101000a81548160ff0219169083021790555080600460016101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555033600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b505050610ac38061023a6000396000f3606060405236156100cc576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde03146100ce5780630c11dedd1461014957806349059df6146101615780634b750334146101dc57806352fb6ae5146101ff57806363f173ca1461020e5780636c197ff51461021d5780637211bcd51461023e5780637fb359ab1461024d5780638616c6ab14610286578063a2d92d66146102a9578063af60b5ea146102e2578063f705978d14610305578063fd9379e714610314576100cc565b005b6100db60048050506106ef565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561013b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61015f60048080359060200190919050506108e0565b005b61016e600480505061083f565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101ce5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101e96004805050610790565b6040518082815260200191505060405180910390f35b61020c60048050506109fb565b005b61021b600480505061063a565b005b61023c6004808035906020019091908035906020019091905050610518565b005b61024b6004805050610323565b005b61025a60048050506109d5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61029360048050506106d3565b6040518082815260200191505060405180910390f35b6102b66004805050610819565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102ef60048050506106dc565b6040518082815260200191505060405180910390f35b61031260048050506103a3565b005b6103216004805050610799565b005b600280600860009054906101000a900460ff16141561039f57600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561039e5760046007600050819055505b5b505b565b600380600860009054906101000a900460ff1614156105145733604051808273ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040518091039020600160005054141561051357600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000600660005054604051809050600060405180830381858888f193505050505033600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060006006600050819055506000600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506004600860006101000a81548160ff021916908302179055507fbbdfbfba9effe7136df7d8f8282cad37482c3082c2977e905fec96e6b8c5392060405180905060405180910390a160076007600050819055505b5b505b565b600480600860009054906101000a900460ff16141561063457600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561063357670de0b6b3a764000082026006600050819055506001600860006101000a81548160ff0219169083021790555082604051808273ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140191505060405180910390206001600050819055507f7343f33be27e5a6d23bccf6746780fa4442f6198a341464885cc6fe12cd9234c60405180905060405180910390a160026007600050819055505b5b505b5050565b600080600860009054906101000a900460ff1614156106cf57600460019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156106ce576004600860006101000a81548160ff0219169083021790555060016007600050819055505b5b505b565b60076000505481565b600460009054906101000a900460ff1681565b60026000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107885780601f1061075d57610100808354040283529160200191610788565b820191906000526020600020905b81548152906001019060200180831161076b57829003601f168201915b505050505081565b60066000505481565b600380600860009054906101000a900460ff16141561081557600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156108145760066007600050819055505b5b505b565b600460019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108d85780601f106108ad576101008083540402835291602001916108d8565b820191906000526020600020905b8154815290600101906020018083116108bb57829003601f168201915b505050505081565b600180600860009054906101000a900460ff1614156109d057348060066000505414156109ce5733604051808273ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051809103902060016000505414156109cd576002600860006101000a81548160ff0219169083021790555082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055507f295b4e173ace588a2d26726c3483cbedf2d8a415416100a23335461366e4283f60405180905060405180910390a160036007600050819055505b5b505b505b50565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600280600860009054906101000a900460ff161415610abf57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610abe576003600860006101000a81548160ff021916908302179055507fbc977bb69edc4a275680bb73f975ad77a098ce40985f57245187194a5862be9760405180905060405180910390a160056007600050819055505b5b505b56",
	"name": "artWork"
}

