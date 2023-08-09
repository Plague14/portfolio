var dados = ''

/* $.getJSON("data.json", function(data) {
    dados = data.custo;
    console.log(dados)
}); */

d3.json("./data.json", function(data) {
    var faturamento = data.faturamento;
    return d;
  }, function(error, data) {
    if (error) throw error;