


document.getElementById('loginForm').addEventListener('submit', function(e) {
    
    e.preventDefault();

   
    const emailId = document.getElementById('email').value;
    const psw = document.getElementById('password').value;

    const formData = {
     
        email: emailId,
        password: psw
    };

    saveData(formData);
});

function saveData(formData) {
    let cond= false;

    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
      for(let i=0; i< storedFormData.length; i++){
        if(formData.email == storedFormData[i].email){
            storedFormData[i].password= formData.password;
        cond=true;
    break;
        }
      }
      if(cond == false){
        storedFormData.push(formData);
       
        
      }
   
    localStorage.setItem('formData', JSON.stringify(storedFormData));
}
// function myFunction() {
//         var x = document.getElementById("links");

// if (x.style.display === "block") {

//     x.style.display = "none";

//     } else {

//     x.style.display = "block";
//         }
//       }
// function myFunc(){
//     let drop= document.getElementById("dropc");
//     drop.classList.toggle("show");



// }
// window.onclick=function (event){
//     if(!event.target.matches(".drop-btn")){
//         let dropdown= document.getElementById("dropc");
//         for(let i=0; i<dropdown.length; i++){

//             let open=dropdown[i];
//             if(open.classList.contains("show")){
//                 open.classList.remove("show");
//             }
//         }
//     }
// };