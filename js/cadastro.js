let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let data = document.querySelector('#nasc')
let labelDataNasc = document.querySelector('#labelDataNasc')
let validDataNasc = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

user.addEventListener('keyup', () => {
    if(user.value.length <= 4){
      labelUser.setAttribute('style', 'color: red')
      labelUser.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
      user.setAttribute('style', 'border-color: red')
      validUser = false
    } else {
      labelUser.setAttribute('style', 'color: green')
      labelUser.innerHTML = 'Usuário'
      user.setAttribute('style', 'border-color: green')
      validUser = true
    }
  })

cpf.addEventListener('keyup', () => {
    if(cpf.value.length >16 || cpf.value.length<11){
      labelCpf.setAttribute('style', 'color: red')
      labelCpf.innerHTML = 'CPF *Insira o cpf corretamente'
      cpf.setAttribute('style', 'border-color: red')
      validCpf = false
    } else {
      labelCpf.setAttribute('style', 'color: green')
      labelCpf.innerHTML = 'CPF'
      cpf.setAttribute('style', 'border-color: green')
      validCpf = true
    }
  })

  email.addEventListener("input", (e) => {
    const emailInputValue = e.currentTarget.value;
     if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'E-mail *Insira o e-mail corretamente'
        email.setAttribute('style', 'border-color: red')
        validEmail = false         
     } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-mail'
        email.setAttribute('style', 'border-color: green')
        validEmail= true
     }
   })


senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

telefone.addEventListener('keyup', () => {
    if(telefone.value.length !=11){
      labelTelefone.setAttribute('style', 'color: red')
      labelTelefone.innerHTML = 'Telefone *Insira 11 dígitos!'
      telefone.setAttribute('style', 'border-color: red')
      validTelefone = false
    } else {
      labelTelefone.setAttribute('style', 'color: green')
      labelTelefone.innerHTML = 'Telefone'
      telefone.setAttribute('style', 'border-color: green')
      validTelefone = true
    }
  })


function cadastrar(){
  if(validNome && validUser && validEmail && validTelefone && validCpf && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: user.value,
      emailCad: email.value,
      cpfCad: cpf.value,
      senhaCad: senha.value,
      telefoneCad: telefone.value

    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style','color: green', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = 'http://127.0.0.1:5500/andamento/login.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'color: red','display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

