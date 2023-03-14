const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _registerBtn = '.text-interactive'
const _fullNameText = '[name="full_name"]'
const _emailText = '[name="email"]'
const _passwordText = '[name="password"]'
const _signUpBtn = '.button'

const _loginEmail = '[name="email"]'
const _loginPassword = '[name="password"]'
const _loginSubmitBtn = '.button'
const _logoutBtn = '.text-interactive'

class AccountPage
{
    //_____________________________Register______________________________

    static async registerButton()
    {
        await utils.clickOnElement(_registerBtn)
    }

    static async fullNameText()
    {
        await utils.typeText(_fullNameText, dataInp.fullName)
    }

    static async emailText(recentEmail)
    {
        await utils.typeText(_emailText, recentEmail)
    }

    static async passwordText()
    {
        await utils.typeText(_passwordText, dataInp.password)
    }

    static async signUpButton()
    {
        await utils.clickOnElement(_signUpBtn)
    }

    //_____________________________Login______________________________

    static async logoutButton()
    {
        await utils.clickOnElement(_logoutBtn)
    }

    static async loginEmailText(recentEmail)
    {
        await utils.typeText(_loginEmail, recentEmail)
    }

    static async loginPasswordText()
    {
        await utils.typeText(_loginPassword, dataInp.password)
    }

    static async loginSubmitButton()
    {
        await utils.clickOnElement(_loginSubmitBtn)
    }
}
module.exports = AccountPage