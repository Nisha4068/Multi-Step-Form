const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const backBtns = document.querySelectorAll('.back-btn');
const stepIndicators = document.querySelectorAll('.step');
const summary = document.getElementById('summary');

let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
    stepIndicators[i].classList.toggle('active', i === index);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      if (currentStep === 3) updateSummary(); // Show summary on step 4
      showStep(currentStep);
    }
  });
});

backBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

document.getElementById('multi-step-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});

function updateSummary() {
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const phone = document.querySelector('input[type="tel"]').value;
  const plan = document.querySelector('input[name="plan"]:checked')?.value || "None";
  const addons = [...document.querySelectorAll('input[name="addon"]:checked')].map(el => el.value);

  summary.innerHTML = `
    <strong>Name:</strong> ${name}<br/>
    <strong>Email:</strong> ${email}<br/>
    <strong>Phone:</strong> ${phone}<br/>
    <strong>Plan:</strong> ${plan}<br/>
    <strong>Add-ons:</strong> ${addons.length ? addons.join(', ') : 'None'}
  `;
}
