var newImg, face
function nameTag(obj) {
  newImg = document.createElement(obj)
  newImg.id = 'my'
  newImg.src = "https://thumbs.dreamstime.com/b/%D1%88%D0%B0%D0%B1-%D0%BE%D0%BD-%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D1%86%D0%B8%D1%84%D0%B5%D1%80%D0%B1-%D0%B0%D1%82%D0%B0-42235283.jpg"
  newImg.width =" 100"
  newImg.height = "100"
  return newImg
}

function newTag(nD) {
  face=document.body.appendChild(nD)
}
nameTag('img')
newTag(newImg)
//что то первое какое  то запутанное я на нее пол дня убил(( по этому решил наработки первого сюда включить 
