const db = require('../db')
const { Media } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const media = [
    {
      title: 'Selena',
      genre: ['biography', 'romance', 'music'],
      year: '1997',
      description: '',
      platform: '',
      img: '',
      mediamark: ''
    },
    {
      title: 'Childs Play 3',
      genre: ['horror'],
      year: '1991',
      description: '',
      platform: ['Tubi'],
      img: '',
      mediamark: ''
    }
  ]

  await Media.insertMany(media)
  console.log('Created Watchlist!')
}
const run = async () => {
  await main()
  db.close()
}

run()
