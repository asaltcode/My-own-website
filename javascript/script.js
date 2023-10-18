let lines = document.querySelector(".lines")
let container = document.querySelector('.menu-items')
lines.addEventListener('click', ()=>{ 
 lines.nextElementSibling.classList.toggle('respons')
})
container.addEventListener('click', ()=>{    // container clike side bar remove and resopons, change class remove
   if(lines.nextElementSibling.classList == "respons" || lines.classList == "change"){
      lines.classList.remove("change")
      lines.nextElementSibling.classList.remove('respons')
   } 
}) 
function myFunction(x) {
   x.classList.toggle("change");
 }

 let input = document.getElementsByTagName('input')
 let img = document.getElementsByTagName('img')
 input[0].addEventListener('change', ()=>{
   let file = input[0].files[0]
   let reader =new FileReader;
   reader.onloadend =() =>{
      img[0].src = reader.result;
   }
   if(file){
      reader.readAsDataURL(file);
   }
 })