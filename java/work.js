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