
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
