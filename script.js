const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip"),
  total = document.querySelector(".total"),
  error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
};
const calculateTip = () => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate === "") {
    console.log("Please add a number");

    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    //if value of bill is not a number is going to apply
    error.innerHTML = "Please enter a valid number";
  } else {
    let tipAmt = bill * rate;
    tipAmt = Math.ceil(tipAmt);
    tip.innerHTML = `Tip: $ ${tipAmt}`;

    let totalBill = Number(bill) + tipAmt; //convert bill to number
    total.innerHTML = `Total Amount: $ ${totalBill}`;
  }
};
btn.addEventListener("click", calculateTip);
