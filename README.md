# holidaysRD

## Descripción

HolidaysRD es una biblioteca JavaScript que proporciona una colección de funciones para trabajar con días festivos en la República Dominicana.

## Características

- Recuperar una lista de todos los días festivos de un año determinado.
- Consultar si una fecha concreta es festiva.
- Obtener el próximo feriado a partir de una fecha determinada.
- Obtener los feriados de un mes determinado.
- Recupera una lista de los dias feriados de fines de semana largos
- Calcular el número de días hábiles entre dos fechas, excluyendo festivos.

## Instalación

Puede instalar HolidaysRD a través de npm:

```node
npm i holidaysrd
```

## Object holidayRD

Consta de propiedades como:

- **dayOfYear** dia del año representa la fecha.
- **day** dia de la semana
- **celebration** Nombre de la festividad
- **date** Fecha de la festividad
- **longWeekend** Representa si esta festidad toca en fin de semana largo
```js
type holidayRD = {
	dayOfYear: number,
	day: string,
	celebration: string,
	date: string,
	longWeekend: boolean
};
```


## Funciones Disponibles

**getHolidays(year: Date): holidayRD[]**

Obtiene todos los días feriados para el año dado.

```js
const holidays = getHolidays(new Date());
console.log(holidays);
```
**getHolidaysOfMonth(date: Date): holidayRD[]** 

Devuelve todos los días feriados para el mes del año proporcionado.

```js
const monthHolidays = getHolidaysOfMonth(new Date(2023, 0)); // Enero 2023
console.log(monthHolidays);
```

**isHoliday(date: Date): boolean**

Verifica si una fecha específica es un día feriado.

```js
const isHolidayFlag = isHoliday(new Date(2023, 0, 1)); // 1 de enero de 2023
console.log(isHolidayFlag ? 'Es feriado' : 'No es feriado');
```

**upcomingHolidays(date: Date): holidayRD[]**

Devuelve el Lista de los proximos días feriados para la fecha proporcionado

```js
const Holidays = upcomingHolidays(new Date(2023, 0, 1));
console.log(Holidays);
```

**nextHoliday(date: Date): holidayRD[]**

Devuelve el siguiente días feriados para la fecha proporcionado

```js
const Holidays = nextHoliday(new Date(2023, 0, 1));
console.log(Holidays);
```

**getLongWeekends(year: number): holidayRD[]**

Lista todos los fines de semana largos para el año proporcionado.

```js
const longWeekends = getLongWeekends(2023);
console.log(longWeekends);
```

**getLongWeekendsOfMonth(date: Date): holidayRD[]**

Lista de Fines de semana largo en el mes del año indicado.
```js
const monthLongWeekends = getLongWeekendsOfMonth(new Date(2023, 0)); // Enero 2023
console.log(monthLongWeekends);
```

**isLongWeekend(date: Date): boolean**

Verifica si una fecha específica es un día feriado de fin de semana largo.

```js
const isLongWeekend = isLongWeekend(new Date(2023, 0, 1)); // 1 de enero de 2023
console.log(isLongWeekend ? 'Es Fin de semana largo' : 'No es Fin de semana largo');
```

**upcomingLongWeekends(date: Date): holidayRD[]**

Obtiene los próximos fines de semana largos a partir de la fecha proporcionada.

```js
const upcomingWeekends = upcomingLongWeekends(new Date());
console.log(upcomingWeekends);
```

**nextLongWeekend(date: Date): holidayRD | undefined**

Devuelve el próximo fin de semana largo después de la fecha dada.

```js
const nextWeekend = nextLongWeekend(new Date());
console.log(nextWeekend);
```

**countBusinessDays(startDate: Date, endDate: Date): number**

Cuenta los días hábiles entre dos fechas.

```js
const businessDays = countBusinessDays(new Date(2023, 0, 1), new Date(2023, 0, 31));
console.log(`Días hábiles en enero: ${businessDays}`);
```