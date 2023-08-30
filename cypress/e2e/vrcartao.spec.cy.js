/// <reference types="cypress" />

import homePage from '../support/pages/homePage'
import ondeAceitaPage from '../support/pages/ondeAceitaPage'

describe('Frontend Test', () => {
    it('Onde usar meu cartao VR', () => {
    
      // Acessa o site
      homePage.visit()   
  
      // Navega até a seção "Pra Você"
      homePage.clicarLinkSouTrabalhador()
  
      // Clica no botão "Onde usar meu VR?"
      ondeAceitaPage.clicarOndeUsarVrBtn() 
  
      // Valida abertura mapa
      ondeAceitaPage.validarAberturaMapa()
    });
  });
  