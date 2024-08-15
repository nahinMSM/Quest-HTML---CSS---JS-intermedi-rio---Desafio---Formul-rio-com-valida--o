document.getElementById('botao-enviar').addEventListener('click', (event) => {
  event.preventDefault()

  const verificar = document.querySelectorAll('.requered')
  verificar.forEach((campos) => {
    const camposInput = campos.querySelector('input')
    const alertaDeErro = campos.querySelector('span')

    if (camposInput.value === '') {
      addClass()
    } else {
      removeClass()
    }

    if (camposInput.id === 'email') {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!regexEmail.test(camposInput.value)) {
        addClass()
      } else {
        removeClass()
      }
    }

    if (camposInput.id === 'telefone') {
      const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/
      if (!regexTelefone.test(camposInput.value)) {
        addClass()
      } else {
        removeClass()
      }
    }

    function addClass() {
      camposInput.classList.add('active')
      camposInput.classList.remove('desativado')
      alertaDeErro.innerHTML = 'campo obrigatório'
    }
    function removeClass() {
      camposInput.classList.remove('active')
      camposInput.classList.add('desativado')
      alertaDeErro.innerHTML = ''
    }

  })

  const mensagem = document.querySelector('label textarea')
  const alertaDeErr = document.querySelector('label .textArea')
  if (mensagem.value === '') {
    mensagem.classList.add('active')
    mensagem.classList.remove('desativado')
    alertaDeErr.innerHTML = 'campo obrigatório'
  } else {
    mensagem.classList.remove('active')
    mensagem.classList.add('desativado')
    alertaDeErr.innerHTML = ''
  }

})


