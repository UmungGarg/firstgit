//var itoms = document.getElementsByClassName('list-group-item');
//console.log(itoms);
//itoms[2].style.backgroundColor= 'green';
//for(var i=0; i<itoms.length; i++){
 //   itoms[i].style.fontWeight='bold';
//}
//var items= document.getElementsByClassName('list-group-item');
//console.log(items);
//items[2].style.backgroundColor= 'green';
//for(var i=0; i<items.length; i++){
  //     items[i].style.fontWeight='bold';}

    //   var itms= document.getElementsByTagName('li');
      // console.log(itms);
      // itms[2].style.backgroundColor= 'green';
      // for(var i=0; i<itms.length; i++){
       //       itms[i].style.fontWeight='bold';}

// var items=document.querySelector('.list-group-item:nth-child(2)');
// items.style.backgroundColor='green';
// var items=document.querySelector('.list-group-item:nth-child(3)');
// items.style.color='white';

// var item=document.querySelectorAll('.list-group-item');
// item[1].style.color='green';
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
// odd[i].style.backgroundColor='green';}

//var itemlist= document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// var itemlist= document.querySelector('#items');
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';

// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow';
// console.log(itemlist.firstChild);
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'hi';
// console.log(itemlist.lastChild);
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'hi';

// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling);
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';

var newdiv= document.createElement('div');
newdiv.className='helo';
newdiv.id='hilo';
newdiv.setAttribute('tit','hylo');
var newdivtext=document.createTextNode('HeLLo word');
newdiv.appendChild(newdivtext);
var cont =document.querySelector('header .container');
var h1= document.querySelector('header h1');
console.log(newdiv);
cont.insertBefore(newdiv,h1);

var newdiiv= document.createElement('div');
var newdiivtext=document.createTextNode('HeLLo word');
newdiiv.appendChild(newdiivtext);
var cont1 =document.querySelector('div .list-group');
var l1= document.querySelector('div .list-group-item');
console.log(newdiiv);
cont1.insertBefore(newdiiv,l1);
