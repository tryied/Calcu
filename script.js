const display = document.getElementById('display');
const modal = document.getElementById('calculatorModal');
const openBtn = document.getElementById('openCalcBtn');
const closeBtn = document.getElementById('closeCalcBtn');

openBtn.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => {
  if (e.target == modal) modal.style.display = 'none';
};

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const expression = display.value
      .replace(/sin
