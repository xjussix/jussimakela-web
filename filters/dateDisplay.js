const { DateTime } = require("luxon");
/*
A date formatter filter for Nunjucks
*/
module.exports = function (date, part) {

  var d = (date === "now") ? new Date() : new Date(date),
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  if (part === 'year') {
    return d.getUTCFullYear();
  } else if (part === 'month') {
    return d.getUTCMonth();
  } else if (part === 'monthName') {
    return months[d.getUTCMonth()];
  } else if (part === 'monthNameAbbr') {
    return months[d.getMonth()].slice(0, 3);
  } else if (part === 'day') {
    return d.getUTCDate();
  } else if (part === 'timestamp') {
    return Date.parse(date);
  } else if (part === 'toISOString') {
    return new Date(date).toISOString();
  } else if (part === 'toHumanReadable') {
    return DateTime.fromJSDate(d).toFormat("dd LLL yyyy");
  } else {
    var day = d.getDate(),
      ordinal = nth(day);

    return `${day}<sup>${ordinal}</sup> of ${months[d.getMonth()]}, ${d.getUTCFullYear()}`;
  }

  function nth(d) {
    if (d > 3 && d < 21) return 'th';

    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
};