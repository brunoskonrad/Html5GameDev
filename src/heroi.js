var Heroi = (function() {
  var DIRECAO_DIREITA = 1, DIRECAO_ESQUERDA = 2;
  
  function Heroi(context, teclado, animacao) {
    this.context = context;
    this.teclado = teclado;
    this.animacao = animacao;
    
    this.x = 0;
    this.y = 0;
    
    this.direcao = DIRECAO_DIREITA;
    
    teclado.disparou(Teclado.ESPACO, function() {
      heroi.atirar();
    });
  }
  
  Heroi.prototype = {
    atualizar: function() {
      if (this.teclado.pressionada(Teclado.SETA_ESQUERDA) && this.x > 0) {
        this.x -= 10;
        this.direcao = DIRECAO_ESQUERDA;
      } else if (this.teclado.pressionada(Teclado.SETA_DIREITA) &&
                 this.x < this.context.canvas.width - 20) {
        this.x += 10;
        this.direcao = DIRECAO_DIREITA;
      }
    },
    desenhar: function() {
      this.context.fillRect(this.x, this.y, 20, 50);
    },
    atirar: function() {
      var tiro = new Bola(this.context);
      tiro.x = this.x + 10;
      tiro.y = this.y + 10;
      tiro.raio = 2;
      tiro.cor = 'red';
      
      if (this.direcao == DIRECAO_ESQUERDA) {
        tiro.velocidadeX = -20; 
      } else {
        tiro.velocidadeX = 20; 
      }
      
      this.animacao.novoSprite(tiro);
    }
  };
  
  return Heroi;
})();