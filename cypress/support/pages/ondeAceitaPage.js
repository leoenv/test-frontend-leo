class ondeAceitaPage{
    
    // Elementos
    el ={

        souTrabalhadorDropDown: () => cy.get(':nth-child(3) > .vr-main-navigation__link'),
        ondeUsarVrBtn: () => cy.get(':nth-child(3) > .vr-main-navigation__submenu > :nth-child(2) > .vr-main-navigation__sublink'),
        mapaElement: () => cy.get('#mapSection')
    }
        
    // Comandos
    clicarOndeUsarVrBtn(){

        this.el.souTrabalhadorDropDown().realHover('mouse')
        this.el.ondeUsarVrBtn().click()
    }

    validarAberturaMapa(){
        
        this.el.mapaElement().scrollIntoView().should('be.visible').realHover('mouse')
    }
}
    
module.exports = new ondeAceitaPage();