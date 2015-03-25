var Teclado = (function() {
  function Teclado(elemento) {    
    this.elemento = elemento;
    
    this.pressionadas = [];
    this.disparadas = [];
    this.funcoesDisparo = [];
    
    var teclado = this;
    elemento.addEventListener('keydown', function(e) {      
      teclado.pressionadas[e.keyCode] = true;
      
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
  
  Teclado.SETA_ESQUERDA = 37;
  Teclado.SETA_DIREITA = 39;
  Teclado.ESPACO = 32;
  
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