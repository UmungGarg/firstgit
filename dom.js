var form=document.getElementById('addForm');
var ulList=document.getElementById('items');
form.addEventListener('submit', addItem);
ulList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var delet= document.createElement('button');
    delet.className='btn btn-danger btn-sm float-right delete';
    delet.appendChild(document.createTextNode('X'));
    li.appendChild(delet);
    ulList.appendChild(li);

    var edit= document.createElement('button');
    edit.className='btn btn-danger btn-sm float-right edit';
    edit.appendChild(document.createTextNode('E'));
    li.appendChild(edit);
    ulList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are sure?')){
            var li=e.target.parentElement;
            ulList.removeChild(li);
        }
    }
}