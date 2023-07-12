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

var items=document.querySelector('.list-group-item:nth-child(2)');
items.style.backgroundColor='green';
var items=document.querySelector('.list-group-item:nth-child(3)');
items.style.color='white';

var item=document.querySelectorAll('.list-group-item');
item[1].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
odd[i].style.backgroundColor='green';}