export class Loginpage
{

login_tab = '#login2'
login_username = '#loginusername'
login_password = '#loginpassword'
login_button = '//*[@id="logInModal"]/div/div/div[3]/button[2]'



    clickLogtab(){
        cy.get(this.login_tab).click()
    } 
    enterUsername(username){
        cy.wait(2000)
        cy.get(this.login_username).type(username)
    }
    enterPassword(password){
        cy.get(this.login_password).type(password)
    }
    clickLoginbutton(){
        cy.xpath(this.login_button, {timeout: 3000}).click()
        cy.contains('Welcome').click()
    }

}