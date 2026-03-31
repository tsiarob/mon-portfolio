const tree = document.querySelector('.menu')
const tete = document.querySelector('.Tête')
const tronc = document.querySelector('.Tronc')
const serve = document.querySelector('.Serve')
const Services = document.querySelector('.Services')
const leave = document.querySelector('.Leave')
const skill = document.querySelector('.Skills')
const education = document.querySelector('.Education')
const contact = document.querySelector('.Contact')
const comp = document.querySelector('.skill')
const clos = document.querySelector('.Close')
const eleve = document.querySelector('.eleve')
const fermer = document.querySelector('.fermer')
const appel = document.querySelector('.appel')
const butty = document.querySelector('.butty')
const menu = document.querySelector('.menu')
const navy = document.querySelector('.nav')
const tap = document.querySelector('.Tap')
const image = document.querySelector('.image')
const like = document.querySelector('.like')
// const Loading = document.querySelector('.Loading')


var typed = new Typed(".Pro", {
    String: ["RAKOTONIRINA", "Ravaka Domoina"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,})



var typed = new Typed(".h4", {
    strings: ["Passionate about software development, I work with C++, Python, and modern web technologies such as HTML, CSS, and JavaScript. I enjoy turning ideas into practical applications, solving problems through code, and creating clean, responsive digital experiences."],
    typeSpeed: 20,
    loop: false,})


serve.onclick  = () => {
    Services.classList.add('active');
    tete.classList.add('active');
    tronc.classList.add('active');
    // menu.classList.add('active');
    // tap.classList.remove('active');
    
}
leave.onclick  = () => {
    // Loading.classList.remove('active');
    Services.classList.remove('active');
    tete.classList.remove('active');
    tronc.classList.remove('active');
    // tap.classList.add('active');
    // menu.classList.remove('active');




}
skill.onclick  = () => {
    // Loading.classList.add('active');
    comp.classList.add('active');
    tete.classList.add('active');
    tronc.classList.add('active');
    // menu.classList.add('active');
    // tap.classList.remove('active');
}
clos.onclick  = () => {
    comp.classList.remove('active');
    tete.classList.remove('active');
    tronc.classList.remove('active');
    // tap.classList.add('active');
    // menu.classList.remove('active');




}
education.onclick  = () => {
    // menu.classList.add('active');
    eleve.classList.add('active');
    tete.classList.add('active');
    tronc.classList.add('active');
    // tap.classList.remove('active');
    
}
fermer.onclick  = () => {
    eleve.classList.remove('active');
    tete.classList.remove('active');
    tronc.classList.remove('active');
    // tap.classList.add('active');
    // menu.classList.remove('active');




}
contact.onclick = () => {
    // menu.classList.add('active');
    appel.classList.add('active');
    tete.classList.add('active');
    tronc.classList.add('active');
    // tap.classList.remove('active');
}
butty.onclick = () => {
    appel.classList.remove('active');
    tete.classList.remove('active');
    tronc.classList.remove('active');
    // tap.classList.add('active');
    // menu.classList.remove('active');




}

tap.onclick = () => {
    navy.classList.remove('active');
    tap.classList.remove('active');
    menu.classList.remove('active');
    Services.classList.remove('active');
    comp.classList.remove('active');
    eleve.classList.remove('active');
    appel.classList.remove('active');
    tete.classList.remove('active');
    tronc.classList.remove('active');
}

menu.onclick = () => {
    navy.classList.add('active');
    tap.classList.add('active');
    menu.classList.add('active');
    image.classList.add('active');
}

// like.onclick = function tour(){
//     like.style.background = 'blue';
// }
// more.onclick = () => {
//     // secret.classList.remove('active');
//     // provoc.classList.add('active');
//     // secreter.classList.add('active');
//     secretaire.classList.add('active');
//     appel.classList.remove('active');
// }
// provoc.onclick = () => {
//     Nope.classList.add('active');
//     provoc.classList.remove('active');
//     // appel.classList.add('active');
// }
// boobs.onclick = () => {
//     Nope.classList.remove('active');
//     tete.classList.remove('active');
//     tronc.classList.remove('active');
//     secretaire.classList.remove('active');
// }

// prive.onclick = function darkMod(){
//     Girl.style.border-radius == '10px';
// }

    
    // // tap.classList.removeadd');
    
// navy.onclick = () => {
//     tap.classList.add('hide');
//     navy.classList.remove('active');

    // tap.classList.add('hide');
    // menu.classList.remove('active');
    // navy.classList.add('active');
//     navy.classList.add('active');
//     navy.classList.remove('hide');
    // navy.classList.add('activenavy.classList.add('active')');
    // navy.classList.remove('hide');





var typed = new Typed(".Nope", {
    strings: ["http://www.youtube.com/@programmingwithmosh : English http://www.youtube.com/@melvynxdev : French http://www.youtube.com/@codehal : If you want exercise, maybe you need to check this. http://www.youtube.com/@MachineLearnia : And if you want to progress in Machine Learning, use this but it8s in French. I hope you enjoy this link, Have a good time. "],
    typeSpeed: 40,
    loop: false,})