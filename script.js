const fs = require('fs')

fs.readFile('./floorplan.txt', (err, data) => {
  console.time('time')
  let floor = 0
  const instructions = data.toString().split('')
  const floorArray = []
  const basement = []
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
    console.log('The instructions take Santa to floor:', floor)
    floorArray.map((level, pos) => {
      if (level === -1) {
        return basement.push(pos)
      }
    })
    console.log('He got to the basement after:', basement[0], 'steps')
  }
  console.timeEnd('time')
})
