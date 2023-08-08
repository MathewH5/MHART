document.addEventListener('DOMContentLoaded', function() {
    var bioTextarea = document.getElementById('bio');
  
    bioTextarea.addEventListener('input', function() {
      if (bioTextarea.value.trim() !== '') {
        bioTextarea.classList.add('valid');
      } else {
        bioTextarea.classList.remove('valid');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var emailInput = document.getElementById('email');
  
    emailInput.addEventListener('input', function() {
      if (emailInput.value.trim() === '') {
        emailInput.classList.remove('invalid');
      } else if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('invalid');
      } else {
        emailInput.classList.remove('invalid');
      }
    });
  
    function validateEmail(email) {
      // Adicione sua lógica de validação personalizada aqui
      // Retorna true se o email for válido, caso contrário, retorna false
      // Exemplo simples de validação: verifica se o email contém o caractere '@'
      return email.includes('@');
    }
  });


  var prevScrollPos = window.scrollY || window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.scrollY || window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
};

