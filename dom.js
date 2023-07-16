var form=document.getElementById('addForm');
var ulList=document.getElementById('items');
var filter=document.getElementById('filter');
form.addEventListener('submit', addItem);
ulList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItem);

function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var descr=document.getElementById('description').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(descr));
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
function filterItem(e){
    var text=e.target.value.toLowerCase();
    var items=ulList.getElementsByTagName('li'); 
    Array.from(items).forEach(function(itom){
        var itemName=itom.firstChild.textContent;
        var itemDes=itom.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || itemDes.toLowerCase().indexOf(text) != -1){
            itom.style.display='block';
        }
        else{
            itom.style.display='none';
        }
    })

}