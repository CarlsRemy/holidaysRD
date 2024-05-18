// @ts-check
import { formatDate, isDate, Computus, getDayName, isDayLongWeekend, getDayOfYear, getDateOfDay, addDays, setDay } from './utils/helper';
export type holidayRD = {
	dayOfYear: number,
	day: string,
	celebration: string,
	date: string,
	longWeekend: boolean
};
/**
 * @type {holidayRD[]} holidaysRD - Array de objetos con los feriados de la República Dominicana.
**/
let _holidaysRD: holidayRD[] = [];

function existHolidays(year: number): boolean {
	const getYear = (date: string): number => {
		return parseInt(date.substring(6, 10));
	}

	const Exist = _holidaysRD.some((A) => getYear(A.date) === year);
	return Exist;
}

const assignHolidays = (year: number):void =>{
	_holidaysRD.push(...getHolidaysDoNotChange(year));
	_holidaysRD.push(...getHolidaysChangeByYear(year));

	_holidaysRD.sort((a, b) => {
		return  a.dayOfYear - b.dayOfYear
	});
}

/**
 * @function getHolidaysDoNotChange
 * @param {number} year  Año para el cual se calcularán los feriados.
 * @returns {holidayRD[]} holidayRD Devuelve un array de objetos con los feriados que no cambian de fecha.
**/
export function getHolidaysDoNotChange(year: number): holidayRD[] {
	const _holidaysRD: holidayRD[] = [];

	let date2 = `01-01-${year}`;
	let day = getDayName(new Date(date2))
	_holidaysRD.push({ dayOfYear: 1, celebration: 'Año Nuevo', date: date2, day: day, longWeekend: isDayLongWeekend(day) });

	date2 = `01-21-${year}`;
	day = getDayName(new Date(date2))
	_holidaysRD.push({ dayOfYear: 21, celebration: 'día de la Altagracia', date: date2, day: day, longWeekend: isDayLongWeekend(day) });

	date2 = `02-27-${year}`;
	day = getDayName(new Date(date2))
	_holidaysRD.push({ dayOfYear: 58, celebration: 'día de la Independencia', date: date2, day: day, longWeekend: isDayLongWeekend(day) });

	date2 = `08-16-${year}`; 
	day = getDayName(new Date(date2))
	_holidaysRD.push({ dayOfYear: 228, celebration: 'día de la Restauración', date: date2, day: day, longWeekend: isDayLongWeekend(day) });

	date2 = `09-24-${year}`;
	day = getDayName(new Date(date2))
	_holidaysRD.push({ dayOfYear: 267, celebration: 'día de las Mercedes', date: date2, day: day, longWeekend: isDayLongWeekend(day) });

	date2 = `12-25-${year}`;
	day = getDayName(new Date(date2))
	_holidaysRD.push({ dayOfYear: 359, celebration: 'Navidad', date: date2, day: day, longWeekend: isDayLongWeekend(day) });

	//Días que se calculan por año.

	let date;
	//Viernes Santo
	const holidayRD = { dayOfYear: 0, celebration: '', date: '', day: '', longWeekend: false };
	date = addDays(Computus(year), -2)
	holidayRD.dayOfYear = getDayOfYear(date);
	holidayRD.celebration = "Viernes Santo"
	holidayRD.date = getDateOfDay(year, holidayRD.dayOfYear)
	holidayRD.day = getDayName(date)
	holidayRD.longWeekend = isDayLongWeekend(holidayRD.day);
	_holidaysRD.push(holidayRD);

	//Corpus Christi
	const Item2 = { dayOfYear: 0, celebration: '', date: '', day: '', longWeekend: false };
	date = addDays(Computus(year), 60)
	Item2.dayOfYear = getDayOfYear(date);
	Item2.celebration = "Corpus Christi"
	Item2.date = getDateOfDay(year, Item2.dayOfYear)
	Item2.day = getDayName(date)
	Item2.longWeekend = isDayLongWeekend(Item2.day);
	_holidaysRD.push(Item2);

	return _holidaysRD;
}

/**
 * @function getHolidaysChangeByYear
 * @param {number} year  Año para el cual se calcularán los feriados.
 * @returns {holidayRD[]} holidaysRD Devuelve un array de objetos con los feriados que cambian de fecha.
 **/
export function getHolidaysChangeByYear(year: number): holidayRD[]{
	const _holidaysRD: holidayRD[] = []; 

	let date;
	const holidayRD = { dayOfYear: 0, celebration: '', date: '', day: '', longWeekend: false };
	date = setDay(new Date(year, 0, 6))
	holidayRD.dayOfYear = getDayOfYear(date);
	holidayRD.celebration = "día de los Santos Reyes"
	holidayRD.date = getDateOfDay(year, holidayRD.dayOfYear)
	holidayRD.day = getDayName(date)
	holidayRD.longWeekend = isDayLongWeekend(holidayRD.day);
	_holidaysRD.push(holidayRD);

	const Item2 = { dayOfYear: 0, celebration: '', date: '', day: '', longWeekend: false };
	date = setDay(new Date(year, 0, 26))
	Item2.dayOfYear = getDayOfYear(date);
	Item2.celebration = "día de Duarte"
	Item2.date = getDateOfDay(year, Item2.dayOfYear)
	Item2.day = getDayName(date)
	Item2.longWeekend = isDayLongWeekend(Item2.day);
	_holidaysRD.push(Item2);

	const Item3 = { dayOfYear: 0, celebration: '', date: '', day: '', longWeekend: false };
	date = setDay(new Date(year, 4, 1))
	Item3.dayOfYear = getDayOfYear(date);
	Item3.celebration = "día del trabajo"
	Item3.date = getDateOfDay(year, Item3.dayOfYear)
	Item3.day = getDayName(date)
	Item3.longWeekend = isDayLongWeekend(Item3.day);
	_holidaysRD.push(Item3);

	const Item4 = { dayOfYear: 0, celebration: '', date: '', day: '', longWeekend: false };
	date = setDay(new Date(year, 10, 6))
	Item4.dayOfYear = getDayOfYear(date);
	Item4.celebration = "día de la constitución"
	Item4.date = getDateOfDay(year, Item4.dayOfYear)
	Item4.day = getDayName(date)
	Item4.longWeekend = isDayLongWeekend(Item4.day);
	_holidaysRD.push(Item4);
	return _holidaysRD;
}

/**
 * @function isHoliday
 * @param {Date} date  Fecha para validar si es feriado.
 * @returns {boolean} Devuelve true si la fecha es feriado, de lo contrario false.
*/
export function isHoliday(date: Date= new Date()): boolean {

	if (!isDate(date)) {
		throw new TypeError("Fecha proporcionada invalida. verifique  que contenga un formato de fecha valida")
	}

	const year: number = date.getFullYear();

	if (existHolidays(year) != true) {
		_holidaysRD = [];
		assignHolidays(year)
	}

	const date2 = formatDate(date);
	return _holidaysRD.some((A) => A.date === date2)
}

/**
 * @function getHolidays
 * @param {Date} date 
 * @returns {holidayRD[]} holidaysRD Devuelve un array de objetos con los feriados del año de la fecha proporcionada.
 */
export function getHolidays(date: Date= new Date()): holidayRD[] {
	if (!isDate(date)) {
		throw new TypeError('Fecha proporcionada invalida. verifique  que contenga un formato de fecha valida');
	}

	const year: number = date.getFullYear();

	if (existHolidays(year) != true) {
		_holidaysRD = [];
		assignHolidays(year)
	}

	return _holidaysRD
}

/**
 * @function getHolidaysOfMonth
 * @param date 
 * @returns {holidayRD[]} holidayRD Devuelve un array de objetos con los feriados del mes de la fecha proporcionada.
**/
export function getHolidaysOfMonth(date: Date= new Date()): holidayRD[] {
	if (!isDate(date)) {
		throw new TypeError("Fecha proporcionada invalida. verifique  que contenga un formato de fecha valida")
	}

	const year: number = date.getFullYear();
	const month: number = date.getMonth() + 1

	if (existHolidays(year) != true) {
		_holidaysRD = [];
		assignHolidays(year)
	}

	let getMonth = (date: string) => {
		return parseInt(date.substring(0, 2))
	}

	const holidaysRDOfMonth = _holidaysRD.filter((A) => {
		return getMonth(A.date) == month
	})

	return holidaysRDOfMonth
}

/**
 * @function nextHoliday
 * @param {number} date 
 * @returns {holidayRD} holidaysRD Proximo dia feriado para la fecha proporcionado.
 */
export function nextHoliday(date : Date = new Date()): holidayRD | undefined {
	if (!isDate(date)) {
		throw new TypeError("Fecha proporcionada invalida. verifique  que contenga un formato de fecha valida")
	}
	
	const year = date.getFullYear();
	if (!existHolidays(year)) {
		assignHolidays(year);
	}

	const Holidays = getHolidays(date);
	return Holidays.find(holiday => new Date(holiday.date) >= date);
}

/**
 * @function upcomingHolidays
 * @param {Date} date 
 * @returns {holidayRD[]} holidaysRD Lista de Siguientes dias feriados para el año proporcionado.
 */
export function upcomingHolidays(date : Date = new Date()): holidayRD[] {
 	if (!isDate(date)) {
		throw new TypeError("Fecha proporcionada invalida. verifique  que contenga un formato de fecha valida")
	}
  
	const year = date.getFullYear();
	if (!existHolidays(year)) {
		assignHolidays(year);
	}

  const Holidays = getHolidays(date);
  return Holidays.filter(holiday => new Date(holiday.date) >= date);
}

/**
 * @function getLongWeekends
 * @param {number} year 
 * @returns {holidayRD[]} holidayRD Lista de feriados de fines de semana largos para el año proporcionado.
 */
export function getLongWeekends(year: number): holidayRD[] {
	if (!existHolidays(year)) {
		assignHolidays(year);
	}
    
  return _holidaysRD.filter(holiday => holiday.longWeekend);
}

/**
 * @function getLongWeekendsOfMonth
 * @param date 
 * @returns {holidayRD[]} holidayRD Devuelve un array de objetos con los feriados de fines de semana largos del mes de la fecha proporcionada.
**/
export function getLongWeekendsOfMonth(date: Date = new Date()): holidayRD[] {
	if (!isDate(date)) {
		throw new TypeError("Fecha proporcionada invalida. verifique  que contenga un formato de fecha valida")
	}
	
	const year = date.getFullYear();
	if (!existHolidays(year)) {
		assignHolidays(year);
	}

	const month = date.getMonth() + 1;
	const longWeekends = getLongWeekends(year);
	return longWeekends.filter(holiday => parseInt(holiday.date.substring(0, 2)) === month);
}

/**
 * @function isLongWeekend
 * @param {Date} date  Fecha para validar si es feriado.
 * @returns {boolean} Devuelve true si la fecha es feriado de fin de semana largo, de lo contrario false.
*/
export function isLongWeekend(date: Date = new Date()): boolean {

	if (!isDate(date)) {
		throw new TypeError("Fecha proporcionada invalida. verifique  que contenga un formato de fecha valida")
	}

	const year: number = date.getFullYear();

	if (existHolidays(year) != true) {
		_holidaysRD = [];
		assignHolidays(year)
	}

	const date2 = formatDate(date);
	return _holidaysRD.some((A) => A.date === date2 && A.longWeekend)
}
/**
 * @function upcomingLongWeekends
 * @param {Date} date 
 * @returns {holidayRD[]} holidaysRD Lista de Siguientes fines de semana largos para el año proporcionado.
 */
export function upcomingLongWeekends(date : Date = new Date()): holidayRD[] {
 	if (!isDate(date)) {
		throw new TypeError("Fecha proporcionada invalida. verifique  que contenga un formato de fecha valida")
	}
  
	const year = date.getFullYear();
	if (!existHolidays(year)) {
		assignHolidays(year);
	}

  const longWeekends = getLongWeekends(year);
  return longWeekends.filter(holiday => new Date(holiday.date) >= date);
}

/**
 * @function nextLongWeekend
 * @param {Date} date 
 * @returns {holidayRD} holidaysRD Proximo fin de semana largos para la fecha proporcionado.
 */
export function nextLongWeekend(date : Date = new Date()): holidayRD | undefined {
	if (!isDate(date)) {
		throw new TypeError("Fecha proporcionada invalida. verifique  que contenga un formato de fecha valida")
	}
	
	const year = date.getFullYear();
	if (!existHolidays(year)) {
		assignHolidays(year);
	}

	const longWeekends = getLongWeekends(year);
	return longWeekends.find(holiday => new Date(holiday.date) >= date);
}

/**
 * @function countBusinessDays
 * @param {Date} startDate
 * @param {Date} endDate 
 * @returns {number} countholidaysRD Lista de fines de semana largos para el año proporcionado.
 */
export function countBusinessDays(startDate: Date = new Date(), endDate: Date = new Date()): number {
	if (!isDate(startDate) || !isDate(endDate) || startDate > endDate) {
		throw new Error("Las fechas proporcionadas son inválidas o la fecha de inicio es posterior a la fecha de fin.");
	}

	const dayMilliseconds = 24 * 60 * 60 * 1000;
	let businessDays = 0;
	let currentDate = new Date(startDate);

	while (currentDate <= endDate) {
		const dayOfWeek = currentDate.getDay();
		const formattedDate = formatDate(currentDate);
		
		// Verificar si es día de semana y no es feriado
		if (dayOfWeek !== 0 && dayOfWeek !== 6 && !_holidaysRD.some(holiday => holiday.date === formattedDate)) {
			businessDays++;
		}

		currentDate = new Date(currentDate.getTime() + dayMilliseconds);
	}

	return businessDays;
}
/**
 * @module holidayRD
 * @fileoverview Librería holidayRD - Proporciona funciones para calcular y validar días feriados en la República Dominicana.
 * @description Esta librería es ideal para aplicaciones que requieren agendar citas o eventos, y necesitan saber si un día es feriado o no.
 * 
 * @author Carlos I. Ynfante R. <https://github.com/CarlsRemy>
 * @license MIT
 * @copyright Carlos I. Ynfante R.
 * @version 0.0.1
*/
export const holidaysRD = { 
	getHolidays, 
	getHolidaysOfMonth, 
	isHoliday,
	nextHoliday,
	upcomingHolidays,
	getLongWeekends,
	getLongWeekendsOfMonth,
	isLongWeekend,
	upcomingLongWeekends, 
	nextLongWeekend, 
	countBusinessDays 
};