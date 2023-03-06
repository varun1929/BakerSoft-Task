class RegistrationPage
{
    firstName() {
        return cy.get('input[id="customer.firstName"]')
    }
    lastName() {
        return cy.get('input[id="customer.lastName"]')
    }
    address() {
        return cy.get('input[id="customer.address.street"]')
    }
    city() {
        return cy.get('input[id="customer.address.city"]')
    }
    state() {
        return cy.get('input[id="customer.address.state"]')
    }
    zipCode() {
        return cy.get('input[id="customer.address.zipCode"]')
    }
    phone() {
        return cy.get('input[id="customer.phoneNumber"]')
    }
    ssn() {
        return cy.get('input[id="customer.ssn"]')
    }
    userName() {
        return cy.get('input[id="customer.username"]')
    }
    password() {
        return cy.get('input[id="customer.password"]')
    }
    repeatedPassword() {
        return cy.get('input[id="repeatedPassword"]')
    }
    confirm() {
        return cy.get('input[id=""]')
    }
    registerBtn() {
        return cy.get('input[value="Register"]')
    }
    userNameErrorMsg() {
        return cy.get('span[id="customer.username.errors"]')
    }
}

export default RegistrationPage