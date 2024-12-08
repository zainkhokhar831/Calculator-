document.getElementById("calculateBtn").
addEventListener("click", function ()
{
    
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = num1 + num2;
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter numbers!");
    return;
  }
  
    document.getElementById("result").textContent =  "The sum of " + num1 + " and " + num2 + " is " + sum;
    
});

// ASSIGMENT HEADING BUTTON //
document.getElementById("headingone").
addEventListener("click", function ()
{
  alert(`Sir neeche fill kare`);
  
});
document.getElementById("headingone2").
addEventListener("click", function ()
{
  alert(`Sir neeche fill kare`);
  
});
document.getElementById("headingone3").
addEventListener("click", function ()
{
  alert(`Sir neeche fill kare`);
  
});
// ASSIGMENT HEADING BUTTON END //
// first calculator End //


// second calculator start 

function calculateDiscount() {
  // Get user input values
  let userName = document.getElementById('name').value;
  let purchaseAmount = parseFloat(document.getElementById('amount').value);
  if (!userName || isNaN(purchaseAmount) || purchaseAmount <= 0) {
      document.getElementById('result2').innerText = 'Please enter a valid name and purchase amount.';
      return;
  }
  let discountAmount = (purchaseAmount * 10) / 100;
  let finalAmount = purchaseAmount - discountAmount;

  //  result //
  document.getElementById('result2').innerHTML = `
      <strong>Hello, ${userName}!</strong><br>
      Original Purchase Amount: PKR.${purchaseAmount.toFixed(2)} <br>
      Discount (10%): PKR.${discountAmount.toFixed(2)} <br>
      Final Amount to Pay: PKR.${finalAmount.toFixed(2)}
  `;
}

// second calculator end //


// Animal  start //

function showComment() {
  // Get user input
  const animalName = document.getElementById('animal').value.trim();
  // Check if input is valid
  if (!animalName) {
      document.getElementById('result3').innerText = 'Please enter your favorite animal!';
      return;
  }
  const formattedAnimalName = animalName.charAt(0).toUpperCase() + animalName.slice(1);
  const positiveComment = `Wow, ${formattedAnimalName}s are amazing creatures!`;
  // result
  document.getElementById('result3').innerText = positiveComment;
}

// animal end //


