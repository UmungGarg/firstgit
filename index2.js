var itoms = document.getElementsByClassName('list-group-item');
console.log(itoms);
itoms[2].style.backgroundColor= 'green';
for(var i=0; i<itoms.length; i++){
    itoms[i].style.fontWeight='bold';
}