const nom = document.querySelector('.nom')
var typed = new Typed(".nom", {
    strings: ["RANDRIAMIHAMINA", "Tsiaro Arovan'i Avo"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,})
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show");
        }
    })
}, {})
const pdpElements = document.querySelectorAll(".pdp")
const text = document.querySelectorAll(".Info")
const navy = document.querySelectorAll(".navy")
const skill = document.querySelectorAll(".skill")
const school = document.querySelectorAll(".school")
const call = document.querySelectorAll(".call")
pdpElements.forEach(el => observer.observe(el))
school.forEach(el => observer.observe(el))
text.forEach(el => observer.observe(el))
navy.forEach(el => observer.observe(el))
call.forEach(el => observer.observe(el))
skill.forEach(el => observer.observe(el))
const contacter = document.querySelector(".contact");
const contact = document.querySelector(".Contact");
const licence = document.querySelector(".licence");
const home = document.querySelector(".home");
const profil = document.querySelector(".profil");
const about = document.querySelector(".About");
about.onclick = () => {
    licence.classList.add('active');
    profil.classList.add('active');
    contacter.classList.remove('active');
}
home.onclick = () => {
    contacter.classList.remove('active');
    licence.classList.remove('active');
    profil.classList.remove('active');
}
contact.onclick = () => {
    licence.classList.remove('active');
    profil.classList.add('active');
    contacter.classList.add('active');
}