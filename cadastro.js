function validarCadastro() {
    const nomeRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex = /^[0-9/s]+$/;
   
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
   
   
    if (!nomeRegex.test(nome)) {
     alert("Nome inválido. Use apenas letras e espaços.");
    return false;
   }
    if (!emailRegex.test(email)) {
     alert("E-mail inválido. Insira um e-mail válido.");
    return false;
    }
    if (!telefoneRegex.test(tel)) {
        alert("Telefone inválido. Insira um telefone válido.");
       return false;
       }
   return true;
}
function guardar(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const age = document.getElementById("age").value;
    const turms = document.getElementById("turms").value;
    const sport = document.getElementById("sport").value;

    document.querySelector("#dadosjson").textContent = "Nome: " + nome + ", E-mail: " + email + ", Telefone: " + tel + ", Idade: " + age + ", Turma: " + turms + ", Esporte favorito: " + sport;
}