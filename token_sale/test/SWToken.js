var SWToken =artifacts.require("./SWToken.sol");

//all accounts by ganache
contract('SWToken', function(accounts){
    var tokenInstance;
    
    // it('initializes the contract with the correct values', function(){
    //     return SWToken.deployed().then(function(instance){
    //         tokenInstance =instance;
    //         return tokenInstance.name();
    //     }).then(function(name){
    //         assert.equal(name, 'SW Token', 'has the correct name');
    // //         return tokenInstance.symbol();
    // //     }).then (function(symbol){
    // //         assert.equal(symbol,'SW', 'has the correct symbol');
    //     });
    // })
    it('allocates the initial supply upon deployment',function(){
        return SWToken.deployed().then(function(instance){
            tokenInstance =instance;
            return tokenInstance.totalsupply();
        }).then(function(totalsupply){
            assert.equal(totalsupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
            return tokenInstance.balanceOf(accounts[0]);
        }).then(function(adminBalance){
            assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin');
        })
        });
        });
        
  