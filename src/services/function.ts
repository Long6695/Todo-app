import moment from 'moment';

export function durationAsString(start?: string, end?: string) {
  if (!start || !end) {
    return;
  }
  const duration = moment.duration(moment(end).diff(moment(start)));

  //Get Days
  const days = Math.floor(duration.asDays());
  const daysFormatted = days ? `${days}d ` : '';

  //Get Hours
  const hours = duration.hours();
  const hoursFormatted = `${hours}h `;

  //Get Minutes
  const minutes = duration.minutes();
  const minutesFormatted = `${minutes}m`;

  return [daysFormatted, hoursFormatted, minutesFormatted].join('');
}
