    // let validate=()=>{


let id = (id) => document.querySelector(id);
let classes = (error) => document.getElementsByClassName(error);
let username = id("#username"),
  password = id("#password"),
  cPassword = id("#cPassword"),
  email = id("#email"),
  errMsg = classes("error");
(failureIcon = classes("failure-icon")),
  (successIcon = classes("success-icon")),
  (form = id("#form_"));


 form.addEventListener('submit',validate);

function validate(e){
  e.preventDefault()
   engineUser(username);
  engineEmail(email);
  enginePassword(password)
  enginecPassword(cPassword)
  
}
 
// let engine=(id,serial,message)=>{
//     console.log("helo")
//     if(id.value.trim()==""){
//         errMsg[serial].innerHTML=message
//         failureIcon[serial].style.opacity="1"
//         successIcon[serial].style.opacity='0'

//     }else{
//         errMsg[serial].innerHTML=""
//         failureIcon[serial].style.opacity='0'
//         successIcon[serial].style.opacity='1'
//     }
// }
// ______________________________________user name section__________________________________________________
/*
no whitw space=> trim

 */
let regexUserName = /[^\W][a-z][^\W]/;
let engineUser = (id) => {
  if (id.value.trim() === "") {
    errMsg[0].innerHTML = "user name cannot be blank";
    failureIcon[0].style.opacity = "1";

  } else if (regexUserName.test(id.value)) {
    errMsg[0].innerHTML = "";
    successIcon[0].style.opacity = "1";
    failureIcon[0].style.opacity = "0";
  } else {
    errMsg[0].innerHTML = "Name should be proper";
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";
    
  }
};
// _________________________________________email- address______________________________________________________
let regexUserEmail=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/


let engineEmail = (id) => { 
  if(id.value.trim()===""){
    errMsg[1].innerHTML="Email cannot be blank"
    failureIcon[1].style.opacity=1;
    
  }else if(regexUserEmail.test(id.value)){
    errMsg[1].innerHTML = "";
    successIcon[1].style.opacity = "1";
    failureIcon[1].style.opacity = "0";
    

  }else{
    errMsg[1].innerHTML="invalid Email"
    failureIcon[1].style.opacity="1"
    successIcon[1].style.opacity = "0";
    
  }
};
/*____________________________________________Password__________________________________________________________ */
let regexUsePassword=/^([a-zA-Z0-9]{6,14})$/
let enginePassword=(id)=>{
  if(id.value.trim()===""){
    errMsg[2].innerHTML="Password cannot be blank"
    failureIcon[2].style.opacity="1";
    successIcon[2].style.opacity="0"
    
  }else if(regexUsePassword.test(id.value)){
    errMsg[2].innerHTML=""
    failureIcon[2].style.opacity="0"
    successIcon[2].style.opacity="1"
    

  }else{
    errMsg[2].innerHTML="Password should be between 6-14"
    failureIcon[2].style.opacity="1"
    successIcon[2].style.opacity="0"
  
  }
}
let regexUsecPassword=/^([a-zA-Z0-9]{6,14})$/;
let enginecPassword=(id)=>{
  if(id.value.trim()===""){
    errMsg[3].innerHTML=" Confirm password cannot be blank"
    failureIcon[3].style.opacity="1";
    successIcon[3].style.opacity="0"
    
  }else if(regexUsecPassword.test(id.value)&& id.value===password.value){

    errMsg[3].innerHTML="😊❤️"
    failureIcon[3].style.opacity="0"
    successIcon[3].style.opacity="1"
   


  }else{
    errMsg[3].innerHTML="Password is not match"
    failureIcon[3].style.opacity="1"
    successIcon[3].style.opacity="0"
 

  } 

}
