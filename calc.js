(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Calculadora = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function toNumber(n) {
    const x = Number(n);
    if (Number.isNaN(x)) throw new Error('Entrada inválida: não é um número');
    return x;
  }

  function somar(a, b) {
    return toNumber(a) + toNumber(b);
  }

  function subtrair(a, b) {
    return toNumber(a) - toNumber(b);
  }

  function multiplicar(a, b) {
    return toNumber(a) * toNumber(b);
  }

  function dividir(a, b) {
    const x = toNumber(a);
    const y = toNumber(b);
    if (y === 0) throw new Error('Divisão por zero');
    return x / y;
  }

  return { somar, subtrair, multiplicar, dividir };
}));
