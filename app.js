const express = require('express')
const app = express()
const { filter } = require('ramda')
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
  res.send('Welcome to the cat api')
})

app.get('/breeds', function(req, res) {
  // console.log('req', req)
  // console.log('res', res)
  const breeds = obj => obj.type === 'breed'

  res.send(filter(breeds, cats))
})

app.get('/breeds/:id', function(req, res) {
  const breeds = obj => obj.type === 'breed'
  const breedFilter = filter(breeds, cats)
  const breedID = req.params.id
  res.send('this works')
})

app.get('/cats', function(req, res) {
  const catFilter = obj => obj.type === 'cat'
  res.send(filter(catFilter, cats))
})

app.get('/cats/:id', function(req, res) {
  const catID = req.params.id
  res.send(catID)
})

app.listen(port, () => console.log('API is up on port', port))
