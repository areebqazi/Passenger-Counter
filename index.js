let count=0;
let total= document.getElementById("count-el")
let prev= document.getElementById("save-el")
let a=" "

function increment(){
   count+=1;
   total.innerText=count
}

function save(){
  a=total.innerText+" - "
  prev.textContent+=a
  total.textContent=0
}

