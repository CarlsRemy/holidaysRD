// test.ts
const { expect, assert } = require("chai");
const { describe, it } = require("mocha");
import { getHolidaysOfMonth} from '../src/holidayRD';


const existHolidayInMonth = (day = 31, month = 0, count = 1) => {
  for (let dia = 1; dia <= day; dia++) {
    const fecha = new Date(2023, month, dia);

    const resultado = getHolidaysOfMonth(fecha);

    // Verificamos que el resultado sea un array de objetos
    assert(Array.isArray(resultado));

    assert.strictEqual(resultado.length, count, `Deberia ser un Array de longuitud ${count}`);
    // Verificamos que cada objeto tenga las propiedades correctas
    resultado.forEach((objeto) => {
      assert.strictEqual(typeof objeto.day, 'string');
      assert.strictEqual(typeof objeto.dayOfYear, 'number');
      assert.strictEqual(typeof objeto.celebration, 'string');
      assert.strictEqual(typeof objeto.date, 'string');
      assert.strictEqual(typeof objeto.longWeekend, 'boolean');
    });
  }
}

const notExistHolidayInMonth = (day = 31, month = 0) => {
  for (let dia = 1; dia <= day; dia++) {
    const fecha = new Date(2023, month, dia);

    const resultado = getHolidaysOfMonth(fecha);
    // Verificamos que el resultado sea un array Empty
    expect(resultado).to.be.an('array').that.is.empty;
  }
}


describe('getHolidaysOfMonth', function () {
  it('debería devolver 4 objetos para cualquier día de Enero (2023)', function () {
    existHolidayInMonth(31, 0, 4)
  });

  it('debería devolver un objeto para cualquier día de Febrero (2023)', function () {
    existHolidayInMonth(28, 1)
  });

  it('No debería devolver ningun objeto para ningun día de Marzo (2023)', function () {
    notExistHolidayInMonth(31, 2)
  });

  it('debería devolver un objeto para cualquier día de Abril (2023)', function () {
    existHolidayInMonth(30, 3)
  });

  it('debería devolver un objeto para cualquier día de Mayo (2023)', function () {
    existHolidayInMonth(31, 4)
  });

  it('debería devolver un objeto para cualquier día de Junio (2023)', function () {
    existHolidayInMonth(30, 5)
  });

  it('No debería devolver ningun objeto para ningun día de Julio (2023)', function () {
    notExistHolidayInMonth(31, 6)
  });

  it('debería devolver un objeto para cualquier día de Agosto (2023)', function () {
    existHolidayInMonth(31, 7)
  });

  it('debería devolver un objeto para cualquier día de Septiembre (2023)', function () {
    existHolidayInMonth(30, 8)
  });

  it('No debería devolver ningun objeto para ningun día de Noviembre (2023)', function () {
    notExistHolidayInMonth(30, 9)
  });

  it('debería devolver un objeto para cualquier día de Noviembre (2023)', function () {
    existHolidayInMonth(30, 10)
  });

  it('debería devolver un objeto para cualquier día de Diciembre (2023)', function () {
    existHolidayInMonth(31, 11)
  });
});