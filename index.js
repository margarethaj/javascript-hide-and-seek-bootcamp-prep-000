function getFirstSelector(selector){
  return document.querySelector(selector);
 }

function nestedTarget(){
 return document.getElementById('nested').querySelector('.target');
}

function deepestChild(){
  const doc = document.getElementById('grand-node').querySelectorAll();
  for(let i=0; i<doc.length; i++){
    doc[i].innerHTML = (i+1).toString();
  }
}
