function login() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

document.getElementById('button').addEventListener('click', login);

function habilitarBotao() {
  const check = document.getElementById('agreement');
  const botao = document.getElementById('submit-btn');
  if (check.checked) {
    botao.removeAttribute('disabled');
  } else if (check.checked === false) {
    botao.setAttribute('disabled', 'disabled');
  }
}
document.getElementById('agreement').addEventListener('change', habilitarBotao);
