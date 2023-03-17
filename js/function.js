let nav = document.querySelector('#header-navbar'),
    navPosition = nav.offsetTop
    navTop = nav.style.top;
    window.onscroll = () =>{
    (window.pageYOffset >= navPosition) ? nav.style.color = 'black': nav.style.color = navTop;
};