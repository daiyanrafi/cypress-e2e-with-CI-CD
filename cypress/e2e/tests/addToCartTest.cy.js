import { homePage } from "../../pages/homePage";
import testData from "../../fixtures/testData.json"


const homePageObj = new homePage()

describe('test automation', ()=>{
    before(() =>{
        cy.login(testData.login.username, testData.login.password)
    })

    it('Add to Cart flow',()=>{
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName)
    })
})