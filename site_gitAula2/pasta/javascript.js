var banners = ["TESTE AULA 24/09/2024", "ALTERANDO O TEXTO DO BANNER"];
var banner = 0;

function trocaBanner() {
  banner = (banner + 1) % 2;
  document.querySelector("h2#mensagem").textContent = banners[banner];
}
setInterval(trocaBanner, 1000);
