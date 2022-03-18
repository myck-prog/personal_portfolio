// template_zdvhkhf
// service_zejm92e
// INDO7NuWEiU1IVHr7, user id

// form by default refresh the page. so we need to pass in the event

const scaleFactor = 1/20;

let contrastToggle = false;

function moveBackground(event){
    const shapes  = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for(let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1:1;
        shapes[i].style.transform = `translate(${x*boolInt}px,${y*boolInt}px)`
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
    
}
function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const succcess = document.querySelector('.modal__overlay--success');
    // adding a class dont forget the space
    loading.classList += " modal__overlay--visible"
    emailjs.sendForm(
        'service_zejm92e',
        'template_zdvhkhf',
        event.target,
        'INDO7NuWEiU1IVHr7'

    ).then(()=>{
        // throw new Error("error");mt
        loading.classList.remove( "modal__overlay--visible");
        succcess.classList += " modal__overlay--visible";
    }).catch(()=>{
        loading.classList.remove( "modal__overlay--visible");
        alert(
            "The email service is currently unavailable, please contact me directly on myckland.matthew@gmail.com"
        );
 
    })
   
    // loading.classList += " modal__overlay--visible"
    // setTimeout(()=>{
        
    //     console.log('it worked 1')
    // },500);
}

// Toggle Modal
let isModalOpen = false;

function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    // this is to toggel modal open

    document.body.classList += " modal--open";
}