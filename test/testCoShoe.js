const CoShoe = artifacts.require('./CoShoe.sol')

contract("CoShoe",(accounts) => {
    const shoeOwner = accounts[0]
    const shoeBuyer = accounts[1]

    //const exampleImageURL = "nike.com"

    //predefine parameters
    const validShoe = {
        name: 'Kaluba',
        image: 'nike.com',
        sold: false,
        price: web3.utils.toWei('0.5', 'ether')

    }

    // Initialize shoes sold and shoe price
    let noShoes = 0;
    let price = web3.utils.toWei('0.5', 'ether');
    let mintedShoes = 100;
    
    it('correctly mints 100 tokens on deployment', async function() {
        //fetch instance of CoShoe
        let ShoeInstance = await CoShoe.deployed()
        //get number of shoes
        let shoeCounter = await ShoeInstance.getNumberOfShoes()
        // check that there are 100 shoes initially
        assert.equal(shoeCounter,mintedShoes,"number of tokens minted is not 100")

    })
    
    context("Buy Shoe", function (){
        it('correctly transfers ownership', async () => {
            //fetch instance of CoShoe
            let ShoeInstance = await CoShoe.deployed()


            await ShoeInstance.buyShoe(validShoe.name,validShoe.image,
               { from: shoeOwner, value: validShoe.price }
            )
           let shoe = await ShoeInstance.shoes(1)


            assert.equal(shoe['owner'],shoeOwner, 'Owner does not match')
            assert.equal(shoe['name'],validShoe.name,'name does not match')
            assert.equal(shoe['image'],validShoe.image,'image does not match')
            assert.equal(shoe.sold, true, 'status not changed') 
             assert.equal(validShoe.price, price, " Insufficient funds")
            
          


        })

        it('should return correct number of trues in array', async () => {
            //fetch instance of CoShoe
            let ShoeInstance = await CoShoe.deployed()

            let checkPurchase = await ShoeInstance.checkPurchases()
            let count = 0
            for (var i = 0; i < checkPurchase.length; i++){ 
                 var purchase = checkPurchase[i]
                 if (purchase == true) {
                     count = count + 1
                 }
            }
            assert.equal(count, 1, 'Should be true')
        })
        

    })
    
}) 

