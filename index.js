/*--------------..................................-----*/
var apple = document.getElementById("apple");
var parent = document.getElementById("parent12");
var swape = document.getElementById("swape");
swape.onclick = function() {
  parent.style.transform="rotateY(180deg)";
  setTimeout(function(){
   apple.style.animationName = "right1";
  },1000);
};
/*.....................................................*/
var input_test = document.getElementById("input_test");
var password_test = document.getElementById("password_test");
window.onload = function() {
    input_test.focus();
    input_test.style.cursor="pointer";
};
input_test.addEventListener("blur",function(){
    password_test.focus();
});
/*.......................................................*/
var p_test1 = document.getElementById("p_test1");
var p_test2 = document.getElementById("p_test2");
var p_test3 = document.getElementById("p_test3");
var p_test4 = document.getElementById("p_test4");
input_test.addEventListener("click",function(){
  var input_test_value = input_test.value;
  var result_val = input_test_value.split("").map(function(Element){
  return Element;
  });
  
    for(let i = 0;i < result_val.length;i++){
      if(!isNaN(result_val[i]) && result_val[0] === result_val[0].toUpperCase() 
         && result_val.slice(-4).join("")===".com" &&  result_val.includes("@")=== true ){
          document.getElementById("p_test1").style.color = "green";
          document.getElementById("p_test2").style.color = "green";
          document.getElementById("p_test3").style.color = "green";
          document.getElementById("p_test4").style.color = "green";
        }
    }

});



  /*.......................................................*/
  var p_test_pass1 = document.getElementById("p_test_pass1");
  var p_test_pass2 = document.getElementById("p_test_pass2");
  var p_test_pass3 = document.getElementById("p_test_pass3");

  password_test.addEventListener("keydown", function() {
    var pass_test_value = password_test.value;
    var result_val_pass = pass_test_value.split("");
  
    for (let j = 0; j < result_val_pass.length; j++) {
      if (/[a-zA-Z]/.test(result_val_pass[j]) ){
        document.getElementById("p_test_pass1").style.color = "green";
      }
      if (/\d/.test(result_val_pass[j])) {
        document.getElementById("p_test_pass2").style.color = "green";
      }
      if(/[^\w\s]/.test(result_val_pass[j])){
        document.getElementById("p_test_pass3").style.color = "green";
      }
    }
  });
  /*.......................................................*/
 
  document.getElementById("btn1").addEventListener("click",function(){
   if(p_test1.style.color === "green" && p_test2.style.color === "green" && 
      p_test3.style.color === "green" && p_test4.style.color === "green"){
        input_test_value = input_test.value;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 2500
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username OR Password Is Wrong!',
        })
      }
      if(p_test_pass1.style.color === "green" && p_test_pass1.style.color === "green" && 
      p_test_pass1.style.color === "green"){
        pass_test_value = password_test.value;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 2500
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username OR Password Is Wrong!',
        })
      }
 });
 /*.............................................................*/

let btn_login = document.getElementById("btn_login");
btn_login.addEventListener("click",function(){
  let input_user_son2 = document.getElementById("input_user_son2");
  let pass_user_son2 = document.getElementById("pass_user_son2");
  var input_test_value = input_test.value;
  var pass_test_value = password_test.value;
  let value_input_user_son2 = input_user_son2.value;
  let value_pass_user_son2 = pass_user_son2.value;
  if(value_input_user_son2 === input_test_value && value_pass_user_son2 === pass_test_value){
    console.log('better');
    location.href = "loading.html";
  }
});
/*...................................................................*/
var fogive_password = document.getElementById("fogive_password");
fogive_password.addEventListener("click",function(){
  Swal.fire(
    'forgive password',
    password_test.value,
    'ENG:Mohamed Sherif'
  )
});
/*...................................................................*/
var sign_up = document.getElementById("sign_up");
sign_up.addEventListener("click",function(){
  location.href = "video.html";
});
/*----------------------------------------------------------------------*/
document.getElementById("linkedin").addEventListener("click",function(){
    location.href = "https://www.linkedin.com/in/mohamed-sherif-50a9ba281";
    document.getElementById("linkedin").style.curser = "pointer";
});
/* ************************************************************************** */
