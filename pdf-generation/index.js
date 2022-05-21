const htmlTo = require('htmlto')

const options = {
  pathTohtml:'./resume.html',
  pathTopdf:'./resume.pdf',
  //width: 2480, height: 3508,
  //paperSize: {
  //  format: 'A4',
  //  orientation: 'portrait',
  //  margin: '1.5cm',
  //},
}

htmlTo.pdf(options, (err, res) => {
  if (err) throw err

  console.log(res)
})
