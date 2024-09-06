const express = require('express')
const app = express()
const port = 3000

var exerciseData = require('./data/exercise.json');
var equipmentData = require('./data/EquipmentAllSubData.json');
var bodypartsData = require('./data/bodyPartListSubParts.json');

app.get('/exercise', (req, res) => {
  res.json(exerciseData);
})

app.get('/equipment', (req, res) => {
  res.json(equipmentData);
})

app.get('/bodyparts', (req, res) => {
  res.json(bodypartsData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})