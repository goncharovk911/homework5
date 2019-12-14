

function $(query) {
	var result = []
  var nodes = document.querySelectorAll(query)
  for(var i = 0; i < nodes.length; i++) {
    result.push(nodes[i]);
  }
  return result.length == 1 ? result[0] : result
}

console.log('P elements', $('p'))

console.log('element by id', $('#id123'))

console.log('element by class name', $('.aaa'))
