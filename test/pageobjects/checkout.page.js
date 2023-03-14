const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _sameAddress = '.checkbox-unchecked'

const _cashOnDelivery = '//div[@class="divide-y border rounded border-divider px-2 mb-2"]//div[1]//div//div//div//div//a'
const _paypalDelivery = '//div[@class="divide-y border rounded border-divider px-2 mb-2"]//div[2]//div//div//div//div//a'
const _visaDelivery = '//div[@class="divide-y border rounded border-divider px-2 mb-2"]//div[3]//div//div//div//div//a'

const _placeOrderBtn = '.button'
const _actualMessage = '//div[contains(text(), "Thank you")]'

const _visaCard = '.CardField-number-fakeNumber-number'
const _expiry = '[name="exp-date"]'
const _cvc = '[name="cvc"]'
const _visaPlaceOrderBtn = '//span[contains(text(), "Place Order")]' 

class CheckOut
{
    static async sameAddress()
    {
        await utils.clickOnElement(_sameAddress)
    }

    static async cashOnDelivery()
    {
        await utils.clickOnElement(_cashOnDelivery)
    }

    static async paypalDelivery()
    {
        await utils.clickOnElement(_paypalDelivery)
    }

    static async visaDelivery()
    {
        await utils.clickOnElement(_visaDelivery)
    }

    static async palceOrderButton()
    {
        await utils.clickOnElement(_placeOrderBtn)
    }

    static async actualMessage()
    {
        return $(_actualMessage).getText()
    }

    static async cardNumber()
    {
        await utils.typeText(_visaCard, dataInp.visaCard)
    }
    
    static async expiryCard()
    {
        await utils.typeText(_expiry, dataInp.expiry)
    }

    static async cvc()
    {
        await utils.typeText(_cvc, dataInp.cvc)
    }

    static async visaPlaceOrderBtn()
    {
        await utils.clickOnElement(_visaPlaceOrderBtn)
    }

    static async visaCardDetails()
    {
        await this.cardNumber()
        await this.expiryCard()
        await this.cvc()
        await this.visaPlaceOrderBtn()
    }

}
module.exports = CheckOut