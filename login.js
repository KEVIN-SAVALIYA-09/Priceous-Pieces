let registered = JSON.parse(localStorage.getItem('rdata'))


let email = document.getElementById('email');
let password = document.getElementById('password');

let btn=document.getElementById('btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault();

    let userdetails=registered.find(ele=> email.value===ele.email && password.value===ele.password);
    // console.log(userdetails);
    if(userdetails){
        location.href='./home.html'
    }else{
        alert('incorrect credentials or user not fouund')   
    }
    
    // registered.forEach(element => {
    //     if(email.value===element.email&& password===element.password){
    //         location.href='./homepage.html'
    //     }else{
    //         alert("wrong credentials")
    //     }
    // });
})