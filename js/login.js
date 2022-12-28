function validation(){
    let userMail = document.querySelector('#mail');
    let userPass = document.querySelector('#pass')


    // email error
    if (userMail.value.trim() === ''){
        document.querySelector('#Mail').innerHTML = "* Enter your email";
        return false
    }else{
        document.querySelector('#Mail').innerHTML = "";
    }
    // password error
    if (userPass.value.trim() === ''){
        document.querySelector('#Pass').innerHTML = "* Enter your password";
        return false
    }else{
        document.querySelector('#Pass').innerHTML = "";
    }

    
}
