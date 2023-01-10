export class Contactpage
{
    
    
    contact_rec_email = '#recipient-email'
    contact_rec_name = '#recipient-name'
    contact_msg_text = '#message-text'


    clkContacttab(){
        cy.wait(2000)
        cy.xpath('//*[@id="navbarExample"]/ul/li[2]/a').click()
    } 
    enterRecemail(email){
        cy.wait(2000)
        cy.get(this.contact_rec_email).type(email)
    }
    enterRecname(rname){
        cy.wait(2000)
        cy.get(this.contact_rec_name).type(rname)
    }
    enterMessage(message){
        cy.wait(2000)
        cy.get(this.contact_msg_text).type(message)
    }
    clickSendmsg(){
        cy.xpath('//*[@id="exampleModal"]/div/div/div[3]/button[2]').click()
    }

}