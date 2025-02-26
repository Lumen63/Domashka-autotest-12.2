import * as main_page from "../../locators/main_page.json";
import * as recovery_password_page from "../../locators/recovery_password_page.json"
import * as result_page from "../../locators/result_page.json"
import * as data from "../../helpers/default_data.json"

    beforeEach('Начало теста', function () {
          cy.visit('/');
          cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
            });
 
    afterEach('Конец теста', function () {
          cy.get(result_page.close).should('be.visible');
         });

         it('Восстановление пароля', function () {
            cy.get(main_page.fogot_pass_btn).click();
            cy.get(recovery_password_page.email).type(data.login);
            cy.get(recovery_password_page.send_button).click();
            cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
        })