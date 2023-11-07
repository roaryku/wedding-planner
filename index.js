// let bestFriend = {
//     name: 'Olga',
//     age: 35,
//     job: 'Home stay mom',
//     leave: 'Vancouver WA',
//     from: 'Moldova',
//     kids: 3,
//     hobby: 'shopping',
//     interested: 'brends'
// }
// console.log(bestFriend.leave);


// DOM - Manipulation


// const containerElement = document.querySelector('.container');

// const heading = document.createElement('h2');
// heading.innerText = 'Carrie Bradshaw, 35 years old';
// heading.classList.add('header');

// const paragraph = document.createElement('p');
// paragraph.innerText = 'I love these shoes';
// paragraph.classList.add('text');

// const headingTwo = document.createElement('h2');
// headingTwo.innerText = 'John Smith, 32 years old';
// headingTwo.classList.add('header');

// const paraTwo = document.createElement('p');
// paraTwo.innerText = 'Nice sweater';
// paraTwo.classList.add('text');

// containerElement.appendChild(heading);
// containerElement.appendChild(paragraph);
// containerElement.appendChild(headingTwo);
// containerElement.appendChild(paraTwo);


// const listContainer = document.querySelector('.container');

// const listOne = document.createElement('li');
// listOne.innerText = 'Two';
// listOne.classList.add('list');

// const listTwo = document.createElement('li');
// listTwo.innerText = 'Three';
// listTwo.classList.add('list');

// const listThree = document.createElement('li');
// listThree.innerText = 'Four';
// listThree.classList.add('list');

// const listFour = document.createElement('li');
// listFour.innerText = 'Five';
// listFour.classList.add('list');

// listContainer.appendChild(listOne);
// listContainer.appendChild(listTwo);
// listContainer.appendChild(listThree);
// listContainer.appendChild(listFour);

// const button = document.querySelector('#submit');
// button.addEventListener('click', function() {
//     let user = prompt('What is your name?');
//     alert(`Welcome ${user}!`);
// })

// const button = document.querySelector('#submit');
// button.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'pink';
// })

// const header = document.querySelector('#heading');
// const btn = document.querySelector('#submit');

// btn.addEventListener('click', function (){
//     header.classList.add('changeColor');
// })

// const header = document.querySelector('#header');
// const submitButton = document.querySelector('.submitButton');

// submitButton.addEventListener('click', () => {
//     header.classList.toggle('changeColor')
// })

// const header = document.querySelector('#header');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     header.classList.toggle('changeColor');
// })

// document.addEventListener('keydown', (e) => {
//     if(e.key ==='a'){
//         document.body.style.backgroundColor = '#8785A2'
//     }
//     else if(e.key ==='r'){
//         document.body.style.backgroundColor = '#FFC7C7'
//     }
//     else if(e.key ==='o'){
//         document.body.style.backgroundColor = '#F38181'
//     }
//     else if(e.key ==='d'){
//         document.body.style.backgroundColor = '#F4EEFF'
//     }
//     else if(e.key ==='i'){
//         document.body.style.backgroundColor = '#EEE3CB'
//     }
//     else if(e.key ==='k'){
//         document.body.style.backgroundColor = '#BDD2B6'
//     }
//     else{
//         document.body.style.backgroundColor = '#AEBDCA'
//     }
// })

// const loveImage = document.querySelector('#love');

// loveImage.addEventListener('mouseover', () => {
//     //document.location.assign('https://www.love.com/') - the same page open
//     window.open('https://www.love.com/', '_blank')
// })

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//     window.open('https://my-portfolio-roar.netlify.app/', '_blank');
// })


// const inputField = document.querySelector('.inputField');
// const btn = document.querySelector('.btn');
// const toDoContainer = document.querySelector('.toDoContainer');

// inputField.addEventListener('keydown', (e) => {
//     if(e.keyCode === 13){
//         btn.click();
//     }
// })

// btn.addEventListener('click', () => {
//     const item = document.createElement('li');
//     item.innerText = inputField.value;
//     item.classList.add('toDoAdded');
//     toDoContainer.appendChild(item)
//     inputField.value = ' ';

//     item.addEventListener('click', () => {
//         item.classList.add('toDoComplited');
//     })

//     item.addEventListener('dblclick', () => {
//         toDoContainer.removeChild(item)
//     })
// })

const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');// to add append child

inputField.addEventListener('keydown', (e) => {
  if(e.keyCode === 13) {
    btn.click();
  }
})

btn.addEventListener('click', () => {
  const item = document.createElement('li');
  item.innerText = inputField.value;
  item.classList.add('toDoAdded');
  toDoContainer.appendChild(item);
  inputField.value = ' ';

  item.addEventListener('click', () => {
    item.classList.add('toDoComplited');
  })
  item.addEventListener('dblclick', () => {
    toDoContainer.removeChild(item);
  })
})


