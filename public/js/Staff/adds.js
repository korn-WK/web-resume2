// const modalContainer = document.querySelector('.modal-container');

// function showModal() {
//   modalContainer.classList.add('active');
// }

// function hideModal() {
//   modalContainer.classList.remove('active');
// }

const imageInput = document.querySelector('#image-input');
const imagePreview = document.querySelector('#image-preview');

imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];


  const reader = new FileReader();
  reader.onload = (event) => {
    imagePreview.src = event.target.result;
  };
  reader.readAsDataURL(file);

});

const imageUploadForm = document.getElementById('addmyimg');


imageUploadForm.addEventListener('submit', async (event) => {
  const cetagory = document.querySelector("#addnewcategory").value
  const newasset = document.querySelector("#newasset").value
  event.preventDefault(); // Prevent default form submission
  const formData = new FormData(imageUploadForm);

  const respones = await fetch('/upload/add', {
    method: 'POST',
    body: formData
  })
  let data = await respones.json()
  
  if (respones.ok) {
    // console.log(data.filename)
    let img = data.filename
    addnew(img,cetagory,newasset)
  } else {
    alert("NOT OK")
  }
  myModal1.hide()

});
async function addnew(img,cetagory,newasset){
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "name": newasset, "cetagory": cetagory ,"img":img})
}
try{
  const response = await fetch('/add/asset', options)
  const data = await response.json()
  if(response.ok){
    alert("New Asset Added")
  }
}catch(error){
  console.error(error)
}

}






