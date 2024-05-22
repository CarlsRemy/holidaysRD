export function formatDate(date: Date): string {
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Agregar 1 al mes ya que enero es el mes 0
	const day = String(date.getDate()).padStart(2, '0');
	const year = date.getFullYear();
	return `${month}-${day}-${year}`;
}

export function getDateOfDay(year: number, day: number): string {
	const fecha = new Date(year, 0); // Iniciar en enero del año
	fecha.setDate(day); // Establecer el día del año
	return formatDate(fecha);
}

/**
 * Retorn al nombre del dia del objeto de fecha
 * 
 * @param {Date} date - Objeto actual
 * @returns {string} - El nombre del objeto en espaniol
 */
export function getDayName(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error("Invalid date");
    }

    const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    return dayNames[date.getUTCDay()];
}

export function isDayLongWeekend(day: string): boolean {
	return ["lunes", "viernes"].includes(day)
}

export function getDayOfYear(date: Date): number {
	// Clone the date so as not to alter the original
	const clonedDate = new Date(date);
	const Date2 = new Date(clonedDate.getFullYear(), 0, 0).getTime()

	// Calculate the day of the year by adding 1 (January is month 0)
	const dayOfYear = Math.floor((clonedDate.getTime() - Date2) / 86400000);

	return dayOfYear;
}

export function addDays(date: Date, day: number = 0): Date {
	date.setTime((date.getTime() + (day * 86400000)));
	return date;
}

export function setDay(date: Date) {

	const day = date.getDay();

	if ((getDayOfYear(date) != 121) && (day <= 3)) {
		switch (day) {
			//Martes
			case 2: return addDays(date, -1);
			//Miercoles
			case 3: return addDays(date, -2);
			//Jueves
			case 4: return addDays(date, -3);
			//Viernes
			case 5: return addDays(date, -4);
			//Si es Lunes, Sabado, o Domingo
			default: return date;
		}
	}

	switch (day) {
		//Martes
		case 2: return addDays(date, 6);
		//Miercoles
		case 3: return addDays(date, 5);
		//Jueves
		case 4: return addDays(date, 4);
		//Viernes
		case 5: return addDays(date, 3);
		//Si es Lunes, Sabado, o Domingo
		default: return date;
	}
}

//Func to validate an instance of a Date class
export function isDate(date: Date) {
	if (Object.prototype.toString.call(date) !== "[object Date]")
		return false;
	return !isNaN(date.getTime());
}

//El Computus es el cálculo de la fecha de Pascua
//Source => http://es.wikipedia.org/wiki/Computus
export function Computus(year: number) {
	let M = 25;
	let N = 5;

	if (year >= 1583 && year <= 1699) { M = 22; N = 2; }
	else if (year >= 1700 && year <= 1799) { M = 23; N = 3; }
	else if (year >= 1800 && year <= 1899) { M = 23; N = 4; }
	else if (year >= 1900 && year <= 2099) { M = 24; N = 5; }
	else if (year >= 2100 && year <= 2199) { M = 24; N = 6; }
	else if (year >= 2200 && year <= 2299) { M = 25; N = 0; }

	let a, b, c, d, e, dia, mes;

	//Cálculo de residuos
	a = year % 19;
	b = year % 4;
	c = year % 7;
	d = (19 * a + M) % 30;
	e = (2 * b + 4 * c + 6 * d + N) % 7;

	// Decidir entre los 2 casos:
	if (d + e < 10) { dia = d + e + 22; mes = 3; }
	else { dia = d + e - 9; mes = 4; }

	// Excepciones especiales
	if (dia == 26 && mes == 4) dia = 19;
	if (dia == 25 && mes == 4 && d == 28 && e == 6 && a > 10) dia = 18;

	return new Date(year, --mes, dia);
}