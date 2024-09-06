// const express = require('express')
import express, { query } from 'express'
const app = express()
const port = 3000

import {readData} from './FetchData/ConnectMongo.js'

app.get('/exercise', async (req, res) => {
  const cursor = await readData('ExerciseDB','exercise',{});
  res.json(cursor);
})
app.get('/exercisename/:exericseName', async (req, res) => {
    const query = {Name : req.params.exericseName}
    const getExerciseName = await readData('ExerciseDB', 'bodyparts',{});
    let cursor = []
    
    const Ismatched = getExerciseName[0].bodyPart.some((element) => {
      const paraName = element.toLowerCase();
      console.log(paraName + ' == ' + req.params.exericseName);
      
        if(paraName == req.params.exericseName){
          return true;
        }
        return false
    });

    if(Ismatched){
      cursor = await readData('ExerciseDB','ExerciseByName',query);
    }else {
      cursor = {ErrorMessage: 'parameter is ' + req.params.exericseName+ ' not valid'}
    }

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