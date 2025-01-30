// DateTimeFormat
// It formates the date into sensefull manner
// e.g.

const date = Date.now()
const format = Intl.DateTimeFormat("en").format(date)
console.log(format)
// Output
// 31/1/2025