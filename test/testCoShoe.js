const CoShoe = artifacts.require('./CoShoe.sol')

contract("CoShoe",(accounts) => {
    const shoeOwner = accounts[0]
    const randAddress = accounts[1]

    const exampleImageURL = "example.com"

    //predefine parameters
    const validShoe = {
        name: 'Co',
        image: exampleImageURL,
        sold: false

    }
    
    context("Buy Shoe", function (){
        it()
        

    })
    
}) 

