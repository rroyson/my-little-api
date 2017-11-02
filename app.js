const express = require('express')
const app = express()
const { filter, find, compose } = require('ramda')

const typeFilter = type => item => item.type === type
const breedFilter = typeFilter('breed')
const catFilter = typeFilter('cat')

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

app.get('/', (req, res) => res.send('Welcome to the cat api'))

app.get('/breeds', (req, res) => res.send(filter(breedFilter, cats)))

app.get('/breeds/:id', (req, res) =>
  res.send(
    compose(find(breed => breed.id === req.params.id), filter(breedFilter))(
      cats
    )
  )
)

app.get('/cats', (req, res) => res.send(filter(catFilter, cats)))

app.get('/cats/:id', (req, res) =>
  res.send(
    compose(find(cat => cat.id === req.params.id), filter(catFilter))(cats)
  )
)

app.listen(port, () => console.log('API is up on port', port))
