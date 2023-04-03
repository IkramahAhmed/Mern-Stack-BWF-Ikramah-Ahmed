
// Query slector
// querySelector() methodcan only be used to access a single element or first item that matches the selector while querySelectorAll() method can be used to access all elements which match with a specified CSS selector

// differnce between classname and id in dom manipulation
//A Class name can be used by multiple HTML elements, while an ID name must only be used by one HTML element within the page


// const a=document.querySelectorall('.list-item');
// a.style.color='red';
// console.log(a);


// //creating Element

// const ul=document.querySelector('ul');
// const li=document.querySelector('li');

// //Adding li in ul
// ul.append(li);

// //modefying the text

// //innertext using for seeing inside the tags in text
// const b=document.querySelector('.list-item');
// console.log(a.innerText);//just show the text
// console.log(a.textContent);//show the text and format
// console.log(a.innerHtml);//show the text also with tags
// li.innerHTML="ikrmah"

// //modefying the attributes and classes

// //adding text in html attributes
// //two parameters. first add attributes .second the name of attributes jahan apko dalna he yeah
// li.innerHTML="ikramah"
// li.setAttribute('id','heading');
// li.removeAttribute('id');

// //get attributes from html
// const title =document.querySelector('#heading');
// console.log(title.getAttribute('id'));

//  //remove
//  li.remove();


///////DOM TREE
//PARENT NODE TRANSVERSAL
// let ul =document.querySelector('ul');
// console.log(ul.parentNode);
// console.log(ul.parentElement);

//child nodes transversal
//  let ul =document.querySelector('ul');
//  console.log(ul.childNodes);
//  console.log(ul.firstChild);
//  console.log(ul.lastChild);

// //  ul.childNodes[1].style.backgroundColor='blue';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


//Event listeners
//example2
// const buttonTwo =document.querySelector('.btn-2');

// function alert2(){
//     alert("i love kkk")
// };
// buttonTwo.addEventListener('click',alert2);

// //exmaple3
// // mouseover  listener
// const buttonThree =document.querySelector('.btn-3');

// function alert3(){
//     newBackgroundColor.style.backgroundColor='blue';
// }
// buttonThree.('mouseover',changeBgcolor);

// read more project
// const revealBtn= document.querySelector(".reveal-btn");
// const hiddenContent=document.querySelector(".hidden-content");

// function revealContent(){
 
//     //click krnay pr text show hojae warna or agar ab text he tou phr click krnay pr text gaib hojae
//     //agar reveal btn pay  hiddenContent ke class active he toh click krnay pr remove krdo agar nai he toh add krdo
//     if(hiddenContent.classList.contains('reveal-btn')){
//  hiddenContent.classList.remove('reveal-btn')
//  }
//  else(
//     hiddenContent.classList.add('reveal-btn')

//  )
// }
// revealBtn.addEventListener("click",revealContent);


