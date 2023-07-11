let contanier_test = document.getElementById("contanier_animation_load");
let time = 500;
window.onload = function(){
    let Fun_Set = setInterval(function(){
        contanier_test.style.display = "block";
        time = time + 500;
    if(time === 5000){
        function stop(){
            clearInterval(Fun_Set);
            contanier_test.style.display = "none";
            location.href ="page.html"; 
        }
        stop();
    }
},time); 
}