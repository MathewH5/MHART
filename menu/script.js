function openNav(){
document.getElementById("myNav").style.width = '100%'
}

function closeNav(){
  document.getElementById("myNav").style.width = '0%'
  }



  // function toggleFocus(index) {
  //   const menuItems = document.querySelectorAll('.menu-item');
  //   menuItems.forEach((item, i) => {
  //     if (i === index) {
  //       item.classList.add('focused');
  //     } else {
  //       item.classList.remove('focused');
  //     }
  //   });
  // }
  
  // var menu = document.querySelector(".menu-item");

  // menu.addEventListener("mouseover", function(){
  //   menu.classList.add('focused');
  // })
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
