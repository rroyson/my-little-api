const express = require('express')
const app = express()
const port = 4000

const cats = [
  {
    id: 'tabby',
    type: 'breed',
    desc: 'tabbblees'
  },
  {
    id: 'siamese',
    type: 'breed',
    desc: 'crazy'
  },
  {
    id: 'maine coon',
    type: 'breed',
    desc: 'lol'
  },
  {
    id: 'minx',
    type: 'breed',
    desc: 'sexy'
  },
  {
    id: 'felix',
    type: 'cat',
    name: 'felix',
    breed: 'tabby',
    owner: 'John Jones',
    age: 10
  },
  {
    id: 'don',
    type: 'cat',
    name: 'don',
    breed: 'tabby',
    owner: 'Lucas Sams',
    age: 7
  },
  {
    id: 'fuzz',
    type: 'cat',
    name: 'fuzz',
    breed: 'maine coon',
    owner: 'kat bird',
    age: 4
  },
  {
    id: 'fat',
    type: 'cat',
    name: 'fat',
    breed: 'minx',
    owner: 'rob royson',
    age: 10
  }
]

app.get('/', function(req, res) {
  // console.log('req', req)
  // console.log('res', res)
  res.send('Welcome to the cat api')
})

app.get('/breeds', function(req, res) {
  // console.log('req', req)
  // console.log('res', res)
  res.send('/breeds works')
})

app.get('/breeds/:id', function(req, res) {
  const breedID = req.params.id
  res.send(breedID)
})

app.get('/cats', function(req, res) {
  res.send('/cats works')
})

app.get('/cats/:id', function(req, res) {
  const catID = req.params.id
  res.send(catID)
})

app.listen(port, () => console.log('API is up on port', port))
