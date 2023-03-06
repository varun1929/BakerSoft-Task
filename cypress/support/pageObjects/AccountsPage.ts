class AccountsPage
{
    registrationMsg() {
        return cy.get('#rightPanel > p')
    }
    logOut() {
        return cy.get('#leftPanel > ul > :nth-child(8) > a')
    }
}

export default AccountsPage