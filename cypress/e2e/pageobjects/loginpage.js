export class Loginpage
{

login_tab = '#login2'
login_username = '#loginusername'
login_password = '#loginpassword'


    clkLogtab(){
        cy.get(this.login_tab).click()
    } 
    enterUsername(username){
        cy.wait(2000)
        cy.get(this.login_username).type(username)
    }
    enterPassword(password){
        cy.get(this.login_password).type(password)
    }
    clickLoginbtn(){
        cy.xpath('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()
    }

}