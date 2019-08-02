pragma solidity >=0.4.17 <0.6.0;

contract CoShoe {
    //define struct Shoe that represents a shoe
    struct Shoe {
        address payable owner;  //the address of owner of the shoe
        string name;
        string image;
        bool sold;

    }
    uint256 price = 0.5*10**9;
    uint256 ShoesSold = 0;   
    Shoe[] public shoes;
    
    constructor() public{
        shoes.push(Shoe(msg.sender,"","",false)); 
    }


}