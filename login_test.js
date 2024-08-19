Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','franbasagni@gmail.com')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 10)

}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','franbasagni@gmail.com')
    I.fillField('#password','')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 10)
    
}).tag('@invalido')

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','')
    I.fillField('#password','')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 10)
    
}).tag('@invalido')

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 11)
    
}).tag('@invalido')

