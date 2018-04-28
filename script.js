const fs = require('fs')

fs.readFile('./floorplan.txt', (err, data) => {
  console.time('time')
  let floor = 0
  const instructions = data.toString().split('')
  const floorArray = []
  if (err) {
    console.log(err)
  } else {
    instructions.forEach(item => {
      if (item === '(') {
        floorArray.push(floor++)
      } else if (item === ')') {
        floorArray.push(floor--)
      }
    })
    console.log('floor: ', floor)
    floorArray.map((level, pos) => {
      if (level === -1) {
        return console.log('He got to the basement after: ' + pos + ' steps')
      }
    })
  }
  console.timeEnd('time')
})
