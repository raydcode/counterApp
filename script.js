const up  = document.querySelector(".up");
const reset  = document.querySelector(".reset");
const down = document.querySelector(".down");
const count = document.querySelector(".count");




up.addEventListener("click",()=>{
   count.innerHTML++; 
   count.style.color="orange"
});


down.addEventListener("click",()=>{
    count.innerHTML--; 
    count.style.color="pink"
})

reset.addEventListener("click",()=>{
    count.innerHTML = 0;
    count.style.color="white"
    
})


