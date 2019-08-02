const CoShoe = artifacts.require('./CoShoe.sol')

contract("CoShoe",(accounts) => {
    const shoeOwner = accounts[0]
    const randAddress = accounts[1]

    const exampleImageURL = "example.com"

    //predefine parameters
    const validShoe = {
        name: '',
        image: '',
        sold: false,
        price: 1

    }

    // Initialize shoes sold
    let noShoes = 0;
    let price = 1;
    
    context("Buy Shoe", function (){
        it('correctly transfers ownership', async () => {
            let ShoeInstance = await CoShoe.deployed()

            await ShoeInstance.buyShoe(validShoe.name,validShoe.image, {
                from: shoeOwner
            })
            let shoe = await ShoeInstance.shoes(0)


            assert.equal(shoe['owner'],shoeOwner, 'Owner does not match')
            assert.equal(shoe['name'],validShoe.name,'name does not match')
            assert.equal(shoe['image'],validShoe.image,'image does not match')
            assert.equal(shoe.sold, false, 'status not changed') //review
            
            assert.equal(validShoe.price, price, "Not sufficient funds")
            noShoes += 1;
            console.log(noShoes)


        })

        it('should return correct number of trues', async () => {
            let ShoeInstance = await CoShoe.deployed()

            let checkBuy = await ShoeInstance.checkPurchases()
            //assert.equal(checkBuy, true, 'Should be true')
        })
        

    })
    
}) 

