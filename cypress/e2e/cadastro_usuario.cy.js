/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import commum_page from '../support/pages/commum_page'
import user_registration from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {

    beforeEach ('Acessar cadastro de usuário', () => {
        commum_page.accessUserRegistration()
    })
    
    it('Campo Nome vazio', () => {
        user_registration.clickRegister()
        user_registration.errorMessageValid('O campo nome deve ser prenchido')

    })

    it('Campo E-mail vazio', () => {
        user_registration.fillName(faker.person.fullName())
        user_registration.clickRegister()
        user_registration.errorMessageValid('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo E-mail inválido', () => {
        user_registration.fillName(faker.person.fullName())
        user_registration.fillEmail(faker.person.firstName())
        user_registration.clickRegister()
        user_registration.errorMessageValid('O campo e-mail deve ser prenchido corretamente')


    })

    it('Campo Senha vazio', () => {
        user_registration.fillName(faker.person.fullName())
        user_registration.fillEmail(faker.internet.email())
        user_registration.clickRegister()
        user_registration.errorMessageValid('O campo senha deve ter pelo menos 6 dígitos')
        
    })

    it('Campo Senha inválido', () => {
        user_registration.fillName(faker.person.fullName())
        user_registration.fillEmail(faker.internet.email())
        user_registration.fillPassword('1234')
        user_registration.clickRegister()
        user_registration.errorMessageValid('O campo senha deve ter pelo menos 6 dígitos')
        

    })

    it('Cadastro com sucesso', async () => {        
        const name = await faker.person.fullName()

        user_registration.fillName(name)
        user_registration.fillEmail(faker.internet.email())
        user_registration.fillPassword('123456')
        user_registration.clickRegister()
        user_registration.successMessageValid(name)



    })
})