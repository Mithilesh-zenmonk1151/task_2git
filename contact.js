document.getElementById('contact-us').addEventListener('submit', function(e) {
    e.preventDefault();

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const text_content = document.getElementById('text-area').value;
    console.log(name);
    console.log(email);
    console.log(text_content);

    const formData = {
     
        
        email: email,
        name: name,
        problem:text_content
    };

    saveFormData(formData);
});

function saveFormData(formData) {
    let cond= false;

    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
      for(let i=0; i< storedFormData.length; i++){
        if(formData.email == storedFormData[i].email ){
            storedFormData[i].name= formData.name;
            storedFormData[i].problem= formData.problem;
        cond=true;
    break;
        }
      }
      if(cond == false){
        storedFormData.push(formData);
       
        
      }
   
    localStorage.setItem('formData', JSON.stringify(storedFormData));

  
}