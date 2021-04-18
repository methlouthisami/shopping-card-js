localStorage.setItem("totalPrice",0)
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
    navbar.style.backgroundColor = "#003a63";

  }

}

window.addEventListener('scroll', stickyElement);

//////////////==============compteur js===============//////////////

var compt = document.querySelectorAll('.btn')
for (let i = 0; i < compt.length; i++) {
  compt[i].addEventListener("click", () => {
    kl()
  })
}
///////////===========//local storage //============////////////////////
function kl() {
  let local = localStorage.getItem("kl")
  local = parseInt(local);
  if (local) {
    localStorage.setItem("kl", local + 1)
    document.getElementById('val').innerHTML = local + 1
  }
  else {
    localStorage.setItem("kl", 1)
    document.getElementById('val').innerHTML = 1
  }

}
   

////////////////////////////localstorge empty===//////////////////////////////////
window.localStorage.removeItem('kl');

//////////////////////////////btns///////////////////////////////

let btns = document.getElementsByClassName('btn')
for (let i = 0; i < btns.length; i++) {
  addbtn = btns[i];
  addbtn.addEventListener('click', addtocart);
}

function addtocart(event) {
  btnclick = event.target;
  CardItems = btnclick.parentNode;   
  titre = CardItems.getElementsByClassName('card-title')[0].innerText;
  price = CardItems.getElementsByClassName('pris')[0].innerText;
  console.log("pris")
  imagesrc = CardItems.getElementsByClassName('card-img-top')[0].src;
  additemcard(titre, price, imagesrc)
}

function additemcard(titre, price, imagesrc) {
  let totalPrice = parseInt(localStorage.getItem("totalPrice"))
  var cartitems = document.getElementsByClassName('cart-items')[0]
  var cartrow = document.createElement('div')
  totalPrice += parseInt(price);
  localStorage.setItem("totalPrice", totalPrice)
  var cartrowcontents = `<div class="modalcart">
  <img class="img" src="${imagesrc}" style="height:100px">
  <span>${titre}</span>
  <h3>${price}</h3><button class="removi" onclick="this.parentNode.parentNode.removeChild(this.parentNode);">remove</button>
  <span class="ze"></span></div>`
  cartrow.innerHTML = cartrowcontents
  cartitems.appendChild(cartrow)
}

function total() {
  let totalPrice = parseInt(localStorage.getItem("totalPrice"));
  var totalRow = document.createElement('div')
  let modalBody = document.getElementById("modalBody");
  totalRow.innerHTML = `
  <div><h2>TOTAL:${totalPrice}</h2></div>`
  modalBody.appendChild(totalRow)
}
//////////display-button-valid/////////////
function valid() {
  var x = document.getElementById("button-ok");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
console.log(valid())

