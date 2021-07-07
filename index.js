// window.addEventListener("load", function(){
//     document.querySelector(".pageloader").classList.add("fade-out")
//     setTimeout(function(){
//         document.querySelector(".pageloader").getElementsByClassName.display = 'none';
//     },600)
// })

var nav_toggler = document.querySelector(".nav_toggler");

nav_toggler.addEventListener("click", toggle)

function toggle(params) {
    nav_toggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open")
}

document.addEventListener('click', function(e){
    if(e.target.closest('.nav_item')){
        toggle();
    }
})

window.addEventListener('scroll', function(){
    if(window.scrollY > 200){
        document.querySelector(".header").classList.add("sticky")
    } else {
        document.querySelector(".header").classList.remove("sticky")
    }
})

// menu tabs
var menuTabs = document.querySelector(".menu-tabs");
menuTabs,addEventListener("click", function(e) {
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute('data-target');
    menuTabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active')
    document.querySelector(".menu-tab-content.active").classList.remove("active")
    document.querySelector(target).classList.add('active')
    }
});

// tilt
VanillaTilt.init(document.querySelector(".team-item"), {
    max: 25,
    speed: 400
});