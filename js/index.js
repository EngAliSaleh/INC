

let searchBtn = document.querySelector('.search-btn');
let searchBox = document.querySelector('.search-box');
let closeBtn = document.querySelector('.close-btn');
let Nav = document.querySelector('nav');
let Links = document.querySelector('ul');
let Bar = document.querySelector('.bar');
//////////////////////////////////////////////////////////////////////////
let arrow = document.querySelector('.arrow');
// 
let navA = document.querySelectorAll('nav .nav-menu ul li a');
let Sections = document.querySelectorAll('section');
//
let moon = document.querySelector('.moon');
let body = document.querySelector('body')


/***********************************************colorInput**********************************************/
colorInput = document.querySelector("input[type=color]");

document.querySelector("input[value='Change-color']").addEventListener('click', function () {
   document.body.style.backgroundColor = colorInput.value;
   // document.body.style.color = colorInput.value;


});
/***********************************************colorInput**********************************************/



/***********************************************Dark-Theme**********************************************/



// moon.onclick = function () {
//     body.classList.toggle('dark');
//    if (document.body.classList.contains('dark')) {
//       moon.innerHTML = '<i class="fa-solid fa-sun"></i>'
//    } else {
//       moon.innerHTML = '<i class="fa-solid fa-moon moon" ></i>'
//    }
// }



/***********************************************Dark-Theme**********************************************/





/***********************************************Creative-Target**********************************************/
let creative = document.querySelectorAll('#creative .container .main .l-div img');


let id = window.setInterval(() => {
   let i = parseInt((Math.random() * creative.length));
   creative.forEach(img => {
      img.style.display = 'none';
   })

   creative[i].style.display = 'block';
}, 1000)
/***********************************************Creative-Target**********************************************/







/***********************************************Nav Bar**********************************************/
searchBtn.onclick = function () {
   searchBox.classList.add('active')
   closeBtn.classList.add('active')
   searchBtn.classList.add('active')
}

closeBtn.onclick = function () {
   searchBox.classList.remove('active')
   closeBtn.classList.remove('active')
   searchBtn.classList.remove('active')
}

Bar.onclick = function () {
   Nav.classList.toggle('open')
}
/***********************************************Nav Bar**********************************************/






window.onscroll = function () {

}
/***********************************************Arrow-UP**********************************************/






window.onscroll = function () {

   /***********************************************Section-link-active***********************************/
   let current = '';

   // console.log(scrollY);

   Sections.forEach(section => {
      let sectionTop = section.offsetTop;
      // console.log(sectionTop);
      if (scrollY >= sectionTop - 300) {
         // current = section.getAttribute('id') 
         navA.forEach(a => {
            a.classList.remove('active');
            if (a.classList.contains(section.getAttribute('id'))) {
               a.classList.add('active');
            }

         });
      }
   });
   /***********************************************Section-link-active************************************/

   /***********************************************Arrow-UP***************************************************/
   if (scrollY > 300) {

      arrow.style.opacity = 1

   }
   else {
      arrow.style.opacity = 0
   }
}

arrow.onclick = function () {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
   })
   /***********************************************Arrow-UP**********************************************/


}

