class homePage{
    
    // Elementos
    el ={

        souTrabalhadorLink : () => cy.get(':nth-child(3) > .vr-main-navigation__link')
    }
        
    // Comandos
    visit() {

        cy.viewport(1366, 768)
        cy.visit('/')
    }    

    clicarLinkSouTrabalhador(){

        this.el.souTrabalhadorLink().click()
    }
}
    
module.exports = new homePage();