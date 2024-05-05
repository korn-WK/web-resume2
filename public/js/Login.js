
const login = document.querySelector("#loginform")
const REG = document.querySelector("#regform")
const sild = document.querySelector("#sild")
const bg = document.querySelector('#element')
document.querySelector("#forgot").onclick =function(){
    Swal.fire({
        title: "Forgot  Password?",
        text: "Contact our staff to edit your password.",
        icon: "question"
      });

}
document.querySelector("#gotologin").onclick =function(){ 
    sild.classList.remove('Mr');
    sild.classList.add('Ml');
}
document.querySelector("#gotoreg").onclick =function(){
    sild.classList.remove('Ml');
    sild.classList.add('Mr');
}


    
