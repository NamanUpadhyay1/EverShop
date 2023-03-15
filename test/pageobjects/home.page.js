const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _profileBtn = '[href="/account/login"]'
const _loginProfileBtn = '[href="/account"]'
const _mensOption = '//a[contains(text(), "Men")]'
const _kidsOption = '//a[contains(text(), "Kids")]'
const _womensOption = '//a[contains(text(), "Women")]'

class HomePage
{
    static async profileButton()
    {
        await utils.clickOnElement(_profileBtn)
    }

    static async loginProfileButton()
    {
        await utils.clickOnElement(_loginProfileBtn)
    }

    static async mensOption()
    {
        await utils.clickOnElement(_mensOption)
    }

    static async kidsOption()
    {
        await utils.clickOnElement(_kidsOption)
    }

    static async womensOption()
    {
        await utils.clickOnElement(_womensOption)
    }
    
}

module.exports = HomePage