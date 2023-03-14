const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _menShoes = '//div[@class="grid grid-cols-2 md:grid-cols-3 gap-2"]//div[1]//div[2]'
const _sizeMenShoes = '//a[contains(text(), "X")]'
const _colorMenShoes = '//a[contains(text(), "Black")]'
const _addToCart = '.button'
const _viewCartPopUp = '.add-cart-popup-button'
const _checkoutBtn = '[href="/checkout"]'

class MenPage
{
    static async menShoes()
    {
        await utils.clickOnElement(_menShoes)
    }

    static async sizeMensShoes()
    {
        await utils.clickOnElement(_sizeMenShoes)
    }

    static async colorMensShoes()
    {
        await utils.clickOnElement(_colorMenShoes)
    }

    static async addToCartButton()
    {
        await utils.clickOnElement(_addToCart)
    }

    static async viewCartPopUp()
    {
        await utils.clickOnElement(_viewCartPopUp)
    }

    static async checkOutButton()
    {
        await utils.clickOnElement(_checkoutBtn)
    }
}
module.exports = MenPage