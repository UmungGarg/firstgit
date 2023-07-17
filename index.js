//Please write code in javascript only
//console.log(document.getElementsByTagName('li'));
//const ul = document.querySelector('.items');
//ul.remove();
//ul.firstElementChild.innerHTML= '<h4 style="color:green">Hello</h4>' ;
//ul.children[1].innerHTML= '<h4 style="color:yellow">Hello2</h4>';
//const btn= document.querySelector('.btn');
//btn.addEventListener('click', (e) => {
  //  e.preventDefault();
    //document.querySelector('#my-form').style.background='blue';
//})
//btn.addEventListener('mouseover', (e) => {
  //  e.preventDefault();
    //document.querySelector('.items').lastElementChild.innerHTML='<h2>Hyylo</h2>';
//})
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    
    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    var delet= document.createElement('button');
    delet.className='btn btn-danger btn-sm float-right delete';
    delet.appendChild(document.createTextNode('Delete'));
    li.appendChild(delet);
    userList.appendChild(li);

    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('email',emailInput.value);
    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
userList.addEventListener('click',removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
            var li=e.target.parentElement;
            userList.removeChild(li);
    }
}