  var i=0, image
    while (i < 5) {
      function whatImage(url) {
        if (url.indexOf('https:') === 0) {
          image = document.getElementById('myimg')
          image.src = url
          return
        }
        else {
          return
        }
        degRot(prompt("sd"))
      }

      function degRot(rotation) {
          if (rotation === isNaN){
        return
        }else {
          image.style.transform = "rotate("+rotation+"deg)"
        }
      }
       whatImage( prompt("https://thumbs.dreamstime.com/b/%D1%88%D0%B0%D0%B1-%D0%BE%D0%BD-%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D1%86%D0%B8%D1%84%D0%B5%D1%80%D0%B1-%D0%B0%D1%82%D0%B0-42235283.jpg" ))
       degRot(prompt("sd"))
       i++
}
degRot(prompt("sd"))
