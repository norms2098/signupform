const password=document.getElementById('password');
const passwordConfirm=document.getElementById('confirm_pass');
const submitBtn = document.querySelector('.submit-btn')


function errorMessage(){
    const errorDisplay=document.querySelector('.error-msg');
    errorDisplay.innerHTML="*Passwords don't match.";
    password.style.borderColor="red";
    passwordConfirm.style.borderColor="red";
    errorDisplay.style.fontWeight="bold";
    errorDisplay.style.marginTop="5px";
}

submitBtn.addEventListener('click', (e) => {
   
    if(password.value !== passwordConfirm.value){
        e.preventDefault();
        errorMessage();
    }

})