const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkinput([username,email,password,password2]);
   // if(username.value===""){
       //showerror(username,'กรุณาป้อนชื่อผู้ใช้งาน');
   // }
    //else{
      //  showsuccess(username);
        //console.log("okay");
   // }
     if(!validateEmail(email.value.trim())){
        showerror(email,'อีเมลไม่ถูก');
     }
     else{
         showsuccess(email);
         console.log("okay");
     }
     checkpassword(password,password2);
   // console.log("submitt");
});

function showerror(input,message){
    const formtextincontrol=input.parentElement;
    //เปลี่ยน class
    formtextincontrol.className='form-textincontrol error';
    const small = formtextincontrol.querySelector('small');
   
    small.innerText=message;
}
function showsuccess(input){
    const formtextincontrol=input.parentElement;
    //เปลี่ยน class
    formtextincontrol.className='form-textincontrol success';
}

function validateEmail (email) {
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };
  function checkinput(inputArray){
       inputArray.forEach( function(input){
            if(input.value.trim() === ''){
                showerror(input,'กรุณาป้อนข้อมูล');
            }else{
                showsuccess(input);
            }

       });
  }
    function checkpassword(password,password2){
        if(password.value !== password2.value){
            showerror(password2,"รหัสไม่ตรงกัน");
        }
    }
