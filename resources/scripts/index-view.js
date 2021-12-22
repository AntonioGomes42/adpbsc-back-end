//Selectors
const home = document.getElementById('home');
const gallery = document.getElementById('gallery');
const about = document.getElementById('about');
//Listeners
//On Click
home.addEventListener('click',goHomePage)


function goHomePage(){
    window.open(`/`,'_self');
}