var Teclado = (function() {
  function Teclado(elemento) {
    this.SETA_ESQUERDA = 37;
    this.SETA_DIREITA = 39;
    this.ESPACO = 32;
    
    this.elemento = elemento;
    
    this.pressionadas = [];
    this.disparadas = [];
    this.funcoesDisparo = [];
    
    var teclado = this;
    elemento.addEventListener('keydown', function(e) {      
      teclado.pressionadas[e.keyCode] = true;
      
      console.log(teclado.funcoesDisparo);
      
      if (teclado.funcoesDisparo[e.keyCode] && !teclado.disparadas[e.keyCode]) {
        teclado.disparadas[e.keyCode] = true;
        teclado.funcoesDisparo[e.keyCode]();
      }
      
    });
    elemento.addEventListener('keyup', function(e) {      
      teclado.pressionadas[e.keyCode] = false;
      teclado.disparadas[e.keyCode] = false;
    });
  }
  
  Teclado.prototype = {
    pressionada: function(tecla) {
      return this.pressionadas[tecla]; 
    },
    disparou: function(tecla, callback) {
      this.funcoesDisparo[tecla] = callback; 
    }
  };
  
  return Teclado;
})();