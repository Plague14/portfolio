//chamando a função ao rolar a tela.
window.onscroll = function() {
    scrollFunc();
  };
  
  //função para exibir o botão apenas depois de rolar a tela
  function scrollFunc() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector(".btnTop").style.display = "block";
    } else {
      document.querySelector(".btnTop").style.display = "none";
    }
  }
  
  function backtoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }