// spec/calculadora.spec.js
let CalculadoraRef;
if (typeof require === 'function') {
  CalculadoraRef = require('../calc');
} else {
  CalculadoraRef = window.Calculadora;
}

describe('Calculadora', function () {
  describe('somar', function () {
    it('deve somar números inteiros', function () {
      expect(CalculadoraRef.somar(2, 3)).toBe(5);
      expect(CalculadoraRef.somar(-4, 10)).toBe(3);
    });

    it('deve somar números em string', function () {
      expect(CalculadoraRef.somar('2', '3')).toBe(5);
    });

    it('deve lançar erro se entrada não for número', function () {
      expect(() => CalculadoraRef.somar('a', 1)).toThrow();
    });
  });

  describe('subtrair', function () {
    it('deve subtrair corretamente', function () {
      expect(CalculadoraRef.subtrair(10, 3)).toBe(7);
    });
  });

  describe('multiplicar', function () {
    it('deve multiplicar corretamente', function () {
      expect(CalculadoraRef.multiplicar(4, 2.5)).toBe(10);
    });
  });

  describe('dividir', function () {
    it('deve dividir corretamente', function () {
      expect(CalculadoraRef.dividir(9, 3)).toBe(3);
    });

    it('deve lançar erro ao dividir por zero', function () {
      expect(() => CalculadoraRef.dividir(10, 0)).toThrow();
    });
  });
});