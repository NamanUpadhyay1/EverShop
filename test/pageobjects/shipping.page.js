const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _fullName = '[placeholder="Full Name"]'
const _telephone = '[placeholder="Telephone"]'
const _address = '[placeholder="Address"]'
const _city = '[placeholder="City"]'

const _countryDropDown = "[placeholder='Country']"
const _provinceDropDown = '[placeholder="Province"]'

const _postCode = '[placeholder="Postcode"]'
const _freeShipping = '.radio-unchecked'
const _continueToPayment = '.button'

class ShippingPage
{
    static async fullNameShipping()
    {
        await utils.typeText(_fullName, dataInp.fullName)
    }

    static async telephoneShipping()
    {
        await utils.typeText(_telephone, dataInp.telephone)
    }

    static async address()
    {
        await utils.typeText(_address, dataInp.address)
    }

    static async city()
    {
        await utils.typeText(_city, dataInp.city)
    }

    static async country()
    {
        await utils.clickOnElement(_countryDropDown)
    }

    static async countryIndex()
    {
        await utils.visibleDropDown(_countryDropDown, "United States")
    }

    static async provice()
    {
        await utils.visibleDropDown(_provinceDropDown, "Arizona")
    }

    static async postCode()
    {
        await utils.typeText(_postCode, dataInp.postCode)
    }

    static async freeShipping()
    {
        await utils.clickOnElement(_freeShipping)
    }

    static async continueToPaymentButton()
    {
        await utils.clickOnElement(_continueToPayment)
    }

    static async shippingAddress()
    {
        await this.fullNameShipping()
        await this.telephoneShipping()
        await this.address()
        await this.city()
        await this.countryIndex()
        await utils.pauseTime(2000)
        await this.provice()
        await this.postCode()
        await this.freeShipping()
        await this.continueToPaymentButton()
    }
   
}
module.exports = ShippingPage