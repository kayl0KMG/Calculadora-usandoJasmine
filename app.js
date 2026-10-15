(function () {
  const $ = (sel) => document.querySelector(sel);
  const num1 = $('#num1');
  const num2 = $('#num2');
  const out = $('#resultado');

  function executar(fn) {
    try {
      const r = fn(num1.value, num2.value);
      out.textContent = String(r);
    } catch (e) {
      out.textContent = e.message;
    }
  }

  $('#btnSomar').addEventListener('click', () => executar(Calculadora.somar));
  $('#btnSubtrair').addEventListener('click', () => executar(Calculadora.subtrair));
  $('#btnMultiplicar').addEventListener('click', () => executar(Calculadora.multiplicar));
  $('#btnDividir').addEventListener('click', () => executar(Calculadora.dividir));
}());
