const db = require('../db')
const { Media } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const media = [
    {
      title: 'Selena',
      mood: 'Date Night',
      platform: 'Google Play',
      notes:
        'Alisa always wants to watch this, so make sure to put it on should you ever need to'
    },
    {
      title: 'Childs Play 3',
      mood: 'Spoopy',
      platform: 'Tubi',
      notes: 'Gotta watch with Geoff'
    }
  ]

  await Media.insertMany(media)
  console.log('Created Watchrlist!')
}
const run = async () => {
  await main()
  db.close()
}

run()
