// Minimal calculator.bundle.js example
// Build system: this file should be compiled as a separate chunk and placed at /js/calculator.bundle.js
export function init(container){
  if(!container) container = document.getElementById('calculator-placeholder');
  container.innerHTML = `
    <div class="calc-root">
      <h3>Deal Analyzer</h3>
      <label>Loan Amount <input type="number" id="calc-loan" value="1000000"></label>
      <label>Rate (%) <input type="number" id="calc-rate" value="5"></label>
      <button id="calc-run">Run</button>
      <div id="calc-result" aria-live="polite"></div>
    </div>
  `;
  container.querySelector('#calc-run').addEventListener('click', ()=>{
    const loan = Number(container.querySelector('#calc-loan').value) || 0;
    const rate = Number(container.querySelector('#calc-rate').value) || 0;
    const monthly = (loan * (rate/100))/12;
    container.querySelector('#calc-result').innerText = `Estimated monthly interest: $${monthly.toLocaleString(undefined,{maximumFractionDigits:0})}`;
  });
}
