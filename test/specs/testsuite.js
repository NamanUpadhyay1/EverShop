const utils = require("../specs/utils")
const homePage = require('../pageobjects/home.page')
const accountsPage = require('../pageobjects/account.page')
const mensPage = require('../pageobjects/men.page')
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

// describe('Verify user should be able to shop from Mens section with Cash on Delivery', async()=>
// {
//     it('Navigate to the correct Url', async()=>
//     {
//         await utils.openSite(dataInp.baseUrl)
//         const actualSite = await browser.getUrl()
//         await console.log('zzzzzzzzzz' + actualSite + 'zzzzzzzzzz');
//         const expectedSite = 'https://demo.evershop.io/'
//         expect(actualSite===expectedSite, "Site error")
//     })

//     it('Men -> Lite racer adapt 3.0 shoes -> X -> Black -> ADD TO CART -> VIEW CART -> CHECKOUT -> CASH ON DELIVERY ', async()=>
//     {
//         await homePage.mensOption()
//         await mensPage.menShoes()
//         await mensPage.sizeMensShoes()
//         await mensPage.colorMensShoes()
//         await utils.pauseTime(2000)
//         await mensPage.addToCartButton()
//         await utils.pauseTime(2000)
//         await mensPage.viewCartPopUp()
//         await mensPage.checkOutButton()
//         await utils.pauseTime(2000)
//         await shippingPage.shippingAddress()
//         await checkoutPage.cashOnDelivery()
//         await checkoutPage.palceOrderButton()
//         await utils.pauseTime(3000)
//     })

//     it('Assert Thank you page', async()=>
//     {
//         const actualMsg = await checkoutPage.actualMessage()
//         console.log('zzzzzzzzzzzzzzz' + actualMsg + 'zzzzzzzzzzzzzz');
//         const expectedMsg = 'Thank youNaman!!'
//         expect(actualMsg===expectedMsg)
//     })
// })

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
        await mensPage.menShoes()
        await mensPage.sizeMensShoes()
        await mensPage.colorMensShoes()
        await utils.pauseTime(2000)
        await mensPage.addToCartButton()
        await utils.pauseTime(2000)
        await mensPage.viewCartPopUp()
        await mensPage.checkOutButton()
        await utils.pauseTime(2000)
        await shippingPage.shippingAddress()
        //await checkoutPage.sameAddress()
        await utils.pauseTime(2000)
        await checkoutPage.visaDelivery()
        await utils.pauseTime(2000)
        await checkoutPage.visaCardDetails()
        await utils.pauseTime(2000)
    })
})