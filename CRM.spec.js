describe('Login', function(){
  it('Sign in',function(){
    cy.visit("http://fintrakcrm.azurewebsites.net/account/login")
    cy.get("#loginusername").type("temitope.olabisi@fintraksoftware.com")
    cy.get("#loginpassword").type("Password10$")
    cy.get("#btnSignin").click()
  })
})
