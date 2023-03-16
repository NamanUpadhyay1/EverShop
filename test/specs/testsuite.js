const utils = require("../specs/utils")
const homePage = require('../pageobjects/home.page')
const accountsPage = require('../pageobjects/account.page')
const shoesPage = require('../pageobjects/shoes.page')
const shippingPage = require('../pageobjects/shipping.page')
const checkoutPage = require('../pageobjects/checkout.page')


const dataInp = require('../../testConfig.json')
const { expect, assert, Assertion } = require("chai")
let date = new Date().getTime()
const recentEmail = `naman${date}@gmail.com`

describe('Verify, user should be able to register a new account', async()=>
{
    it('Navigate to the correct Url', async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        const actualSite = await browser.getUrl()
        await console.log('zzzzzzzzzz' + actualSite + 'zzzzzzzzzz');
        const expectedSite = 'https://demo.evershop.io/'
        expect(actualSite===expectedSite, "Site error")
    })

    it('Registering a new account', async()=>
    {
        await homePage.profileButton()
        await accountsPage.registerButton()
        await accountsPage.fullNameText()
        await accountsPage.emailText(recentEmail)
        await accountsPage.passwordText()
        await accountsPage.signUpButton()
        await utils.pauseTime(3000)
    })
})

// describe('Verify, user should be able to log into their account', async()=>
// {
//     it('Navigate to the correct Url', async()=>
//     {
//         await utils.openSite(dataInp.baseUrl)
//         const actualSite = await browser.getUrl()
//         await console.log('zzzzzzzzzz' + actualSite + 'zzzzzzzzzz');
//         const expectedSite = 'https://demo.evershop.io/'
//         expect(actualSite===expectedSite, "Site error")
//     })

//     it('Login recently created account', async()=>
//     {
//         await homePage.loginProfileButton()
//         await accountsPage.logoutButton()
//         await homePage.profileButton()
//         await accountsPage.loginEmailText(recentEmail)
//         await accountsPage.loginPasswordText()
//         await accountsPage.loginSubmitButton()
//         await utils.pauseTime(3000)
//     })
// })

describe('Verify user should be able to shop from Mens section with Cash on Delivery', async()=>
{
    it('Navigate to the correct Url', async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        const actualSite = await browser.getUrl()
        await console.log('zzzzzzzzzz' + actualSite + 'zzzzzzzzzz');
        const expectedSite = 'https://demo.evershop.io/'
        expect(actualSite===expectedSite, "Site error")
    })

    it('Men -> Lite racer adapt 3.0 shoes -> X -> Black -> ADD TO CART -> VIEW CART -> CHECKOUT -> CASH ON DELIVERY ', async()=>
    {
        await homePage.mensOption()
        await shoesPage.menShoes()
        await shoesPage.sizeMensShoes()
        await shoesPage.colorMensShoes()
        await utils.pauseTime(2000)
        await shoesPage.addToCartButton()
        await utils.pauseTime(2000)
        await shoesPage.viewCartPopUp()
        await shoesPage.checkOutButton()
        await utils.pauseTime(2000)
        await shippingPage.shippingAddress()
        await checkoutPage.cashOnDelivery()
        await checkoutPage.palceOrderButton()
        await utils.pauseTime(3000)
    })

    it('Assert order success message', async()=>
    {
        await checkoutPage.assertThankYou()
    })
})

describe('Verify user should be able to shop from Mens section with Visa Card', async()=>
{
    it('Navigate to the correct Url', async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        const actualSite = await browser.getUrl()
        await console.log('zzzzzzzzzz' + actualSite + 'zzzzzzzzzz');
        const expectedSite = 'https://demo.evershop.io/'
        expect(actualSite===expectedSite, "Site error")
    })

    it('Men -> Lite racer adapt 3.0 shoes -> X -> Black -> ADD TO CART -> VIEW CART -> CHECKOUT -> Visa ', async()=>
    {
        await homePage.mensOption()
        await shoesPage.menShoes()
        await shoesPage.sizeMensShoes()
        await shoesPage.colorMensShoes()
        await utils.pauseTime(2000)
        await shoesPage.addToCartButton()
        await utils.pauseTime(2000)
        await shoesPage.viewCartPopUp()
        await shoesPage.checkOutButton()
        await utils.pauseTime(2000)
        await shippingPage.shippingAddress()
        await utils.pauseTime(2000)
        await checkoutPage.visaDelivery()
        await utils.pauseTime(2000)
        await checkoutPage.visaCardDetails()
        await utils.pauseTime(2000)
    })
it('Assert order success message', async()=>
    {
        await checkoutPage.assertThankYou()
    })
})

//________________________Kids_________________________

describe('Verify user should be able to shop from Kids section with Cash on Delivery', async()=>
{
    it('Navigate to the correct Url', async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        const actualSite = await browser.getUrl()
        await console.log('zzzzzzzzzz' + actualSite + 'zzzzzzzzzz');
        const expectedSite = 'https://demo.evershop.io/'
        expect(actualSite===expectedSite, "Site error")
    })

    it('Kids -> Continental 80 shoes -> XL -> White -> ADD TO CART -> VIEW CART -> CHECKOUT -> CASH ON DELIVERY ', async()=>
    {
        await homePage.kidsOption()
        await shoesPage.kidsShoes()
        await shoesPage.sizeKidsShoes()
        await shoesPage.colorKidsShoes()
        await utils.pauseTime(2000)
        await shoesPage.addToCartButton()
        await utils.pauseTime(2000)
        await shoesPage.viewCartPopUp()
        await shoesPage.checkOutButton()
        await utils.pauseTime(2000)
        await shippingPage.shippingAddress()
        await checkoutPage.cashOnDelivery()
        await checkoutPage.palceOrderButton()
        await utils.pauseTime(3000)
    })

    it('Assert order success message', async()=>
    {
        await checkoutPage.assertThankYou()
    })
})

describe('Verify user should be able to shop from Kids section with Visa Card', async()=>
{
    it('Navigate to the correct Url', async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        const actualSite = await browser.getUrl()
        await console.log('zzzzzzzzzz' + actualSite + 'zzzzzzzzzz');
        const expectedSite = 'https://demo.evershop.io/'
        expect(actualSite===expectedSite, "Site error")
    })

    it('Kids -> Continental 80 shoes -> XL -> White -> ADD TO CART -> VIEW CART -> CHECKOUT -> Visa ', async()=>
    {
        await homePage.kidsOption()
        await shoesPage.kidsShoes()
        await shoesPage.sizeKidsShoes()
        await shoesPage.colorKidsShoes()
        await utils.pauseTime(2000)
        await shoesPage.addToCartButton()
        await utils.pauseTime(2000)
        await shoesPage.viewCartPopUp()
        await shoesPage.checkOutButton()
        await utils.pauseTime(2000)
        await shippingPage.shippingAddress()
        await utils.pauseTime(2000)
        await checkoutPage.visaDelivery()
        await utils.pauseTime(2000)
        await checkoutPage.visaCardDetails()
        await utils.pauseTime(2000)
    })
    it('Assert order success message', async()=>
    {
        await checkoutPage.assertThankYou()
    })
})

//________________________Womens__________________________


describe('Verify user should be able to shop from Womens section with Cash on Delivery', async()=>
{
    it('Navigate to the correct Url', async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        const actualSite = await browser.getUrl()
        await console.log('zzzzzzzzzz' + actualSite + 'zzzzzzzzzz');
        const expectedSite = 'https://demo.evershop.io/'
        expect(actualSite===expectedSite, "Site error")
    })

    it('Women -> Alphaedge 4d reflective shoes R -> XL -> Black -> ADD TO CART -> VIEW CART -> CHECKOUT -> CASH ON DELIVERY ', async()=>
    {
        await homePage.womensOption()
        await shoesPage.womensShoes()
        await shoesPage.sizeWomensShoes()
        await shoesPage.colorWomensShoes()
        await utils.pauseTime(2000)
        await shoesPage.addToCartButton()
        await utils.pauseTime(2000)
        await shoesPage.viewCartPopUp()
        await shoesPage.checkOutButton()
        await utils.pauseTime(2000)
        await shippingPage.shippingAddress()
        await checkoutPage.cashOnDelivery()
        await checkoutPage.palceOrderButton()
        await utils.pauseTime(3000)
    })

    it('Assert order success message', async()=>
    {
        await checkoutPage.assertThankYou()
    })
})

describe('Verify user should be able to shop from Womens section with Visa Card', async()=>
{
    it('Navigate to the correct Url', async()=>
    {
        await utils.openSite(dataInp.baseUrl)
        const actualSite = await browser.getUrl()
        await console.log('zzzzzzzzzz' + actualSite + 'zzzzzzzzzz');
        const expectedSite = 'https://demo.evershop.io/'
        expect(actualSite===expectedSite, "Site error")
    })

    it('Women -> Alphaedge 4d reflective shoes R -> XL -> Black -> ADD TO CART -> VIEW CART -> CHECKOUT -> Visa ', async()=>
    {
        await homePage.womensOption()
        await shoesPage.womensShoes()
        await shoesPage.sizeWomensShoes()
        await shoesPage.colorWomensShoes()
        await utils.pauseTime(2000)
        await shoesPage.addToCartButton()
        await utils.pauseTime(2000)
        await shoesPage.viewCartPopUp()
        await shoesPage.checkOutButton()
        await utils.pauseTime(2000)
        await shippingPage.shippingAddress()
        await utils.pauseTime(2000)
        await checkoutPage.visaDelivery()
        await utils.pauseTime(2000)
        await checkoutPage.visaCardDetails()
        await utils.pauseTime(2000)
    })

    it('Assert order success message', async()=>
    {
        await checkoutPage.assertThankYou()
    })
})