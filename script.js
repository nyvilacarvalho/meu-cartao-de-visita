function toggleMode () {
  const html = document.documentElement
  html.classList.toggle("white")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('white')){
  // se tiver white mode, subistituir para imagem 2
  img.setAttribute('src',  './avatar2.png')
  } else{
  //se tiver sem white mode, manter a imagem
  img.setAttribute('src', './Avatar.png')
  }
  
}