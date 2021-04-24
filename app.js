const clr=document.querySelector("#clr");
clr.style.backgroundColor="purple";
clr.style.color="white";
clr.addEventListener("click",function clear(){
   
 val.value= " ";
  })

function getNumber(num){
      val=document.querySelector("#val");
    console.log(num);
//    var  val=document.querySelector("#val");
 
val.value += num;
}
function getResult(){
   
 
res= val.value;
val.value=eval(res)
}

 