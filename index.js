// Get references to DOM elements
const donationBtn1 = document.getElementById('donationBtn1');
const donationBtn2 = document.getElementById('donationBtn2');
const donationBtn3 = document.getElementById('donationBtn3');
const accountValue = document.getElementById('accountValue')
const donateValue = document.getElementById('donateValue');
const donateValue2 = document.getElementById('donateValue2');
const donateValue3 = document.getElementById('donateValue3');
const historyBtn = document.getElementById('historyBtn');
const donationSection = document.getElementById('donationInput');
const donationSection2 = document.getElementById('donationInput2');
const donationSection3 = document.getElementById('donationInput3');
const historySection = document.getElementById('historySection');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const balanceElement = document.querySelector('.font-bold.text-yellow-500');

console.log(accountValue);

donationBtn1.addEventListener('click', () => {
  const donationSection = document.getElementById('donationInput');
  const donationValue = donationSection.value
  const donateValue = document.getElementById('donateValue');
  let previousValue = parseFloat(donateValue.textContent);
  const inputValue = parseInt(donationValue);
  const newValue = previousValue + inputValue
  donateValue.innerText = newValue
  const accountBalance = parseFloat(accountValue.textContent) - inputValue
  accountValue.innerText=accountBalance
  console.log(accountBalance);
})

donationBtn2.addEventListener('click', () => {
  const donationSection2 = document.getElementById('donationInput2');
  const donationValue2 = donationSection2.value;
  const donateValue2 = document.getElementById('donateValue2');
  let previousValue = parseFloat(donateValue2.textContent);
  const inputValue = parseInt(donationValue2);
  const newValue2 = previousValue + inputValue;
  donateValue2.innerText = newValue2;
  const accountBalance = parseFloat(accountValue.textContent) - inputValue;
  accountValue.innerText = accountBalance;
  console.log(accountBalance);
});

donationBtn3.addEventListener('click', () => {
  const donationSection3 = document.getElementById('donationInput3');
  const donationValue3 = donationSection3.value;
  const donateValue3 = document.getElementById('donateValue3');
  let previousValue = parseFloat(donateValue3.textContent);
  const inputValue = parseInt(donationValue3);
  const newValue3 = previousValue + inputValue;
  donateValue3.innerText = newValue3;
  const accountBalance = parseFloat(accountValue.textContent) - inputValue;
  accountValue.innerText = accountBalance;
  console.log(accountBalance);
});


//----------------------------------------------------------------------------------------------------

// // Account balance (for simplicity, let's start with 5500 BDT)
// let accountBalance = 5500;

// // Update the balance display
// balanceElement.textContent = `${accountBalance} BDT`;

// // Add event listeners for the Donation and History buttons
// // donationBtn.addEventListener('click', () => {
// //   donationSection.classList.remove('hidden');
// //   historySection.classList.add('hidden');

// //   donationBtn.classList.add('active-tab');
// //   historyBtn.classList.remove('active-tab');
// // });

// historyBtn.addEventListener('click', () => {
//   donationSection.classList.add('hidden');
//   historySection.classList.remove('hidden');

//   historyBtn.classList.add('active-tab');
//   donationBtn.classList.remove('active-tab');
// });

// // Function to handle donation logic
// function donate(
//   event,
//   donationAmountElement,
//   currentDonationElement,
//   donationTitle
// ) {
//   const donationAmount = parseFloat(donationAmountElement.value);

//   // Validate donation input
//   if (isNaN(donationAmount) || donationAmount <= 0) {
//     alert('Please enter a valid donation amount.');
//     return;
//   }

//   if (donationAmount > accountBalance) {
//     alert('Insufficient balance for this donation.');
//     return;
//   }

//   // Deduct donation amount from account balance
//   accountBalance -= donationAmount;
//   balanceElement.textContent = `${accountBalance} BDT`;

//   // Update the current donation amount
//   const currentDonationAmount =
//     parseFloat(currentDonationElement.textContent.split(' ')[0]) || 0;
//   currentDonationElement.textContent = `${
//     currentDonationAmount + donationAmount
//   } BDT`;

//   // Show success modal with donation title
//   modalMessage.textContent = `You have donated ${donationAmount} BDT for ${donationTitle}`;
//   modal.classList.remove('hidden');

//   // Add donation to history (optional)
//   const historyList = document.querySelector('#historySection ul');
//   const historyItem = document.createElement('li');
//   historyItem.textContent = `Donated ${donationAmount} BDT for ${donationTitle} on ${new Date().toLocaleString()}`;
//   historyList.appendChild(historyItem);
// }

// // Function to close the modal
// function closeModal() {
//   modal.classList.add('hidden');
// }

// // Attach event listeners to each donate button
// document.querySelectorAll('.donate-btn').forEach(button => {
//   button.addEventListener('click', e => {
//     const donationCard = e.target.closest('.donation-card');
//     const donationAmountElement = donationCard.querySelector(
//       'input[type="number"]'
//     );
//     const currentDonationElement =
//       donationCard.querySelector('.current-donation');
//     const donationTitle =
//       donationCard.querySelector('.donation-title').textContent;

//     donate(e, donationAmountElement, currentDonationElement, donationTitle);
//   });
// });
