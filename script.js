//targeting the html

const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

// arrow function that generates random number betweem 1 and 10

const generateNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
};

//now I assign the value to the button

btn.addEventListener("click", generateNumber);

//this call win generate the number when refresing the page

//generateNumber()
