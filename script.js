// const observer = new IntersectionObserver((entries)=>{
//   entries.forEach((entry)=>{
//     if(entry.isIntersecting){
//       entry.target.classList.add('show');
//     }else{
//       entry.target.classList.remove('show')
//     }
    
//   })
// })
// const hidden = document.querySelectorAll('.hidden')
// hidden.forEach((el)=>observer.observe(el))



function page1(){ 
setTimeout(function(){ 
  window.location.href="page1.html"
}, 1000); // 3 seconds = 3000 milliseconds 
} 
function page3(){ 
  setTimeout(function(){ 
    window.location.href="page3.htm"
}, 1000); // 3 seconds = 3000 milliseconds 
} 
function page4(){ 
  setTimeout(function(){ 
    window.location.href="page4.html"
}, 1000); // 3 seconds = 3000 milliseconds 
} 
function page5(){ 
  setTimeout(function(){ 
    window.location.href="page5.html"
}, 1000); // 3 seconds = 3000 milliseconds 
} 
 
        // $('.main-menu, .scroll-to-section').on('click', 'a', function (e) {
        //   if($(e.target).hasClass('external')) {
        //     return;
        //   }
        //   e.preventDefault();
        //   $('#menu').removeClass('active');
        //   showSection($(this).attr('href'), true);
        // });

        // $(window).scroll(function () {
        //   checkSection();
        // });