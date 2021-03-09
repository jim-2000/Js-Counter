// set initial count 
let count = 0;

let  value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
   btn.addEventListener("click", function(e){
       let styles = e.currentTarget.classList;
       if(styles.contains('decrease')){
        count--;
        if(count < 0 ){
            count = 0;
        }
      

       }
       else if(styles.contains('increase')){
        count++; 
      
       }
       else{
           count = 0;
       }
       if(count > 0){
           value.style.color ="green"
       }
       if(count < 0){
           value.style.color = "red"
       }
       if( count == 0 ){
         
           value.style.color = "red"
       }

       value.textContent = count;
   });
});

