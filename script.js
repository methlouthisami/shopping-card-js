
//////////======stickey navbar ==============/////////////////
function stickyElement(e) {

    var header = document.querySelector('.header');
    var headerHeight = getComputedStyle(header).height[0];
    var navbar = document.querySelector('.navigation');
    var scrollValue = window.scrollY;

    if (scrollValue > headerHeight) {
        navbar.classList.add('is-fixed');

    } else if (scrollValue < headerHeight) {
        navbar.classList.remove('is-fixed') 
        navbar.style.backgroundColor ="#003a63";

    }    

}

window.addEventListener('scroll', stickyElement);

//////////////==============campteur js===============//////////////

var compt = document.querySelectorAll('.btn')

for(let i=0;i<compt.length;i++){
    compt[i].addEventListener("click", () => {
        kl()
    })
}
///////////===========//local storage //============////////////////////
function kl(){
    let local=localStorage.getItem("kl")
    local=parseInt(local);
    if (local){
      localStorage.setItem("kl",local+1)
      document.getElementById('val').innerHTML=local+1
    }
    else{
        localStorage.setItem("kl",1)
        document.getElementById('val').innerHTML=1  
    }
}
///////////////===========================////////////////////////////////

// our array


let btns=document.getElementsByClassName('.btn')
for(let i=0;i<btns.length;i++){
    addbtn=btns[i];
    addbtn.addEventListener('click',addtocart);
}
function addtocart(event){
    btnclick=event.target;
    CardItems=btnclick.parentElement.parentElement.parentElement;
    titre=CardItems.getElementsByClassName('card-title')[0].innerText;
    price=CardItems.getElementsByClassName('pris')[0].innerText;
    imagesrc=CardItems.getElementsByClassName('card-img-top')[0].src;
    additemcard(titre,price,imagesrc)
    
}


function additemcard(titre,price,imagesrc){
let newDiv=document.createElement('div');
var cartcontent=`   

<img src="${imagesrc}">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">${titre}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>${price}</p>
    </div>
   
  </div>

   `
newDiv.innerHTML=cartcontent;
let cart2=document.getElementsByClassName('cart-items')[0]
 cart2.appendChild("cartcontent")
}

