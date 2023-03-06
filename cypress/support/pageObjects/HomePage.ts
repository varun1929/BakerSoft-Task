class HomePage
{
    registerLink() {
        return cy.get("a[href*='register']")
    }
}
export default HomePage