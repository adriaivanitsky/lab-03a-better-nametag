// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
const buttonGreen = document.getElementById('button-green');
const buttonBlue = document.getElementById('button-blue');
const buttonYellow = document.getElementById('button-yellow');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  button.addEventListener('click', ()=>{
    let nameValue = nameInput.value;
    firstName.textContent = nameValue;
  } 
  );

  buttonGreen.addEventListener('click', ()=>{
    header.style.backgroundColor = "green";
    footer.style.backgroundColor = "green";
  
  }
  )

  buttonBlue.addEventListener('click', ()=>{
    header.style.backgroundColor = "blue";
    footer.style.backgroundColor = "blue";
  } )

  buttonYellow.addEventListener('click', ()=>{
    header.style.backgroundColor = "yellow";
    footer.style.backgroundColor = "yellow";
  })