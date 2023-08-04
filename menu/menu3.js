
// document.addEventListener('DOMContentLoaded', function() {
//     const lastfoto = document.querySelector('.foto22');
//     console.log(lastfoto);
//   });
// const myObserver = new IntersectionObserver((entries) => {
//     entries.forEach( (entry) =>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('.show')
//         } else{
//             entry.target.classList.remove('show')
//         }
//     })
// })

// const elements = document.querySelectorAll('.hidden')

// elements.forEach((element) => myObserver.observe(element))

document.addEventListener('DOMContentLoaded', function() {
    const produto = document.querySelector('.produto');
    const produto1 =document.querySelector('.produto1');
    const produto2 =document.querySelector('.produto2');
    const paragrafo =document.querySelector('.para');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    observer.observe(paragrafo);
    observer.observe(produto1);
    observer.observe(produto2);
    observer.observe(produto);
  });


  