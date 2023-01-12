export class Contactpage
{
    
    
    contact_rec_email = '#recipient-email'
    contact_rec_name = '#recipient-name'
    contact_msg_text = '#message-text'
    click_contact_tab = '//*[@id="navbarExample"]/ul/li[2]/a'
    click_send_message = '//*[@id="exampleModal"]/div/div/div[3]/button[2]'


    clickContacttab(){
        cy.wait(2000)
        cy.xpath(this.click_contact_tab).click()
    } 
    enterReceiveremail(email){
        //cy.wait(2000)
        cy.get(this.contact_rec_email, {timeout:3000}).type(email)
    }
    enterReceivername(rname){
        //cy.wait(2000)
        cy.get(this.contact_rec_name, {timeout:3000}).type(rname)
    }
    enterMessage(message){
       // cy.wait(2000)
        cy.get(this.contact_msg_text, {timeout:3000}).type(message)
    }
    clickSendmessage(){
        cy.xpath(this.click_send_message, {timeout:3000}).click()
    }

}