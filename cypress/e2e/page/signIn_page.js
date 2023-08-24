export class SignInPage{


    firstname_textbox = '#firstName'
    lastname_textbox = '#lastName'
    email_textbox = '#email'
    password_textbox = '#password'
    confirmPass_textbox = '#confirmPassword'
    dateOfBirth_box = '#dob'
    phoneNumber_box = '#phone'
    address_textbox = '#address'
    linkedin_textbox = '#linkedIn'
    github_textbox = '#github'


    enterFistname(firstname){
        cy.get(this.firstname_textbox).type(firstname)

    }

    enterLastname(lastname){
        cy.get(this.lastname_textbox).type(lastname)

    }
    enterEmail(email){
        cy.get(this.email_textbox).type(email)

    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    enterConfirmPassword(confirmPass){
        cy.get(this.confirmPass_textbox).type(confirmPass)
    }

    clickOnGenderMale(){
        cy.get('#male').click()
    }

    clickOnGenderFemale(){
        cy.get('#female').click()
    }

    clickOnGenderPreferNotToSay(){
        cy.get('#preferNotToSay').click()
    }

    enterDateOfBirth(date){
        cy.get(this.dateOfBirth_box).type(date)
    }

    enterPhoneNumber(number){
        cy.get(this.phoneNumber_box).type(number)
    }

    enterAddress(address){
        cy.get(this.address_textbox).type(address)
    }

    enterLinkedin(linkedin){
        cy.get(this.linkedin_textbox).type(linkedin)
    }

    enterGithub(github){
        cy.get(this.github_textbox).type(github)
    }

    clickOnSubmit(){
        cy.get('[type="submit"]').click()
    }

}