let alto="450",ancho="0",select;
document.querySelector("#alto").value.length === 0
?
document.querySelector("#alto").value="450"
:
""
;

document.querySelector("#ancho").value ===""
?
document.querySelector("#ancho").value="0"
:
""
;

const ChangeValue=(event)=>{ 
    select=event.target.value; 
    //console.log(event);
    //console.log({alto,ancho,select});
}
// const Changealto=event=>{
//     if( event.code.startsWith('Digit')|| event.code.startsWith('Numpad')){
//     alto=event.target.value + event.key;
//     console.log({alto,ancho,select});
//    }
//    else{
//     event.preventDefault();
//    }
// }
// const Changeancho= event=>{
    
//     if( event.code.startsWith('Digit')||
//      event.code.startsWith('Numpad')||
//      event.code==='Backspace'
//      ){
    
//             ancho=event.target.value + event.key;
        
//         //ancho=event.target.value + "";
//     //await ancho.includes('Backspace')?ancho.replace('Backspace',"xd"):"";
//     console.log({alto,ancho,select});
//    }
//    else{
//     //console.log(event);
//     event.preventDefault();
//    }
// }




const LoadChanges=()=>
{
    alto=document.querySelector("#alto").value;
    ancho=document.querySelector("#ancho").value;
    //select=select===''?"double":select;
   if(typeof select === 'undefined')
   {
    select = "double"
   }
   document.documentElement.style.setProperty("--anchocuadrofooter",ancho+"px");
   document.documentElement.style.setProperty("--altocuadrofoot",alto+"px");
   document.documentElement.style.setProperty("--formacuadrofooter",select);
  
    console.log({alto,ancho,select});

}