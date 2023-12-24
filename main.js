let menu = Document.querySelector('#menu-icon');
let navbar= Document.querySelector('.navbar');

menu.oneclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.omscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

}