// test.ts
const { expect, assert } = require("chai");
const { describe, it } = require("mocha");
import { listLongWeekends, countBusinessDays, upcomingLongWeekends, nextLongWeekend} from '../src/holidayRD';
const holidays2023 = [
{ "dayOfYear": 9, "celebration": "día de los Santos Reyes", "date": "01-09-2023", "day": "lunes", "longWeekend": true },
{ "dayOfYear": 30, "celebration": "día de Duarte", "date": "01-30-2023", "day": "lunes", "longWeekend": true },
{ "dayOfYear": 58, "celebration": "día de la Independencia", "date": "02-27-2023", "day": "lunes", "longWeekend": true },
{ "dayOfYear": 97, "celebration": "Viernes Santo", "date": "04-07-2023", "day": "viernes", "longWeekend": true },
{ "dayOfYear": 121, "celebration": "día del trabajo", "date": "05-01-2023", "day": "lunes", "longWeekend": true },
{ "dayOfYear": 310, "celebration": "día de la constitución", "date": "11-06-2023", "day": "lunes", "longWeekend": true },
{ "dayOfYear": 359, "celebration": "Navidad", "date": "12-25-2023", "day": "lunes", "longWeekend": true }]

describe('listLongWeekends', () => {
	it(`debería devolver la Lista de fines de semana Largos para el año 2023`, () => {
		const longWeekends = listLongWeekends(2023);
		expect(longWeekends.length).to.equal(holidays2023.length);
		
		longWeekends.forEach((objeto, index) => {
			const item = holidays2023[index]

			assert.strictEqual(typeof objeto.day, 'string');
			assert.strictEqual(typeof objeto.dayOfYear, 'number');
			assert.strictEqual(typeof objeto.celebration, 'string');
			assert.strictEqual(typeof objeto.date, 'string');
			assert.strictEqual(typeof objeto.longWeekend, 'boolean');

			assert.equal(objeto.day, item.day, `La propiedad day deberia tener el valor ${item.day}`);
			assert.equal(objeto.dayOfYear, item.dayOfYear, `La propiedad dayOfYear deberia tener el valor ${item.dayOfYear}`);
			assert.equal(objeto.celebration, item.celebration, `La propiedad celebration deberia tener el valor ${item.celebration}`);
			assert.equal(objeto.date, item.date, `La propiedad date deberia tener el valor ${item.date}`);
			assert.equal(objeto.longWeekend, item.longWeekend, `La propiedad longWeekend deberia tener el valor ${item.longWeekend}`);
		})
	});
});

describe('countBusinessDays', () => {
	it('Dias del 1 de enero al 31 de enero 2023', () => {
		const startDate = new Date('01-01-2023'); // Domingo
		const endDate = new Date('01-31-2023'); // Martes

		const businessDays = countBusinessDays(startDate, endDate);
		expect(businessDays).to.equal(20); // 31 días totales, menos 4 domingos, 4 sábados y 3 feriados
	});

	it('Dias del 31 de enero al 1 de enero 2023', () => {
		const startDate = new Date('01-31-2023');
		const endDate = new Date('01-01-2023');

		expect(()=> countBusinessDays(startDate, endDate)).to.throw(Error, "Las fechas proporcionadas son inválidas o la fecha de inicio es posterior a la fecha de fin.");
	});
})

describe('upcomingLongWeekends', () => {
	it('Siguientes Fines de semanas largos 01-31-2023', () => {
		const date = new Date('01-31-2023');
		const longWeekends = upcomingLongWeekends(date);
		const upcomingHolidays2023 = holidays2023.slice()
		upcomingHolidays2023.shift();
		upcomingHolidays2023.shift();

		expect(longWeekends.length).to.equal(upcomingHolidays2023.length);
		
		longWeekends.forEach((objeto, index) => {
			const item = upcomingHolidays2023[index]

			assert.strictEqual(typeof objeto.day, 'string');
			assert.strictEqual(typeof objeto.dayOfYear, 'number');
			assert.strictEqual(typeof objeto.celebration, 'string');
			assert.strictEqual(typeof objeto.date, 'string');
			assert.strictEqual(typeof objeto.longWeekend, 'boolean');

			assert.equal(objeto.day, item.day, `La propiedad day deberia tener el valor ${item.day}`);
			assert.equal(objeto.dayOfYear, item.dayOfYear, `La propiedad dayOfYear deberia tener el valor ${item.dayOfYear}`);
			assert.equal(objeto.celebration, item.celebration, `La propiedad celebration deberia tener el valor ${item.celebration}`);
			assert.equal(objeto.date, item.date, `La propiedad date deberia tener el valor ${item.date}`);
			assert.equal(objeto.longWeekend, item.longWeekend, `La propiedad longWeekend deberia tener el valor ${item.longWeekend}`);
		})
	})
})

describe('nextLongWeekend', () => {
	const listDate =['01-01-2023', '01-10-2023', '02-01-2023', '03-09-2023', '05-01-2023', '11-01-2023', '12-18-2023'];

	listDate.forEach((data, index) => {
		it(`Para la fecha ${data}`, () => {
			const date = new Date(data);
			const objeto = nextLongWeekend(date);
			const item = holidays2023[index]

			assert.strictEqual(typeof objeto?.day, 'string');
			assert.strictEqual(typeof objeto?.dayOfYear, 'number');
			assert.strictEqual(typeof objeto?.celebration, 'string');
			assert.strictEqual(typeof objeto?.date, 'string');
			assert.strictEqual(typeof objeto?.longWeekend, 'boolean');

			assert.equal(objeto?.day, item.day, `La propiedad day deberia tener el valor ${item.day}`);
			assert.equal(objeto?.dayOfYear, item.dayOfYear, `La propiedad dayOfYear deberia tener el valor ${item.dayOfYear}`);
			assert.equal(objeto?.celebration, item.celebration, `La propiedad celebration deberia tener el valor ${item.celebration}`);
			assert.equal(objeto?.date, item.date, `La propiedad date deberia tener el valor ${item.date}`);
			assert.equal(objeto?.longWeekend, item.longWeekend, `La propiedad longWeekend deberia tener el valor ${item.longWeekend}`);
		});
	});
})