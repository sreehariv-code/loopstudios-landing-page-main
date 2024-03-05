const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const nav = document.querySelector("nav .navlinks")
const btnImage = toggleBtn.getElementsByTagName("img")[0]

console.log(btnImage)
toggleBtn.addEventListener('click',toggle)
function toggle(){
    if(nav.classList.contains("active") || toggleBtn.classList.contains("active")){
        nav.classList.remove("active");
        btnImage.src = './images/icon-hamburger.svg'        
    }else{
        nav.classList.add("active");
        btnImage.src = './images/icon-close.svg'  
    }
}