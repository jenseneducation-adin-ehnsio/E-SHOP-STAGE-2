export const updateTotalPrice = () => {
  fetch("/cart")
    .then(response => {
      return response.json();
    })
    .then(data => {
      totalPrice(data.data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

export const totalPrice = data => {
  let totalSum = 0;
  for (let i = 0; i < data.length; i++) {
    let sum = parseInt(data[i].price);
    totalSum += sum;
  }
  document.querySelector(".sum").innerHTML = "Sum: " + totalSum + " kr";
};
