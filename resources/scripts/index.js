//Selectors
const home = document.getElementById('home');
const gallery = document.getElementById('gallery');
const about = document.getElementById('about');
const main = document.getElementById('container');
//Listeners
//MouseOver
home.addEventListener('mouseover', onHover)
gallery.addEventListener('mouseover', onHover)
about.addEventListener('mouseover', onHover)
//MouseOut
home.addEventListener('mouseout', onMouseOut)
gallery.addEventListener('mouseout', onMouseOut)
about.addEventListener('mouseout', onMouseOut)
//OnClick
main.addEventListener('click',openViewPage);
// Control page functions 
function onHover(event){
    removeActivatedFromButton();
    const button = event.target;
    button.classList.add("hover");
    button.style.color = "#232B52FE";
}

function onMouseOut(event){
    const button = event.target;
    if(!(button.classList.contains("activated"))){
        button.classList.remove("hover");
        button.style.color = "#ecf0f1";
    }
    addActivatedFromButton();   
}

function removeActivatedFromButton(){
    switch(whoContainsActivatedClass().id){
        case "home":
            home.classList.remove("hover");
            home.style.color = "#ecf0f1";
            break;
        case "gallery":
            gallery.classList.remove("hover");
            gallery.style.color = "#ecf0f1";
            break;
        case "about":
            about.classList.remove("hover");
            about.style.color = "#ecf0f1";
            break;
        case "error":
            alert("Um erro ocorreu nos botões de navegação");
    }
}

function addActivatedFromButton(){
    switch(whoContainsActivatedClass().id){
        case "home":
            home.classList.add("hover");
            home.style.color = "#232B52FE";
            break;
        case "gallery":
            gallery.classList.add("hover");
            gallery.style.color = "#232B52FE";
            break;
        case "about":
            about.classList.add("hover");
            about.style.color = "#232B52FE";
            break;
        case "error":
            alert("Um erro ocorreu nos botões de navegação");
    }
} 

function whoContainsActivatedClass(){
    if(home.classList.contains("activated")){
        return home;
    }
    if(gallery.classList.contains("activated")){
        return gallery;
    }
    if(about.classList.contains("activated")){
        return about;
    }
 return {id:"error"};
}

function openViewPage(event){
    const index = parseInt(event.path[0].attributes[0].value);
    window.open(`/${index}`,'_self');
}
