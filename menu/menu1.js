window.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector('#header');
    header.classList.toggle('no-scroll', window.scrollY === 0);
  
    window.addEventListener("scroll", function() {
      header.classList.toggle('no-scroll', window.scrollY === 0);
    });
  });
  
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0 )
})
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem2',window.scrollY > 500 )
})

