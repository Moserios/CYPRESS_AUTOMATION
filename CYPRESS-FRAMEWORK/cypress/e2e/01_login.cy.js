import {url, login_name, login_password} from '../../config' 
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import '../support/commands'

describe('Login Failed Test', () => {
    before(function() {

        cy.visit('http://zero.webappsecurity.com/index.html')
        Navbar.clickSignIn()
    })

    it('login with invalid credentials', () => {
        LoginPage.login('invalid_username', 'invalid_password')
        LoginPage.displayErrorMessage()
    })


})


describe('Login Success Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')           //'http://zero.webappsecurity.com/index.html'
        Navbar.clickSignIn()
    })

    it('login with correct credentials', () => {
        LoginPage.login(login_name, login_password)
    })


})