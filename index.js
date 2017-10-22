function getFirstSelector(selector){
  return document.querySelector(selector);
 }

function nestedTarget(){
 return document.getElementById('nested').querySelector('.target');
}

function deepestChild(){
  const doc = document.getElementById('grand-node').querySelectorAll('div');
  console.log(doc[doc.length-1].innerHTML); //inside the div
  return (doc[doc.length-1]); //include the div
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list');
  for(let i=0; i<ranked-list.length; i++){
    
  }
}
