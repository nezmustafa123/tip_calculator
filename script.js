const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip"),
  total = document.querySelector(".total"),
  error = document.querySelector(".error");

const calculateTip = () => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate === "") {
    console.log("Please add a number");
  }
};
btn.addEventListener("click", calculateTip);
