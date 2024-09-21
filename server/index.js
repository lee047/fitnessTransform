// const express = require('express')
import express, { query } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 3000
import {insertOneData, readData, readSpecificData} from './FetchData/ConnectMongo.js'

const corsOptions = {
  origin: "*",
  // origin: ''
  methods: 'GET,HEAD',
  optionSuccessStatus: 204,
};


app.use(cors(corsOptions));
// create application/json parser
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/exercise', async (req, res) => {
  const cursor = await readData('ExerciseDB','exercise',{});
  res.json(cursor);
})

app.get('/exercise/:exerciseid', async (req, res) => {
  const query = {Name : req.params.exerciseid}
  const cursor = await readData('ExerciseDB','ExerciseByID',query);
  console.log(query);
  console.log(cursor);  
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


app.get('/exercisenamedetails/:exericseName', async (req, res) => {
  const query = {Name : req.params.exericseName}
  const getExerciseName = await readData('ExerciseDB', 'bodyparts',{});
  const options = {projection: {Name: 1, Data: { id: 1, name: 1 } }}
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
    cursor = await readSpecificData('ExerciseDB','ExerciseByName',query,options);
  }else {
    cursor = {ErrorMessage: 'parameter is ' + req.params.exericseName+ ' not valid'}
  }

res.json(cursor)
})


app.get('/bodyparts', async (req, res) => {
  const getBodyparts = await readData('ExerciseDB','bodyparts',{});
  console.log('fetch call made for bodyParts');
  console.log(getBodyparts);
  res.json(getBodyparts[0].bodyPart);
})


app.get('/equipmentlist', async (req, res) => {
  const getEquipmentList = await readData('ExerciseDB','equipmentlist',{});
  res.json(getEquipmentList[0].equipmentlist);
})


app.get('/targetlist', async (req, res) => {
  const getTargetList = await readData('ExerciseDB','targetlist',{});
  res.json(getTargetList[0].targetlist);
})

app.get('/targetlist/:targetlistname', async (req, res) => {
  const query = {Name: req.params.targetlistname};
  const getTargetList = await readData('ExerciseDB','targetlist', query);
  console.log(getTargetList);
  res.json(getTargetList);
})


app.get('/bodypartsdetail/:bodypartsname', async (req, res) => {
  const query = {Name: req.params.bodypartsname};
  const options = {projection: {Name: 1, Data: { id: 1, name: 1 } }}
  const getTargetList = await readSpecificData('ExerciseDB','BodyPartListSubParts', query, options);
  console.log(getTargetList);
  res.json(getTargetList);
})
app.get('/equipmentlistdetail/:equipmentdetail', async (req, res) => {
  const query = {Name: req.params.equipmentdetail};
  const options = {projection: {Name: 1, Data: { id: 1, name: 1 } }}
  const getTargetList = await readSpecificData('ExerciseDB','EquipmentAllSubData', query, options);
  console.log(getTargetList);
  res.json(getTargetList);
})

app.get('/targetlistdetail/:targetdetail', async (req, res) => {
  const query = {Name: req.params.targetdetail};
  const options = {projection: {Name: 1, Data: { id: 1, name: 1 } }}
  const getTargetList = await readSpecificData('ExerciseDB','TargetAllSubData', query, options);
  console.log(getTargetList);
  res.json(getTargetList);
})

app.post('/subscribe', async (req, res) => {
  console.log('post Data')
  console.log(req.body.emailSubscribe.emailSubscribe)
  const query = {
    Email: req.body.emailSubscribe.emailSubscribe, 
    Created: new Date()};
  const postSubscribe = await insertOneData('ExerciseDB', 'Subscribe',query);
  
  setTimeout(() => {
    console.log('waiting.........')
    
    res.json({'post': 'success','PostSubmitted' : postSubscribe.acknowledged});
  }, 4000);
  
})


app.post('/contactus', async (req, res) => {
  console.log('post Data')
  const query = {
    Name: req.body.name, 
    Email: req.body.email, 
    Message: req.body.email, 
    Created: new Date()};
    
  console.log(query)
  // change css 

  const postContact = await insertOneData('ExerciseDB', 'ContactUs',query)
  const postAPIResponse = {'post': 'success', 'page': 'Contact Us', 'PostSubmitted' : postContact.acknowledged}
  setTimeout(() => {
    console.log('waiting.........')
    
    console.log(postContact.acknowledged);
    res.json(postAPIResponse);
    // res.json(postAPIResponse);
  }, 4000);
  console.log('wait ended');
  
})


app.get('/exercisenamedetails/:bodypartsname', async (req, res) => {
  const query = {Name: req.params.bodypartsname}
  console.log(req.params.bodypartsname)
  const options = {projection: {Data: { id: 1, name: 1, bodyPart:1 }}}
  const getExerciseName = await readSpecificData('ExerciseDB','ExerciseByName',query,options);
  console.log(getExerciseName)
  res.json(getExerciseName);
})

app.get('/bodyparts', (req, res) => {
  res.json(bodypartsData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})