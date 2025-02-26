import * as main_page from "../../locators/main_page.json";
import * as result_page from "../../locators/result_page.json"
import * as data from "../../helpers/default_data.json"

    beforeEach('Начало теста', function () {
          cy.visit('/');
          cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
            });
 
    afterEach('Конец теста', function () {
          cy.get(result_page.close).should('be.visible');
         });

         it('Верный логин и не верный пароль', function () {
            cy.get(main_page.email).type(data.login);
            cy.get(main_page.password).type('qwedsa2');
            cy.get(main_page.login_button).click();
            cy.get(result_page.title).should('be.visible');
            cy.get(result_page.title).contains('Такого логина или пароля нет');
        })