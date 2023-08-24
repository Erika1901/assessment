/// <reference types="cypress"/>
import { SignInPage } from "./page/signIn_page"

const signinPage = new SignInPage()

describe('All test', () => {

    beforeEach(()=>{
        cy.visit('https://qa-assessment.pages.dev/')
      
    })


it('Successful Sign in', () => {

   signinPage.enterFistname('Admin')
   signinPage.enterLastname('User')
   signinPage.enterEmail('user@gmail.com')
   signinPage.enterPassword('Admin123')
   signinPage.enterConfirmPassword('Admin123')
   signinPage.clickOnGenderFemale()
   signinPage.enterDateOfBirth('2000-12-19')
   signinPage.enterPhoneNumber('0656630510')
   signinPage.enterAddress('Bonamoussadi')
   signinPage.enterLinkedin('https://www.linkedin.com/in/adminuser')
   signinPage.enterGithub('https://github.com/adminuser')
   signinPage.clickOnSubmit()

})

it('Unsucessful Sign in because passwords do not match ', () => {

    signinPage.enterFistname('Omega')
    signinPage.enterLastname('User')
    signinPage.enterEmail('user1@gmail.com')
    signinPage.enterPassword('Alpha123')
    signinPage.enterConfirmPassword('Alph123')
    signinPage.clickOnSubmit()
    cy.on('window:alert',(txt)=>{
        //Mocha assertions
        expect(txt).to.contains('Passwords do not match');
     })
})

it('unappropriated error message ', () => {

    signinPage.enterFistname('Omega')
    signinPage.enterLastname('User')
    signinPage.enterEmail('user1@gmail.com')
    cy.get('#password').should('be.empty')
    signinPage.enterConfirmPassword('Alph123')
    signinPage.clickOnSubmit()
    cy.on('window:alert',(txt)=>{
        //Mocha assertions with consciously made error instead of the page alert who is 'Passwords do not match'
        expect(txt).to.contains('Password must be filled out');
     })
})
it('Sign in with invalid names', () => {

    signinPage.enterFistname('Admin2')
    signinPage.enterLastname('User')
    signinPage.enterEmail('user2@gmail.com')
    signinPage.enterPassword('Admin123')
    signinPage.enterConfirmPassword('Admin123')
    signinPage.clickOnSubmit()
    cy.on('window:alert',(txt)=>{
        //Mocha assertions
        expect(txt).to.contains('First name must contain alphabetical characters only');
     })
})

it('Verify if linkedin is optional', () => {

    signinPage.enterFistname('Beta')
    signinPage.enterLastname('User')
    signinPage.enterEmail('user2@gmail.com')
    signinPage.enterPassword('Admin123')
    signinPage.enterConfirmPassword('Admin123')
    signinPage.clickOnSubmit()
    cy.on('window:alert',(txt)=>{
        //Mocha assertions
        expect(txt).to.contains('LinkedIn must be filled out');
     })
})
})