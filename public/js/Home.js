function Checkacc(){
    if(1==1){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You do not have access rights.!",
            footer: '<a href="/view/login.html">Do you want to go to login page?</a>'
          });
    }
}