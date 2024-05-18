// test.ts
const { expect } = require("chai");
const { describe, it } = require("mocha");
import { isHoliday } from '../src/holidayRD';

const holiday = [{ "dayOfYear": 1, "celebration": "Año Nuevo", "date": "01-01-2023", "day": "domingo", "longWeekend": false },
{ "dayOfYear": 9, "celebration": "día de los Santos Reyes", "date": "01-09-2023", "day": "lunes", "longWeekend": true },
{ "dayOfYear": 21, "celebration": "día de la Altagracia", "date": "01-21-2023", "day": "sábado", "longWeekend": false },
{ "dayOfYear": 30, "celebration": "día de Duarte", "date": "01-30-2023", "day": "lunes", "longWeekend": true },
{ "dayOfYear": 58, "celebration": "día de la Independencia", "date": "02-27-2023", "day": "lunes", "longWeekend": true },
{ "dayOfYear": 97, "celebration": "Viernes Santo", "date": "04-07-2023", "day": "viernes", "longWeekend": true },
{ "dayOfYear": 121, "celebration": "día del trabajo", "date": "05-01-2023", "day": "lunes", "longWeekend": true },
{ "dayOfYear": 159, "celebration": "Corpus Christi", "date": "06-08-2023", "day": "jueves", "longWeekend": false },
{ "dayOfYear": 228, "celebration": "día de la Restauración", "date": "08-16-2023", "day": "miércoles", "longWeekend": false },
{ "dayOfYear": 267, "celebration": "día de las Mercedes", "date": "09-24-2023", "day": "domingo", "longWeekend": false },
{ "dayOfYear": 310, "celebration": "día de la constitución", "date": "11-06-2023", "day": "lunes", "longWeekend": true },
{ "dayOfYear": 359, "celebration": "Navidad", "date": "12-25-2023", "day": "lunes", "longWeekend": true }]

describe('isHoliday', () => {
  holiday.forEach((A)=>{
    it(`debería devolver true para la fecha ${A.date} (${A.celebration})`, () => {
      const date = new Date(A.date);
      const result = isHoliday(date);
      expect(result).to.equal(true);
    });
  })

  it('debería devolver true para el 29 de marzo del 2024 (Viernes Santo)', () => {
    const date = new Date(2024, 2, 29);
    const result = isHoliday(date);
    expect(result).to.equal(true);
  });

  it('debería devolver true para el 30 de mayo del 2024 (Corpus Christi)', () => {
    const date = new Date(2024, 4, 30);
    const result = isHoliday(date);
    expect(result).to.equal(true);
  });

  it('debería devolver false para el 15 de Marzo del 2023 (dia no feriado)', () => {
    // Definir una fecha que no es un feriado
    const date = new Date('03-15-2023');
    const result = isHoliday(date);
    expect(result).to.equal(false);
  });
});