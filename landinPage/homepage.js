//==============================================Image Change SetInterval===============================================
window.addEventListener("load", setImageTime)

function setImageTime(){
    let playHtml = ""
    playHtml+=`
    <i id="pBtn" class="fas fa-pause-circle"></i>
    `
    document.getElementById("buttonCtrl").innerHTML = playHtml
    Btncount = 0
    let image = document.getElementById("changeImage");
    let currentPos = 0;
    let img = [
        "https://www.bathandbodyworks.com/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw3bdbc9d0/images/Spring2021/diff_room_SP2_0_hm_3.jpg",
        "https://www.bathandbodyworks.com/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwac2f90eb/images/Spring2021/diff_room_SP2_0_hm_4.jpg",
        "https://www.bathandbodyworks.com/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwbe67a6ac/images/Spring2021/diff_room_SP2_0_hm_1.jpg",
        "https://www.bathandbodyworks.com/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw53fc7de3/images/Spring2021/diff_room_SP2_0_hm_2.jpg"
    ]

    function volgendefoto() {
        if (++currentPos >= img.length)
        currentPos = 0;
        image.src = img[currentPos];
    }

    var timeImage = setInterval(volgendefoto, 2000);

    document.getElementById("pBtn").addEventListener("click", stopTimmer)

    var Btncount = 0

    function stopTimmer(){
        let html = ""
        Btncount++
        console.log(Btncount)
        if(Btncount > 1){
            Btncount = 0
        }
        if(Btncount == 0){
            console.log("Play")
            timeImage = setInterval(volgendefoto, 2000)
        }
        if(Btncount == 1){
            console.log("Pause")
            clearInterval(timeImage)
            html+=`
                <i id="pBtn" class="far fa-play-circle" onclick="setImageTime()"></i>
            `
            document.getElementById("buttonCtrl").innerHTML = html
        }
    }
}

//================================================Offer DIV===============================================================
window.addEventListener("load", getOfferData)

function getOfferData(){

    let pageCount = 1
    if(pageCount == 1){
        document.getElementById("leftOfferBtn").style.display = "none"
        document.getElementById("rightOfferBtn").style.display = "block"
    }

    document.getElementById("rightOfferBtn").addEventListener("click", function(){
        pageCount++
        if(pageCount>2){
            pageCount = 2
            fetch(`https://bath-and-body-mock-server.herokuapp.com/offer?_page=${pageCount}&_limit=4`).then(response => response.json()).then(data => displayOfferData(data)).catch(error => error)
                document.getElementById("leftOfferBtn").style.display = "block"
                document.getElementById("rightOfferBtn").style.display = "none"
        }
        else{
            fetch(`https://bath-and-body-mock-server.herokuapp.com/offer?_page=${pageCount}&_limit=4`).then(response => response.json()).then(data => displayOfferData(data)).catch(error => error)
                document.getElementById("leftOfferBtn").style.display = "block"
                document.getElementById("rightOfferBtn").style.display = "none"
        }
    })

    document.getElementById("leftOfferBtn").addEventListener("click", function(){
        pageCount--
        if(pageCount == 0 || pageCount < 1){
            pageCount = 1
            fetch(`https://bath-and-body-mock-server.herokuapp.com/offer?_page=${pageCount}&_limit=4`).then(response => response.json()).then(data => displayOfferData(data)).catch(error => error)
            document.getElementById("leftOfferBtn").style.display = "none"
            document.getElementById("rightOfferBtn").style.display = "block"
        }
        else{
            fetch(`https://bath-and-body-mock-server.herokuapp.com/offer?_page=${pageCount}&_limit=4`).then(response => response.json()).then(data => displayOfferData(data)).catch(error => error)
            document.getElementById("leftOfferBtn").style.display = "none"
            document.getElementById("rightOfferBtn").style.display = "block"
        }
    })
    fetch("https://bath-and-body-mock-server.herokuapp.com/offer?_page=1&_limit=4").then(response => response.json()).then(data => displayOfferData(data)).catch(error => error)

    function displayOfferData(data){
        let html = ""
        for(i in data){
            let name = data[i].name
            let offer= data[i].offerPrice
            let desc = data[i].Description
            let id = data[i].id

            html+= `
            <div id="offerCard">
                <div id="offerInfor">
                    <p class="firstPara">${name}</p>
                    <p class="secondPara">${offer}</p>
                    <p class="thirdPara">${desc}</p>
                </div>
                <button class="shopBtn">SHOP</button>
            </div>
            `
        }
        document.getElementById("displayOfferData").innerHTML = html
    }
}
//=================================================New Products Display=================================================
window.addEventListener("load", getNewProducts)

function getNewProducts(){

    let pageCount = 1

    if(pageCount == 1){
        document.getElementById("pNavBtn1").style.display = "none"
        document.getElementById("pNavBtn2").style.display = "block"
    }

    document.getElementById("pNavBtn2").addEventListener("click", function(){
        pageCount++
        if(pageCount>2){
            pageCount = 3
            fetch(`https://bath-and-body-mock-server.herokuapp.com/Fresh?_page=${pageCount}&_limit=3`).then(response => response.json()).then(data => displayNewItem(data)).catch(error => error)
                document.getElementById("pNavBtn1").style.display = "block"
                document.getElementById("pNavBtn2").style.display = "none"
        }
        else{
            fetch(`https://bath-and-body-mock-server.herokuapp.com/Fresh?_page=${pageCount}&_limit=3`).then(response => response.json()).then(data => displayNewItem(data)).catch(error => error)
                document.getElementById("pNavBtn1").style.display = "block"
                document.getElementById("pNavBtn2").style.display = "block"
        }
    })

    document.getElementById("pNavBtn1").addEventListener("click", function(){
        pageCount--
        console.log(pageCount)
        if(pageCount == 1 || pageCount < 1){
            pageCount = 1
            fetch(`https://bath-and-body-mock-server.herokuapp.com/Fresh?_page=${pageCount}&_limit=3`).then(response => response.json()).then(data => displayNewItem(data)).catch(error => error)
            document.getElementById("pNavBtn1").style.display = "none"
            document.getElementById("pNavBtn2").style.display = "block"
        }
        else{
            fetch(`https://bath-and-body-mock-server.herokuapp.com/Fresh?_page=${pageCount}&_limit=3`).then(response => response.json()).then(data => displayNewItem(data)).catch(error => error)
            document.getElementById("pNavBtn1").style.display = "block"
            document.getElementById("pNavBtn2").style.display = "block"
        }
    })
    fetch(`https://bath-and-body-mock-server.herokuapp.com/Fresh?_page=1&_limit=3`).then(response => response.json()).then(data => displayNewItem(data)).catch(error => console.log(error))

    function displayNewItem(data){
        let html = ""
        
        for(i in data){

            let id = data[i].id
            let img = data[i].img
            let name = data[i].name
            let shr_Desc = data[i].Short_Description
            let price = data[i].price
            let desc = data[i].Description

            html+=`
            <div id="displayProduct_Card">
                <div id="card_image" onmouseover="quickViewIn(${id})" onmouseout="quickViewOut(${id})">
                    <img src="${img}" class="img" alt="">
                </div>
                <div class="card_info">
                    <p class="card_info_para">${name}</p>
                    <p class="card_info_para_desc">${shr_Desc}</p>
                </div>
                <button onclick="addToCart(${id})" class="card_AddCartBtn">ADD TO BAG</button>
                <div class="flat" id="quickViewDiv" onclick="getProductDetails(${id})" onmouseover="quickViewIn(${id})" onmouseout="quickViewOut(${id})">
                    <i class="fas fa-eye">
                        <p>Quicklook</p>
                    </i>
                </div>
            </div>
            `
        }
        document.getElementById("displayProduct").innerHTML = html
    }

}
//===============================================Adding Data to LS======================================================
let arr = []
function addToCart(val){
    console.log("val")
    let id = val
    fetch(`https://bath-and-body-mock-server.herokuapp.com/Fresh?id=${id}`).then(response => response.json()).then(data => getProductDetailsCart(data)).catch(error => console.log(error))
    
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


//===============================================Product view Modal======================================================
function getProductDetails(val){
    let id = val
    modal.style.display = "block"
    fetch(`https://bath-and-body-mock-server.herokuapp.com/Fresh?id=${id}`).then(response => response.json()).then(data => displayModalData(data)).catch(error => console.log(error))

    function displayModalData(data){
        console.log(data)
        let id = data[0].id
        let name = data[0].name
        let desc = data[0].Description
        let price = data[0].Price
        let shrt_desc = data[0].Short_Description
        let img = data[0].img
        let html = ""

        html+= `
        <div class="displayModalCont">
            <div class="displayModalCont_img">
                <img src="${img}" class="img" alt="">
            </div>
            <div class="displayModalCont_info">
                <div class="displayModalCont_info_name">
                    <strong>${name}</strong>
                    <p>${shrt_desc}</p>
                </div>
                <div class="displayModalCont_info_desc">${desc}</div>
                <div class="displayModalCont_info_price">$${price}</div>
                <div class="displayModalCont_info_btn">
                        <div class="displayModalCont_info_btn_count">
                            <button id="minusBtn">-</button>
                            <p id="numValue">0</p>
                            <button id="plusBtn">+</button>
                        </div>
                    <button class="displayModalCont_info_btn_cart">ADD TO BAG</button>
                </div>
            </div>
        </div>
        `

        document.getElementById("DisplayModalProductData").innerHTML = html
    }
}

function addToCartH(val){
    console.log("object")
}

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//------------------------------------------------------------------------------------------------------------

function quickViewIn(val){
    let id = val
    let elem = document.getElementsByClassName("flat")
    for(let i = 0; i < elem.length; i++){
        elem[i].style.display = "block"
        console.log(id)
    }
}

function quickViewOut(val){
    let id = val
    let elem = document.getElementsByClassName("flat")
    for(let i = 0; i < elem.length; i++){
        elem[i].style.display = "none"
        console.log(id)
    }
}

//==========================================Hompage Mid Banner===========================================================
window.addEventListener("load", loadBanner)

function loadBanner(){
    fetch("https://bath-and-body-mock-server.herokuapp.com/Banner").then(response => response.json()).then(data => displayBannerData(data)).catch(error => console.log(error))

    function displayBannerData(data){
        let html = ""
        for(let i in data){
            console.log(data[i])
            let img = data[i].img
            let link = data[i].link
            let desc = data[i].Description
            let id = data[i].id

            html+=`
            <div class="hompageMidPoster_card">
                <div class="hompageMidPoster_card_img">
                    <img src="${img}" class="img" alt="">
                </div>
                <div class="hompageMidPoster_card_info">
                    <p>${desc}</p>
                    <a href="#">${link}</a>
                </div>
            </div>
            `
        }
        document.getElementById("hompageMidPoster").innerHTML = html
    }
}

//=======================================Home Page Category==============================================================
window.addEventListener("load", getCategory)

function getCategory(){
    fetch("https://bath-and-body-mock-server.herokuapp.com/Category").then(response => response.json()).then(data => displayCategory(data)).catch(error => console.log(error))

    function displayCategory(data){
        let html = ""
        
        for(let i in data){
            let img = data[i].img
            let name = data[i].name
            
            html+=`
            <div id="shopByCata_Card">
                <div id="shopByCata_Card_Img">
                    <img src="${img}" class="img" alt="">
                </div>
                <div id="shopByCata_Card_Cata">
                    <p>${name}</p>
                </div>
            </div>
            `
        }
        document.getElementById("shopByCata").innerHTML = html
    }
}
//================================================BodyWork Images=========================================================
window.addEventListener("load", getBodyWorkData)

function getBodyWorkData(){

    let pageCount = 1

    if(pageCount == 1){
        document.getElementById("leftOfferBtn1").style.display = "none"
        document.getElementById("rightOfferBtn1").style.display = "block"
    }

    document.getElementById("rightOfferBtn1").addEventListener("click", function(){
        pageCount++
        if(pageCount>2){
            pageCount = 2
            fetch(`https://bath-and-body-mock-server.herokuapp.com/atBodyWorks?_page=${pageCount}&_limit=4`).then(response => response.json()).then(data => displayBodyWorkData(data)).catch(error => error)
                document.getElementById("leftOfferBtn1").style.display = "block"
                document.getElementById("rightOfferBtn1").style.display = "none"
        }
        else{
            fetch(`https://bath-and-body-mock-server.herokuapp.com/atBodyWorks?_page=${pageCount}&_limit=4`).then(response => response.json()).then(data => displayBodyWorkData(data)).catch(error => error)
                document.getElementById("leftOfferBtn1").style.display = "block"
                document.getElementById("rightOfferBtn1").style.display = "none"
        }
    })

    document.getElementById("leftOfferBtn1").addEventListener("click", function(){
        pageCount--
        if(pageCount == 0 || pageCount < 1){
            pageCount = 1
            fetch(`https://bath-and-body-mock-server.herokuapp.com/atBodyWorks?_page=${pageCount}&_limit=4`).then(response => response.json()).then(data => displayBodyWorkData(data)).catch(error => error)
            document.getElementById("leftOfferBtn1").style.display = "none"
            document.getElementById("rightOfferBtn1").style.display = "block"
        }
        else{
            fetch(`https://bath-and-body-mock-server.herokuapp.com/atBodyWorks?_page=${pageCount}&_limit=4`).then(response => response.json()).then(data => displayBodyWorkData(data)).catch(error => error)
            document.getElementById("leftOfferBtn1").style.display = "none"
            document.getElementById("rightOfferBtn1").style.display = "block"
        }
    })
    fetch("https://bath-and-body-mock-server.herokuapp.com/atBodyWorks?_page=1&_limit=4").then(response => response.json()).then(data => displayBodyWorkData(data)).catch(error => error)

    function displayBodyWorkData(data){
        let html = ""
        for(i in data){
            let img = data[i].img

            html+= `
            <div id="offerCard1">
            <div id="offerInfor1">
                <img src="${img}" class="img" alt="">
            </div>
        </div>
            `
        }
        document.getElementById("displayOfferData1").innerHTML = html
    }
}

// =========================================footer code==============================================================
let account_drop_btn = document.getElementById('myAccount');
let dropAccount = document.getElementById('account');
account_drop_btn.addEventListener('click',()=>{
    dropAccount.classList.toggle('open_account')
})

//==================================================nav bar code=======================================================
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