import { parse } from 'csv-parse'
import fs from 'fs'

/**
 * The pipe will combine the read data and will output it to key/value format
 * 'on' Data will read the data and put it in the array
 */
let dataArr = []
fs.createReadStream('src/Misc/NodePackageManager/ReadCSVFile/example.csv')
  .pipe(
    parse({
      comment: '#',
      columns: true,
    })
  )
  .on('data', (data) => {
    dataArr.push(data)
  })
  .on('error', (err) => {
    console.log('error: ' + err)
  })
  .on('end', () => {
    console.log('Read Finished')

    dataArr = JSON.stringify(dataArr)
    console.log(`DataArr:  ${dataArr}`)
  })
