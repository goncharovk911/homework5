var obj, del
function deletTag(elem) {
  obj =  document.getElementById(elem)
  if (!obj) {
  alert('Tag cannot be deleted')
} else {
   del = obj.remove()
}

}
deletTag('if')
