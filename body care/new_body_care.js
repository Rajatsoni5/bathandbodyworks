// =========================================nav js==========================================================

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
    sub_cat_drop[i].addEventListener('mouseover',(event)=>{
    //    console.log(sub_cat_sub_el[3])
       event.target.childNodes[1].classList.toggle("open-sub-category")
            var a = event.target.parentNode.classList;
  
    })
    sub_cat_drop[i].addEventListener('mouseleave',(event)=>{
        //    console.log(sub_cat_sub_el[3])
            event.target.childNodes[1].classList.toggle("open-sub-category")

    })
}

//===============================================Mobile Nav slide
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
// let help_btn = document.getElementsByClassName('help-btn');
// let cols = document.getElementsByClassName('col')

// help_btn[0].addEventListener('click',()=>{
//     for(var i=1;i<=4;i++){
//         cols[i].classList.toggle("open-end-nav")
//     }
    
// })
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



// ===================================my pages js==================================================
let arr = []
function add(event){

    let btnid = event.target.id
    fetch(`https://bath-and-body-mock-server.herokuapp.com/new_body`).then(response => response.json()).then(data => alldata(data)).catch(error => console.log(error))
  function alldata(data){
    for(let i = 0 ;i<16;i++){
      if(`btn${data[i].id}` == btnid){
          var id = data[i].id
      }
    }

    fetch(`https://bath-and-body-mock-server.herokuapp.com/new_body?id=${id}`).then(response => response.json()).then(data => getProductDetailsCart(data)).catch(error => console.log(error))
    
    function getProductDetailsCart(data){
        let html = ""
        let id = data[0].id
        let name = data[0].name
        let img = data[0].img
        let price = data[0].Price
        let shr_Desc = data[0].Short_Description
        let count = data[0].count
        let total = data[0].totalP
        console.log(total)
        let temp = {}
        temp.id = id
        temp.name = name
        temp.img = img
        temp.price = price
        temp.desc = shr_Desc
        temp.count = count
        temp.total = total

        console.log(temp)
        arr = [...arr,temp]
        localStorage.setItem("cart",JSON.stringify(arr))
        let modal1 = document.getElementById("myModal1");
        let span1 = document.getElementsByClassName("close1")[0];
        modal1.style.display = "block";
        span1.onclick = function() {
            modal1.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal1) {
                modal1.style.display = "none";
            }
        }

        html+= `
        <div class="cartAdd">
            <h3>Item Added to Cart</h3>
            <div class="imageBox">
                <img src="https://media.tenor.com/images/b95474b4e57295c82fb7ffc3b882e683/tenor.gif" class="img" alt="">
            </div>
        </div>
        `
        document.getElementById("cartAddModal").innerHTML = html
    }
  }
}
var expanded = false;

function showCheckboxes1() {
  let checkboxes = document.getElementById("ptcheckboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    checkboxes.style.position="absolute"
    checkboxes.style.backgroundColor="white"
    checkboxes.style.borderBottom = "2px solid black"
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
function showCheckboxes2() {
    let checkboxes = document.getElementById("fncheckboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      checkboxes.style.position="absolute"
    checkboxes.style.backgroundColor="white"
    checkboxes.style.borderBottom = "2px solid black"

      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  }function showCheckboxes3() {
    var checkboxes = document.getElementById("fccheckboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      checkboxes.style.backgroundColor="white"
      checkboxes.style.borderBottom = "2px solid black"
      checkboxes.style.position="absolute"
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  }



  // =============================================footer js=======================================
      
let help_btn = document.getElementsByClassName('help-btn');
let cols = document.getElementsByClassName('col')

help_btn[0].addEventListener('click',()=>{
    for(let i=1;i<=4;i++){
        cols[i].classList.toggle("open-end-nav")
    }
    
})