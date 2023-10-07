const mostrarSenhasCheckbox = document.getElementById('mostrarSenhas');
const cadsenha1 = document.getElementById('cadSenha');
const cadsenha2 = document.getElementById('cadConfirmaSenha');

document.addEventListener('DOMContentLoaded', function () {
  
    mostrarSenhasCheckbox.addEventListener('change', function () {
        if (mostrarSenhasCheckbox.checked) {
            cadsenha1.type = 'text';
            cadsenha2.type = 'text';
        } else {
            cadsenha1.type = 'password';
            cadsenha2.type = 'password';
        }
    });
});
let btncriar = document.querySelector("#btncriar");

cadsenha2.addEventListener('blur', habitarBtn)

function habitarBtn(){
    if (cadsenha1.value===cadsenha2.value && cadsenha1.value!=""){ 
        btncriar.disabled = false
    }
}

btncriar.addEventListener('click', clickcriar)

function clickcriar(){

    let cademail = document.querySelector("#cadEmailInput").value
    let cadsenha = document.querySelector("#cadSenha").value  

    auth.createUserWithEmailAndPassword(cademail,cadsenha).
    then(function(){
      console.log(auth.currentUser.email)  

      window.location.href="../Home/home_index.html"
    }, function(error){
        console.log(error.message)
    })

}
