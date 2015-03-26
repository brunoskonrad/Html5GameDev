window.Sonic = (function() {  
  function Sonic(context, teclado, imagem) {
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;
    
    this.andando = false;
    this.direcao = Sonic.DIREITA;
    
    this.sheet = new Spritesheet(context, imagem, 3, 8);
    this.sheet.intervalo = 60;
    
    this.velocidade = 10;
  }
  
  Sonic.DIREITA = 1;
  Sonic.ESQUERDA = 2;
  
  Sonic.prototype = {
    atualizar: function() {
      if (this.teclado.pressionada(Teclado.SETA_DIREITA)) {
        if (!this.andando || this.direcao != Sonic.DIREITA) {
          this.sheet.linha = 1;
          this.sheet.coluna = 0;
        }
        
        this.andando = true;
        this.direcao = Sonic.DIREITA;
        
        this.sheet.proximoQuadro();
        this.x += this.velocidade;
      } else if (this.teclado.pressionada(Teclado.SETA_ESQUERDA)) {
        if (!this.andando || this.direcao != Sonic.ESQUERDA) {
          this.sheet.linha = 2;
          this.sheet.coluna = 0;
        }
        
        this.andando = true;
        this.direcao = Sonic.ESQUERDA;
        
        this.sheet.proximoQuadro();
        this.x -= this.velocidade;
      } else {
        this.sheet.linha = 0;
        this.andando = false;
        if (this.direcao == Sonic.DIREITA) {
          this.sheet.coluna = 0;
        } else {
          this.sheet.coluna = 1;
        }
      }
    },
    desenhar: function() {
      this.sheet.desenhar(this.x, this.y);
    }
  };
  
  return Sonic;
})();