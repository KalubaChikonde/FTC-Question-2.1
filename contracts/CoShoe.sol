pragma solidity >=0.4.17 <0.6.0;

contract CoShoe {
    //define struct Shoe that represents a shoe
    struct Shoe {
        address payable owner;  //the address of owner of the shoe
        string name;
        string image;
        bool sold;

    }
    uint256 price = 1;
    uint256 ShoesSold = 0;   
    Shoe[] public shoes;
    
    constructor() public{
        //mint 100 token 
        shoes.push(Shoe(msg.sender,"","",false)) -1 ; 
    }

    function buyShoe(string memory _name,string memory _image) public payable {

        require(shoes.length > 0 ,''); //check that there is still pair of shoes left has not been sold
        //require(price == msg.value, 'Price is not sufficient or too much'); // 
        shoes.push(Shoe(msg.sender, _name,_image,true));
        ShoesSold++;

    }

    function checkPurchases() external view returns(bool[] memory) {
        bool[] memory checkBuy; 
            // loop through the buyer addresses
        for (uint i = 0; i < shoes.length; i++){
        // check whether the msg.sender is among the buyer addresses
        if (shoes[i].owner == msg.sender){
            // if yes, return true
            checkBuy[i] = true;
        }
        }
        return checkBuy;

  }
}