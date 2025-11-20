/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page';


describe('Login do Usuário', () => {

    beforeEach ('Acessar cadastro de usuário', () => {
            commum_page.accessUserLogin()
        })

    it('Campo E-mail vazio', () => {
        login_page.clickLogin()
        login_page.errorInputValid('E-mail inválido.')        

    })

    it('Campo E-mail inválido', () => {
       login_page.fillEmail(faker.person.firstName())
       login_page.clickLogin()
       login_page.errorInputValid('E-mail inválido.')

    })

    it('Campo Senha vazio', () => {
        login_page.fillEmail(faker.internet.email())
        login_page.clickLogin()
        login_page.errorInputValid('Senha inválida.')


    })

    it('Campo Senha inválido', () => {
        login_page.fillEmail(faker.internet.email())
        login_page.fillPassword('12345')
        login_page.clickLogin()
        login_page.errorInputValid('Senha inválida.')

    })


    it('Login com sucesso', () => {    
            const mail = faker.internet.email()
        
            login_page.fillEmail(mail)
            login_page.fillPassword('123456')
            login_page.clickLogin()
            login_page.successMessageValid(mail)

    })
    
})