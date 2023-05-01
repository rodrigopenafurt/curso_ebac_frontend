const formularioCompleto = document.getElementById('formulario')
const formCampoA = document.getElementById('campoA')
const formCampoB = document.getElementById('campoB')


function tarefaBmaior (formCampoB, formCampoA) {
    if (Number(formCampoB.value) > Number(formCampoA.value)) {
        return true;}
}



formularioCompleto.addEventListener('submit', function(e) {
    e.preventDefault();

    if (tarefaBmaior(formCampoB, formCampoA) === true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Formulário inválido, tente novamente')
    }

})



// if (formCampoB > formCampoA) {
//    alert('O formulário foi enviado com sucesso!')
//}  else {
  //  alert('Desculpe, formulário inválido. Tente novamente!')
//}