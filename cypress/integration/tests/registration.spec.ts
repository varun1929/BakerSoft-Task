/// <reference types = "Cypress" />
import RegistrationPage from "../../support/pageObjects/RegistrationPage"
import { faker } from '@faker-js/faker';
import { UserInfo } from '../../fixtures/userInfoTypes'
import AccountsPage from "../../support/pageObjects/AccountsPage";
import HomePage from "../../support/pageObjects/HomePage";

const user: UserInfo = {
    fname: faker.name.firstName(),
    lname: faker.name.lastName(),
    city: faker.address.cityName(),
    phone: faker.phone.number('############'),
    zipCode: faker.address.zipCode('#####'),
    userName: faker.name.firstName() + faker.name.lastName(),
    state: faker.address.state(),
    address: faker.address.streetAddress(false),
    ssn: faker.phone.number('#####'),
  }
  const homePage = new HomePage()
  const registrationPage = new RegistrationPage()
  const accountsPage = new AccountsPage()

describe('Registration with new user',() => {

    before( function() {
        cy.fixture('testData').then(function(data) {
            this.data = data
        })
        cy.visit(Cypress.env('url'))
    })

    it('Registration with new user', function() {
        //cy.visit(Cypress.env('url'))
        homePage.registerLink().click()
        registrationPage.firstName().type(user.fname)
        registrationPage.lastName().type(user.lname)
        registrationPage.address().type(user.address)
        registrationPage.city().type(user.city)
        registrationPage.state().type(user.state)
        registrationPage.zipCode().type(user.zipCode)
        registrationPage.phone().type(user.phone)
        registrationPage.ssn().type(user.ssn)
        registrationPage.userName().type(user.userName)
        registrationPage.password().type(this.data.password)
        registrationPage.repeatedPassword().type(this.data.password)
        registrationPage.registerBtn().click()
        accountsPage.registrationMsg().should('have.text','Your account was created successfully. You are now logged in.')
        const createdUser = { username:user.userName, password: this.data.password }
        cy.writeFile('cypress/fixtures/createdUser.json', createdUser)
        accountsPage.logOut().click()
    })
})
    describe('Registration with existing user',() => {

        before( function() {
            cy.fixture('testData').then(function(data) {
                this.data = data
            })
            cy.fixture('createdUser').then(function(user) {
                this.user = user
            })
            cy.visit(Cypress.env('url'))
        })
    it('Registration with existing user', function() {
        homePage.registerLink().click()
        registrationPage.firstName().type(user.fname)
        registrationPage.lastName().type(user.lname)
        registrationPage.address().type(user.address)
        registrationPage.city().type(user.city)
        registrationPage.state().type(user.state)
        registrationPage.zipCode().type(user.zipCode)
        registrationPage.phone().type(user.phone)
        registrationPage.ssn().type(user.ssn)
        registrationPage.userName().type(this.user.username)
        registrationPage.password().type(this.user.password)
        registrationPage.repeatedPassword().type(this.user.password)
        registrationPage.registerBtn().click()

        registrationPage.userNameErrorMsg().should('have.text','This username already exists.')
    })
})