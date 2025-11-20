/// <reference types="cypress" />

export default {
   clickLogin() {
    cy.get('#btnLogin').click()
   },

    errorInputValid(message) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', message)
   },

   fillEmail(email) {
        cy.get('#user').type(email)
   },

   fillPassword(password) {
        cy.get('#password').type(password)
   },

   successMessageValid(mail) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', "Login realizado")

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${mail}`)
   }
}