// test.ts
const { assert } = require("chai");
const { describe, it } = require("mocha");
import { getHolidays, 	getHolidaysDoNotChange, 	getHolidaysChangeByYear } from '../src/holidayRD';


const holidays2023NotChange = [
  {
    dayOfYear: 1,
    celebration: 'Año Nuevo',
    date: '01-01-2023',
    day: 'domingo',
    longWeekend: false
  },
  {
    dayOfYear: 21,
    celebration: 'día de la Altagracia',
    date: '01-21-2023',
    day: 'sábado',
    longWeekend: false
  },
  {
    dayOfYear: 58,
    celebration: 'día de la Independencia',
    date: '02-27-2023',
    day: 'lunes',
    longWeekend: true
  },
  {
    dayOfYear: 228,
    celebration: 'día de la Restauración',
    date: '08-16-2023',
    day: 'miércoles',
    longWeekend: false
  },
  {
    dayOfYear: 267,
    celebration: 'día de las Mercedes',
    date: '09-24-2023',
    day: 'domingo',
    longWeekend: false
  },
  {
    dayOfYear: 359,
    celebration: 'Navidad',
    date: '12-25-2023',
    day: 'lunes',
    longWeekend: true
  },
  {
    dayOfYear: 97,
    celebration: 'Viernes Santo',
    date: '04-07-2023',
    day: 'viernes',
    longWeekend: true
  },
  {
    dayOfYear: 159,
    celebration: 'Corpus Christi',
    date: '06-08-2023',
    day: 'jueves',
    longWeekend: false
  }
]

const holidays2023Change =[
  {
    dayOfYear: 9,
    celebration: 'día de los Santos Reyes',
    date: '01-09-2023',
    day: 'lunes',
    longWeekend: true
  },
  {
    dayOfYear: 30,
    celebration: 'día de Duarte',
    date: '01-30-2023',
    day: 'lunes',
    longWeekend: true
  },
  {
    dayOfYear: 121,
    celebration: 'día del trabajo',
    date: '05-01-2023',
    day: 'lunes',
    longWeekend: true
  },
  {
    dayOfYear: 310,
    celebration: 'día de la constitución',
    date: '11-06-2023',
    day: 'lunes',
    longWeekend: true
  }
]

const holidays2023 = [...holidays2023NotChange, ...holidays2023Change].sort((a, b) => a.dayOfYear - b.dayOfYear)
let resultado: any[] = [];

const validHoliday = (index: number = 0) => {
	const objeto = resultado[index]
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
}

describe('getHolidays', () => {

	const date = new Date('01-01-2023');
	resultado = getHolidays(date);

	it('debería devolver un Array de 12 objetos', () => {
		assert(Array.isArray(resultado));
		//expect(resultado).to.be.an('array').not.empty
		assert.strictEqual(resultado.length, 12, 'Deberia ser un Array de longuitud 12');
	})

	it('debería devolver un objetos referente al 01-01-2023', () => {
		validHoliday(0)
	});

	it('debería devolver un objetos referente al 01-09-2023', () => {
		validHoliday(1)
	}); 
	
	it('debería devolver un objetos referente al 01-21-2023', () => {
		validHoliday(2)
	}); 
	
	it('debería devolver un objetos referente al 01-30-2023', () => {
		validHoliday(3)
	}); 
	
	it('debería devolver un objetos referente al 02-27-2023', () => {
		validHoliday(4)
	}); 
	
	it('debería devolver un objetos referente al 04-07-2023', () => {
		validHoliday(5)
	}); 
	
	it('debería devolver un objetos referente al 05-01-2023', () => {
		validHoliday(6)
	}); 
	
	it('debería devolver un objetos referente al 06-08-2023', () => {
		validHoliday(7)
	}); 
	
	it('debería devolver un objetos referente al 08-16-2023', () => {
		validHoliday(8)
	}); 
	
	it('debería devolver un objetos referente al 09-24-2023', () => {
		validHoliday(9)
	}); 
	
	it('debería devolver un objetos referente al 11-06-2023', () => {
		validHoliday(10)
	}); 
	
	it('debería devolver un objetos referente al 12-25-2023', () => {
		validHoliday(11)
	});


});

describe('getHolidaysDoNotChange', () => {
	const holidays = getHolidaysDoNotChange(2023)

	holidays.forEach((holiday, index) => {
		it(`debería devolver un objeto para la fecha ${holiday.date}`, () => {
			const item = holidays2023NotChange[index]

			assert.strictEqual(typeof holiday.day, 'string');
			assert.strictEqual(typeof holiday.dayOfYear, 'number');
			assert.strictEqual(typeof holiday.celebration, 'string');
			assert.strictEqual(typeof holiday.date, 'string');
			assert.strictEqual(typeof holiday.longWeekend, 'boolean');

			assert.equal(holiday.day, item.day, `La propiedad day deberia tener el valor ${item.day}`);
			assert.equal(holiday.dayOfYear, item.dayOfYear, `La propiedad dayOfYear deberia tener el valor ${item.dayOfYear}`);
			assert.equal(holiday.celebration, item.celebration, `La propiedad celebration deberia tener el valor ${item.celebration}`);
			assert.equal(holiday.date, item.date, `La propiedad date deberia tener el valor ${item.date}`);
			assert.equal(holiday.longWeekend, item.longWeekend, `La propiedad longWeekend deberia tener el valor ${item.longWeekend}`);
		})
	})

})

describe('getHolidaysChangeByYear', () => {
	const holidays = getHolidaysChangeByYear(2023)
	holidays.forEach((holiday, index) => {
		it(`debería devolver un objeto para la fecha ${holiday.date}`, () => {
			const item = holidays2023Change[index]

			assert.strictEqual(typeof holiday.day, 'string');
			assert.strictEqual(typeof holiday.dayOfYear, 'number');
			assert.strictEqual(typeof holiday.celebration, 'string');
			assert.strictEqual(typeof holiday.date, 'string');
			assert.strictEqual(typeof holiday.longWeekend, 'boolean');

			assert.equal(holiday.day, item.day, `La propiedad day deberia tener el valor ${item.day}`);
			assert.equal(holiday.dayOfYear, item.dayOfYear, `La propiedad dayOfYear deberia tener el valor ${item.dayOfYear}`);
			assert.equal(holiday.celebration, item.celebration, `La propiedad celebration deberia tener el valor ${item.celebration}`);
			assert.equal(holiday.date, item.date, `La propiedad date deberia tener el valor ${item.date}`);
			assert.equal(holiday.longWeekend, item.longWeekend, `La propiedad longWeekend deberia tener el valor ${item.longWeekend}`);
		})
	})
})
