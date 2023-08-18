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
  