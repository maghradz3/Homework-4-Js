const emptyBox = document.querySelector(".empty");
const increaseWidth = document.querySelector(".increase-width");
const decreaseWidth = document.querySelector(".decrease-width");
const nextTask = document.querySelector("#nextTask");
const back = document.querySelector(".back");

const errorMessage = document.querySelector(".error-message");
const nameInput = document.querySelector("#name");
const mailInput = document.querySelector("#mail");
const ageInput = document.querySelector("#age");
const forms = document.querySelector("#forms");
const confirmBtn = document.querySelector("#confirmBtn");
const clearBtn = document.querySelector(".clearBtn");

increaseWidth.addEventListener("click", function () {
  console.log("hello levan");
  emptyBox.classList.toggle("increase");
  if (emptyBox.classList.toggle("increase")) {
    console.log("aeee");
  }
});

decreaseWidth.addEventListener("click", function () {
  emptyBox.classList.toggle("decrease");
});

forms.addEventListener("submit", (e) => {
  event.preventDefault();
  const login = nameInput.value;
  const mail = mailInput.value;
  const age = ageInput.value;

  let messages = [];

  if (login === "" || login === null) {
    messages.push("Please fill your nickname");
    nameInput.classList.add("border");
  }

  if (mail === "" || mail === null) {
    messages.push("please fill your mail");
    mailInput.classList.add("border");
  }

  if (age === "" || age === null) {
    messages.push("please fill your age");
    ageInput.classList.add("border");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorMessage.innerHTML = messages.join(" and ");
  }
});

clearBtn.addEventListener("click", () => {
  errorMessage.innerHTML = "";
  nameInput.value = "";
  mailInput.value = "";
  ageInput.value = "";
});
