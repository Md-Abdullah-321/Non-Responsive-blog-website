window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.arrow_btn');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
    window.scrollTo({
        top: 0
    })
}

// hamberger menu js 

function toggleClass() {
    let menu = document.querySelector("header");
    menu.classList.toggle("toggleCls");
}