let drop_1 = document.getElementById('nav-dropdown0');
let drop_2 = document.getElementById('nav-dropdown1');
let drop_3 = document.getElementById('nav-dropdown2');
let drop_4 = document.getElementById('nav-dropdown3');
let category = document.getElementsByClassName('category');
let sub_cat_drop = document.getElementsByClassName('nav-sub-dropdown');
let sub_cat_sub_el = document.getElementsByClassName('sub-category');


var dropdowns = document.getElementsByClassName('drop')
drop_1.addEventListener('mouseover',function(){
    dropdowns[0].classList.toggle("open-dropdown")
})

drop_1.addEventListener('mouseout',function(){
    dropdowns[0].classList.toggle("open-dropdown")
})

// drop_1.addEventListener('click',function(){
//     dropdowns[0].classList.toggle("open-dropdown")
// })



drop_2.addEventListener('mouseover',function(){
    dropdowns[1].classList.toggle("open-dropdown")
})

drop_2.addEventListener('mouseout',function(){
    dropdowns[1].classList.toggle("open-dropdown")
})

drop_3.addEventListener('mouseover',function(){
    dropdowns[2].classList.toggle("open-dropdown")
})

drop_3.addEventListener('mouseout',function(){
    dropdowns[2].classList.toggle("open-dropdown")
})

drop_4.addEventListener('mouseover',function(){
    dropdowns[3].classList.toggle("open-dropdown")
})

drop_4.addEventListener('mouseout',function(){
    dropdowns[3].classList.toggle("open-dropdown")
})

for(var i=0;i<sub_cat_drop.length;i++){
    sub_cat_drop[i].addEventListener('mouseover',()=>{
    //    console.log(sub_cat_sub_el[3])
       event.target.childNodes[1].classList.toggle("open-sub-category")
            var a = event.target.parentNode.classList;
  
    })
    sub_cat_drop[i].addEventListener('mouseleave',()=>{
        //    console.log(sub_cat_sub_el[3])
            event.target.childNodes[1].classList.toggle("open-sub-category")

    })
}

//Mobile Nav slide
let burger = document.getElementsByClassName('burger');
let navbar = document.getElementsByClassName('nav-links');
let close = document.getElementById('close-btn')
let nav = document.querySelector('nav');

burger[0].addEventListener('click',()=>{
      navbar[0].classList.toggle('open-nav');
      document.body.style.background = 'rgba(0,0,0,0.4)';
      nav.classList.toggle('pos');
      nav.style.overflowY = 'scroll';
})

close.addEventListener('click',()=>{
    navbar[0].classList.toggle('open-nav')
    nav.classList.toggle('pos');
    document.body.style.background = 'none';
    //   nav.style.overflowY = 'scroll';
})


// window.onclick = (event) =>{
//     if (event.target != nav){
//         if(navbar[0].classList.contains('open-nav')){
//             navbar[0].classList.toggle('open-nav')
//             console.log(event.target)
//         }
       
//     }
// }



//Footer
let help_btn = document.getElementsByClassName('help-btn');
let cols = document.getElementsByClassName('col')

help_btn[0].addEventListener('click',()=>{
    for(var i=1;i<=4;i++){
        cols[i].classList.toggle("open-end-nav")
    }
    
})
// sub_cat_drop[2].addEventListener('mouseover',()=>{
//     //    console.log(sub_cat_sub_el[3])
//        event.target.childNodes[1].classList.toggle("open-sub-category")
//        condole.log(event.target.childNodes[3].innerHTML)
//     })

// sub_cat_drop[2].addEventListener('mouseleave',()=>{
//     //    console.log(sub_cat_sub_el[3])
//         event.target.childNodes[1].classList.toggle("open-sub-category")
//         console.log(event.target.childNodes[3].innerHTML)
// })