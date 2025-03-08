try {
  document.getElementById("btn").addEventListener("click", function () {
    let capital = parseFloat(document.getElementById("capital").value);
    let year = parseFloat(document.getElementById("year").value);
    let interestRate = parseFloat(
      document.getElementById("interestRate").value
    );
    console.log(capital, year, interestRate);

    if (
      isNaN(capital) ||
      isNaN(year) ||
      isNaN(interestRate) ||
      capital <= 0 ||
      year <= 0 ||
      interestRate <= 0
    ) {
      alert("Enter a valid number");
    }
    let resultValue = capital * Math.pow(1 + interestRate / 100, year);
    document.getElementById("result").textContent = resultValue.toFixed(2);
  });
} catch (error) {
  console.log(error.message);
}
