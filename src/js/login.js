var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

// Validação form para CADASTRAR

const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    //Verificar se o email está preenchido 
    if(emailInput.value === ""){
        alert("Email vazio. Por favor preencha o seu email.");
        return;
    }

    //Verificar se a senha está preenchida
    if(passwordInput.value === ""){
        alert("Senha vazia. Por favor coloque sua senha.");
        return;
    }


    //Com todos os campos preenchidos, enviar form
    form.submit();
    location.href = "index.html"
    

});

//Validação form para ENTRAR
const form2 = document.querySelector("#form2");
const emailInput2 = document.querySelector("#email2");
const passwordInput2 = document.querySelector("#password2");

form2.addEventListener("submit", (event) =>{
    event.preventDefault();

    //Verificar se o email está preenchido 
    if(emailInput2.value === ""){
        alert("Email vazio. Por favor preencha o seu email.");
        return;
    }

    //Verificar se a senha está preenchida
    if(passwordInput2.value === ""){
        alert("Senha vazia. Por favor coloque sua senha.");
        return;
    }


    //Com todos os campos preenchidos, enviar form
    form2.submit();
    location.href = "index.html"
    

});