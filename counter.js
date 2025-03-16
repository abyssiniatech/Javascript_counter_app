

const value=document.getElementById('value');
const dec=document.getElementById('dec');
const res=document.getElementById('res');
const inc=document.getElementById("inc");
let counter=0;
// console.log(inc)

function Counters(){
    dec.onclick=function(){
        counter--;
   
        value.textContent=counter;

    
    }
    res.onclick=function(){
        counter=0
        value.textContent=counter;

    
    }
        
        inc.onclick=function(){
            counter++;
            value.textContent=counter;
            
            
        }
        if(counter===0){
            value.style.color="green";
        }
         if(counter>0){
            value.style.color="blue";
        }
        if(counter<0){
            value.style.color="red";
        }
}
Counters()


