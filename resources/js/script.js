// navigation menu
const menu = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.onclick = () =>{
    menu.classList.add('active');
    menuBtn.classList.add('hide');
}

cancelBtn.onclick = () =>{
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
}


// birthday alert 
const birthdayWish = () => {
    alert(`Congratulations on a great day, good luck on the way, I hope the next life will be happy, enjoy the day well. ~ Happy Birthday`)
}


// current location track
window.onload = () =>{
    navigator.geolocation.getCurrentPosition((success) =>{
        console.log(success)
    },(error) =>{
        console.log(error)
    })
}


// spinner add
const toggleSpinner = (show) => {
    const spinner = document.getElementById('loading-spinner');
    if(show){
        spinner.classList.remove('d-none');
    }else{
        spinner.classList.add('d-none');
    }
    
    
}
window.onload = function () { 
    toggleSpinner(false)
    
}




