const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _menShoes = '//div[@class="grid grid-cols-2 md:grid-cols-3 gap-2"]//div[1]//div[2]'
const _kidsShoes = '//span[contains(text(), "Continental 80 shoes")]'
const _womensShoes = '//span[contains(text(), "Alphaedge 4d reflective shoes R")]'

const _sizeMenShoes = '//a[contains(text(), "X")]'
const _sizeKidsShoes = '//a[contains(text(), "XL")]'
const _sizeWomensShoes = '//a[contains(text(), "XL")]'

const _colorMenShoes = '//a[contains(text(), "Black")]'
const _colorkidsShoes = '//a[contains(text(), "White")]'
const _colorWomensShoes = '//a[contains(text(), "Black")]'


const _addToCart = '.button'
const _viewCartPopUp = '.add-cart-popup-button'
const _checkoutBtn = '[href="/checkout"]'

class ShoesPage
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

    //_____________________kids_______________________

    static async kidsShoes()
    {
        await utils.clickOnElement(_kidsShoes)
    }

    static async sizeKidsShoes()
    {
        await utils.clickOnElement(_sizeKidsShoes)
    }

    static async colorKidsShoes()
    {
        await utils.clickOnElement(_colorkidsShoes)
    }

    //_____________________womens_______________________

    static async womensShoes()
    {
        await utils.clickOnElement(_womensShoes)
    }

    static async sizeWomensShoes()
    {
        await utils.clickOnElement(_sizeWomensShoes)
    }

    static async colorWomensShoes()
    {
        await utils.clickOnElement(_colorWomensShoes)
    }
}

module.exports = ShoesPage