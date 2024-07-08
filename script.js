//essa função vai mudar a aparência do site por meio do botão
function mudar() {
  const html = document.documentElement //no HTML, o documento vai acessar todos os elementos de documento

  //Se na lista de classe no html conter branco, vai remover a classe branco
  if (html.classList.contains("branco")) {
    html.classList.remove("branco")
  }
  //Senão conter branco na lista de classe do html, vai adicionar a classe branco
  else {
    html.classList.add("branco")
  }
  //a forma simplificada do booleano acima; IF e ELSE; é: html.classList.toggle("branco"); pois "toggle" é uma função que já tem a funcionalidade da que foi criada acima.


  const img = document.querySelector("#perfil img") //vai selecionar o documento "id perfil img", e o salvará dentro dessa constante "img".

  //Se na lista de classe no html conter branco, vai atribuir a constante "img", uma nova imagem e texto
  if (html.classList.contains("branco")) {
    img.setAttribute("src","./assets/Breno2.png")
    img.setAttribute("alt","Foto de Breno, com uma parede azul e porta marrom atrás dele")
    //Senão conter branco na lista de classe no html, vai atribuir a constante "img", uma nova imagem e texto; na verade, a que já está no html
  } else {
    img.setAttribute("src","./assets/Breno.png")
    img.setAttribute("alt","Foto de Breno com camisa social cor de vinho, e ao fundo há um portão e uma escadaria")
  }
}