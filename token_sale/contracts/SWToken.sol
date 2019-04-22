// pragma solidity ^0.5.0;

// contract SWToken{
//   //Constructor
//   //Set the total number of tokens
//   //Read the total number of tokens
//     uint256 public totalsupply;

//     constructor () public{
//         totalsupply =1000000;
//     }
// }
// ===============================================
pragma solidity ^0.5.0;

contract SWToken{
  //Name
  string public name =" SW Token";
  //Symbol
  string public symbol="SW";
  //Constructor
  //Set the total number of tokens
  //Read the total number of tokens
    uint256 public totalsupply;
  
    mapping(address => uint256)public balanceOf;
      // uint256=balance of address
      // mapping is reposible for the token that have been sold or send to other address

    constructor (uint256 _initialSupply) public{ 
        balanceOf[msg.sender]=_initialSupply;
        totalsupply =_initialSupply;
          // allocated the token



    }
}