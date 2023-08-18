// document.addEventListener('DOMContentLoaded', function() {
//     const r4 = document.querySelector('.r4');
//     const titulo =document.querySelector('.titulo');
//     const discricao =document.querySelector('.discricao');
//     const boxgesso =document.querySelector('.boxgesso');
//     const ServiçosOferecidos =document.querySelector('.ServiçosOferecidos');
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//         } else {
//           entry.target.classList.remove('show');
//         }
//       });
//     });
//     observer.observe(r4);
//     observer.observe(titulo);
//     observer.observe(discricao);
//     observer.observe(boxgesso);
//     observer.observe(ServiçosOferecidos);
//   });
document.addEventListener('DOMContentLoaded', function() {
  const r4 = document.querySelector('.r4');
  const titulo = document.querySelector('.titulo');
  const discricao = document.querySelector('.discricao');
  const boxgesso = document.querySelector('.boxgesso');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });
  });

  observer.observe(r4);
  observer.observe(titulo);
  observer.observe(discricao);
  observer.observe(boxgesso);
  observer.observe(ServiçosOferecidos);

});
document.addEventListener('DOMContentLoaded', function() {

  const animateup = document.querySelector('.animate-up');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });
  });


  observer.observe(animateup);
});

// window.addEventListener("scroll", function() {
//   var scrollTop = window.scrollY;
//   var zoomContainer = document.querySelector(".zoom-container");


//   var zoomFactor = 0.001;

//   var zoomAmount = 1 - (scrollTop * zoomFactor);
//   zoomContainer.style.transform = `perspective(1200px) translateX(0px) translateY(0px) scale(${zoomAmount}) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
// });






//o de baixo é para rolagem
  window.addEventListener("scroll", function(){
    let header = document.querySelector('#scrol')
    header.classList.toggle('rolagem',window.scrollY > 140 )
})
window.addEventListener("scroll", function(){
    let myNav = document.querySelector('#myNav')
    myNav.classList.toggle('myNav',window.scrollY > 500 )
})
window.addEventListener("scroll", function(){
  let logoMenu = document.querySelector('#logo-menu')
  logoMenu.classList.toggle('LOGO',window.scrollY > 500 )
})
window.addEventListener("scroll", function(){
  let x = document.querySelector('#x')
  x.classList.toggle('x',window.scrollY > 500 )
})
window.addEventListener("scroll", function(){
  let navButton = document.querySelector('#nav-button')
  navButton.classList.toggle('Menu-rolagem',window.scrollY > 220 )
})

window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagemHeader',window.scrollY > 220 )
})
window.addEventListener("scroll", function(){
  let logoCasa = document.querySelector('#logo-casa')
  logoCasa.classList.toggle('rolagemLogo220',window.scrollY > 220 )
})
window.addEventListener("scroll", function(){
  let logoCasa = document.querySelector('#logo-casa')
  logoCasa.classList.toggle('rolagemLogo700',window.scrollY > 700 )
})
window.addEventListener("scroll", function(){
  let logoCasa = document.querySelector('#logo-casa')
  logoCasa.classList.toggle('rolagemLogo3',window.scrollY > 1600 )
})
window.addEventListener("scroll", function(){
  let logoCasa = document.querySelector('#logo-casa')
  logoCasa.classList.toggle('rolagemLogo3Final',window.scrollY > 3200 )
})
// window.addEventListener("scroll", function() {
//   let elements = document.querySelectorAll('#logo-casa, #header, #id3');
//   elements.forEach(function(element) {
//     element.classList.toggle('rolagem100', window.scrollY > 100);
//   });
// }); diversos id de uma vez


window.addEventListener("scroll", function() {
  let emailMenu = document.querySelectorAll('#email-menu');
  emailMenu.forEach(function(emailMenu) {
    emailMenu.classList.toggle('verdeMenu', window.scrollY > 500);
  });
});
window.addEventListener("scroll", function() {
  let numero = document.querySelectorAll('#numero');
  numero.forEach(function(numero) {
    numero.classList.toggle('numRolagem', window.scrollY > 500);
  });
});
window.addEventListener("scroll", function() {
  let overlayContents = document.querySelectorAll('#palavraPrincipal');
  overlayContents.forEach(function(overlayContent) {
    overlayContent.classList.toggle('textMenuRolagem', window.scrollY > 500);
  });
});
window.addEventListener("scroll", function() {
  let palavraEmBaixo = document.querySelectorAll('#palavraEmBaixo');
  palavraEmBaixo.forEach(function(palavraEmBaixo) {
    palavraEmBaixo.classList.toggle('sombraMenuRolagem', window.scrollY > 500);
  });
});



//menu
function openNav(){
  document.getElementById("myNav").style.width = '100%'
  }
  
  function closeNav(){
    document.getElementById("myNav").style.width = '0%'
    }
  


function toggleFocus() {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((item) => {
    item.addEventListener('mouseenter', function() {
      
      this.classList.add('focused');

      menuItems.forEach((item) => {
        item.classList.add('focused-out');
      });
    });

    item.addEventListener('mouseleave', function() {
      menuItems.forEach((item) => {
        item.classList.remove('focused-out');
      });
      this.classList.remove('focused');
    });
  });
  const f3 = document.querySelectorAll('.image-container');

  f3.forEach((item) => {
    item.addEventListener('mouseenter', function() {
      
      this.classList.add('focused3f');

      f3.forEach((item) => {
        item.classList.add('focused-out3f');
      });
    });

    item.addEventListener('mouseleave', function() {
      f3.forEach((item) => {
        item.classList.remove('focused-out3f');
      });
      this.classList.remove('focused3f');
    });
  });
}

// Chamar a função ao carregar a página
window.addEventListener('DOMContentLoaded', toggleFocus);

const menuItems = document.querySelectorAll('.menu-item');

// Adicionar evento de "mouseenter" a cada elemento .menu-item
menuItems.forEach((menuItem) => {
menuItem.addEventListener('mouseenter', function() {
  // Adicionar a classe .focused-out a todos os elementos .menu-item
  menuItems.forEach((item) => {
    item.classList.add('focused-out');
  });
});

// Adicionar evento de "mouseleave" a cada elemento .menu-item
menuItem.addEventListener('mouseleave', function() {
  // Remover a classe .focused-out de todos os elementos .menu-item
  menuItems.forEach((item) => {
    item.classList.remove('focused-out');
  });
});
});


const elemento = document.getElementById("header");

elemento.addEventListener("mouseout", function(event) {
  elemento.classList.add("mouseout");
});

elemento.addEventListener("mouseover", function(event) {
  elemento.classList.remove("mouseout");
});


//para transição de saida
