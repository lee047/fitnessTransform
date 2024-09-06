// const express = require('express')
import express, { query } from 'express'
const app = express()
const port = 3000

import {readData} from './FetchData/ConnectMongo.js'

// var exerciseData = require('./data/exercise.json');
// var equipmentData = require('./data/EquipmentAllSubData.json');
// var bodypartsData = require('./data/bodyPartListSubParts.json');

import exerciseData from './data/exercise.json' assert { type: "json" };
import equipmentData from './data/EquipmentAllSubData.json' assert { type: "json" };
import bodypartsData from './data/bodyPartListSubParts.json' assert { type: "json" };

app.get('/exercise', async (req, res) => {
  const cursor = await readData('ExerciseDB','exercise',{});
  res.json(cursor);
})
app.get('/exercise/:exericseName', async (req, res) => {
  const query = {name : req.params}
  const cursor = await readData('ExerciseDB','ExerciseByName',query);
  res.json(cursor)
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