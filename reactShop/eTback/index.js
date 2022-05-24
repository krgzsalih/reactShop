const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
var cors = require('cors')

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '1234',
    database: 'reactbusiness'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors('*'));


  connection.query("SELECT * FROM itemler;", (err, results, fields) => {
    if(err) throw err;
    console.log(results);
  });
  connection.query("SELECT * FROM specifications;", (err, results, fields) => {
    if(err) throw err;
    console.log(results);
  });
  connection.query("SELECT * FROM graphic;", (err, results, fields) => {
    if(err) throw err;
    console.log(results);
  });

  app.get('/arabalar', (req, res) => {
    connection.query("SELECT * FROM itemler;", (err, results, fields) => {
      if(err) throw err;
      
      res.send(results);
    });
  });
  
  app.get('/carSpec', (req, res) => {
    connection.query("SELECT * FROM specifications;", (err, results, fields) => {
      if(err) throw err;
      
      res.send(results);
    });
  });  
  
  app.get('/carPower', (req, res) => {
    connection.query("SELECT * FROM graphic;", (err, results, fields) => {
      if(err) throw err;
      
      res.send(results);
    });
  });  

  app.listen(3003);
  
  /*var dizi1=[];
      var dizi2=[];
      for(var i = 0; i < results.length; i++){
        
        dizi1.push(results[i].cars);
        dizi2.push(results[i].houses);
        console.log(dizi1, dizi2);  
      }
      res.send(" dizi1 : " + dizi1 + " " + " dizi2 : " + dizi2);*/