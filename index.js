// template_zdvhkhf
// service_zejm92e
// INDO7NuWEiU1IVHr7, user id

// form by default refresh the page. so we need to pass in the event
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

function toggleModal(){
    console.log('work')
}