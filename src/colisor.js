window.Colisor = (function() {
  function Colisor() {
    this.sprites = [];
  }
  
  Colisor.prototype = {
    novoSprite: function(sprite) {
      this.sprites.push(sprite); 
    },
    processar: function() {
      var jaTestados = {};
      
      // algoritmo de 'todos contra todos'
      for (var i in this.sprites) {
        for (var j in this.sprites) {
          if (i == j)
            continue;
          var id1 = this.sprites[i].stringUnica()
            , id2 = this.sprites[j].stringUnica()
            ;
          if (!jaTestados[id1])
            jaTestados[id1] = [];
          if (!jaTestados[id2])
            jaTestados[id2] = [];
          
          if (!(jaTestados[id1].indexOf(id2) >= 0 ||
                jaTestados[id2].indexOf(id1) >= 0)) {
            this.testarColisao(this.sprites[i], this.sprites[j]);
            jaTestados[id1].push(id2);
            jaTestados[id2].push(id1);
          }
        }
      }
    },
    testarColisao: function(origem, alvo) {
      var retsOrigem = origem.retangulosColisao()
        , retsAlvo = alvo.retangulosColisao()
        ;
      for (var i in retsOrigem) {
        for (var j in retsAlvo) {
          if (this.retangulosColidem(retsOrigem[i], retsAlvo[j])) {
            origem.colidiuCom(alvo);
            alvo.colidiuCom(origem);
            
            continue;
          }
        }
      }
    },
    retangulosColidem: function(ret1, ret2) {
      return (ret1.x + ret1.largura) > ret2.x &&
        ret1.x < (ret2.x + ret2.largura) &&
        (ret1.y + ret1.altura) > ret2.y &&
        ret1.y < (ret2.y + ret2.altura);
    }
  };
  
  return Colisor;
})();