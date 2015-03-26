window.Spritesheet = (function() {
  function Spritesheet(context, imagem, linhas, colunas) {
    this.context = context;
    this.imagem = imagem;
    this.numLinhas = linhas;
    this.numColunas = colunas;
    this.intervalo = 0;
    this.linha = 0;
    this.coluna = 0;
  }
  
  Spritesheet.prototype = {
    proximoQuadro: function() {
      var agora = new Date().getTime();
      
      if (!this.ultimoTempo)
        this.ultimoTempo = agora;
      
      if (agora - this.ultimoTempo < this.intervalo)
        return;
      
      if (this.coluna < this.numColunas-1)
        this.coluna++;
      else
        this.coluna = 0;
      
      this.ultimoTempo = agora;
    },
    desenhar: function(x, y) {
      var larguraQuadrado = this.imagem.width / this.numColunas
        , alturaQuadrado = this.imagem.height / this.numLinhas;
        ;
      this.context.drawImage(this.imagem, larguraQuadrado * this.coluna,
                             alturaQuadrado * this.linha, larguraQuadrado,
                             alturaQuadrado, x, y, larguraQuadrado, alturaQuadrado);
    }
  }
  
  return Spritesheet;
})();