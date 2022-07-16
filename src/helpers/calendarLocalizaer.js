import { dateFnsLocalizer } from 'react-big-calendar';
import { startOfWeek, getDay, parse, format } from 'date-fns';
import esES from 'date-fns/locale/es';

const locales = {
	es: esES,
};

export const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});
