const numbers = document.querySelectorAll(".list-item");
const btn  = document.querySelector("button");
const rating = document.querySelector(".span__value");
const card = document.querySelector(".interacting-card");
const success = document.querySelector(".success-card");


let value;


numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        numbers.forEach((number)=> {
            number.classList.remove("list-color")
        })
      e.target.classList.toggle("list-color");
      value = e.target.textContent;
    });
  });

  btn.addEventListener("click", function(){ 
      console.log(value)
     rating.textContent = value;
     card.style.display = "none";
     success.style.display ="flex";
  })