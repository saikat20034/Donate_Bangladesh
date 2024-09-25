// Get references to DOM elements
const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');
const donationBtn1 = document.getElementById('donationBtn1');
const donationBtn2 = document.getElementById('donationBtn2');
const donationBtn3 = document.getElementById('donationBtn3');
const accountValue = document.getElementById('accountValue')
const donateValue = document.getElementById('donateValue');
const donateValue2 = document.getElementById('donateValue2');
const donateValue3 = document.getElementById('donateValue3');
const donationSection = document.getElementById('donationInput');
const donationSection2 = document.getElementById('donationInput2');
const donationSection3 = document.getElementById('donationInput3');
const historySection = document.getElementById('historySection');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalMessage = document.getElementById('modalMessage');
const balanceElement = document.querySelector('.font-bold.text-yellow-500');

console.log(accountValue);


function historyButton() {
  const donationBtn = document.getElementById('donationBtn');
  const historyBtn = document.getElementById('historyBtn');
  donationBtn.classList.remove('bg-[#B4F461]');
  historyBtn.classList.remove('bg-gray-200')
  historyBtn.classList.add('bg-[#B4F461]');
 }
function donationButton() {
  console.log('dontion');
  const donationBtn = document.getElementById('donationBtn');
  const historyBtn = document.getElementById('historyBtn');
  donationBtn.classList.remove('bg-[#B4F461]');
  donationBtn.classList.add('bg-[#B4F461]');
  historyBtn.classList.remove('bg-[#B4F461]');

}

historyBtn.addEventListener('click', function () {
  const mainContainer = document.getElementById('mainContainer');
  mainContainer.classList.add('hidden')

})

donationBtn.addEventListener('click', function () {
  const mainContainer = document.getElementById('mainContainer');
  mainContainer.classList.remove('hidden');
  historySection.classList.add('hidden')
});

function positiveCheaker(inputValue) {
  if (inputValue === 0 || inputValue < 0 || isNaN(inputValue) === true) {
    alert('invalid Number')
    return false
  }
  return true
}


function newDonation1(inputValue) {
  const newDiv = document.createElement('div');
   const now = new Date();
    const formattedDateTime = now.toString();
    // document.getElementById('currentDateTime').innerHTML = `Date : ${formattedDateTime}`;
  newDiv.innerHTML = `<div class=" md:w-[1140px] w-full border-2 mx-auto rounded-2xl bg-[#FFF] p-3"><h2 class="text-[#111] text-xl font-bold">${inputValue} Taka Donated for Flood Rlief-2024 in Noakhali,Bangladesh</h2><p class="text-[#111] text-base font-light">Date: ${formattedDateTime}</p></div>`;
  newDiv.classList.add('p-4', 'mt-4', 'rounded',);
  document.getElementById('historySection').appendChild(newDiv);
}
function newDonation2(inputValue) {
  const newDiv = document.createElement('div');
  const now = new Date();
  const formattedDateTime = now.toString();
  // document.getElementById('currentDateTime').innerHTML = `Date : ${formattedDateTime}`;
  newDiv.innerHTML = `<div class=" md:w-[1140px] w-full border-2 mx-auto rounded-2xl bg-[#FFF] p-3"><h2 class="text-[#111] text-xl font-bold">${inputValue}Taka Donated for Famine-2024 at Feni,Bangladesh</h2><p class="text-[#111] text-base font-light">Date: ${formattedDateTime}</p></div>`;
  newDiv.classList.add('p-4', 'mt-4', 'rounded',);
  document.getElementById('historySection').appendChild(newDiv);
}
function newDonation3(inputValue) {
  const newDiv = document.createElement('div');
  const now = new Date();
  const formattedDateTime = now.toString();
  // document.getElementById('currentDateTime').innerHTML = `Date : ${formattedDateTime}`;
  newDiv.innerHTML = `<div class=" md:w-[1140px] w-full border-2 mx-auto rounded-2xl bg-[#FFF] p-3"><h2 class="text-[#111] text-xl font-bold">${inputValue}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2><p class="text-[#111] text-base font-light">Date: ${formattedDateTime}</p></div>`;
  newDiv.classList.add('p-4', 'mt-4', 'rounded',);
  document.getElementById('historySection').appendChild(newDiv);
}


donationBtn1.addEventListener('click', () => {
  const donationSection = document.getElementById('donationInput');
  const donationValue = donationSection.value
  const donateValue = document.getElementById('donateValue');
  let previousValue = parseFloat(donateValue.textContent);
  const inputValue = parseFloat(donationValue);
  const ifPositive=   positiveCheaker(inputValue)
  if (ifPositive) {
     const newValue = previousValue + inputValue;
     donateValue.innerText = newValue;
     const accountBalance = parseFloat(accountValue.textContent) - inputValue;
     accountValue.innerText = accountBalance;
    console.log(accountBalance);
    newDonation1(inputValue);
     openModal();
  }
})

donationBtn2.addEventListener('click', () => {
  const donationSection2 = document.getElementById('donationInput2');
  const donationValue2 = donationSection2.value;
  const donateValue2 = document.getElementById('donateValue2');
  let previousValue = parseFloat(donateValue2.textContent);
  const inputValue = parseInt(donationValue2);
  const ifPositive = positiveCheaker(inputValue);
  if (ifPositive) {
     const newValue2 = previousValue + inputValue;
     donateValue2.innerText = newValue2;
     const accountBalance = parseFloat(accountValue.textContent) - inputValue;
     accountValue.innerText = accountBalance;
    console.log(accountBalance);
    newDonation2(inputValue);
     openModal();
  }

});

donationBtn3.addEventListener('click', () => {
  const donationSection3 = document.getElementById('donationInput3');
  const donationValue3 = donationSection3.value;
  const donateValue3 = document.getElementById('donateValue3');
  let previousValue = parseFloat(donateValue3.textContent);
  const inputValue = parseInt(donationValue3);
  const ifPositive = positiveCheaker(inputValue);
  if (ifPositive) {
     const newValue3 = previousValue + inputValue;
     donateValue3.innerText = newValue3;
     const accountBalance = parseFloat(accountValue.textContent) - inputValue;
     accountValue.innerText = accountBalance;
    console.log(accountBalance);
    newDonation3(inputValue);
     openModal();
  }

});

function openModal () {
 document.getElementById('modal').classList.remove('hidden');
 document.getElementById('modal').classList.add('flex');
}

 // Close the modal when "Close Confirmation" button is clicked
 document.getElementById('closeModal').addEventListener('click', function () {
   document.getElementById('modal').classList.add('hidden');
   document.getElementById('modal').classList.remove('flex');
 });

  //  history section
document.getElementById('historyBtn').addEventListener('click', function () {
  document.getElementById('historySection').classList.remove('hidden');
})

 document
   .getElementById('transaction-form')
   .addEventListener('submit', function (e) {
     e.preventDefault(); // Prevent form submission and page reload

     // Get form values
     const amount = document.getElementById('amount').value;
     const purpose = document.getElementById('purpose').value;
     const location = document.getElementById('location').value;
     const date = new Date().toString(); // Current date and time

     // Create a new transaction entry
     const transaction = document.createElement('div');
     transaction.classList.add('bg-gray-50', 'p-4', 'rounded-lg', 'shadow-sm');

     transaction.innerHTML = `
                <p class="text-lg font-semibold">${amount} Taka is Donated for ${purpose} at ${location}</p>
                <p class="text-sm text-gray-500">Date: ${date}</p>
            `;
     document.getElementById('transactions').appendChild(transaction);
     e.target.reset();
   });



   function toggleAccordion(index) {
      const content = document.getElementById(`content-${index}`);
      const arrow = document.getElementById(`arrow-${index}`);

      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        arrow.classList.add('rotate-180');
      } else {
        content.classList.add('hidden');
        arrow.classList.remove('rotate-180');
      }
    }


//----------------------------------------------------------------------------------------------------