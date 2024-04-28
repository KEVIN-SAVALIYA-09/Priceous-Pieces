let fullname=document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let btn = document.getElementById('btn');

registereddata=[];
// localStorage.setItem('rdata',JSON.stringify(registereddata));

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let registereddata=JSON.parse(localStorage.getItem('rdata'))
    registereddata.push({name: fullname.value, 
                    email: email.value,
                    password: password.value    
                })
                localStorage.setItem('rdata',JSON.stringify(registereddata))
                location.href='./login.html'
})
