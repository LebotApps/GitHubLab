// require packages for Express

const { name } = require('ejs');
const express = require('express');

const app = express();


//set port to a variable

const port = 3000;

//Exported drinks data 

const drinks = require('./models/drinks.js');

//Get Index 

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the Gitpub App!</h1>`);
});

// Index Route
app.get('/drinks/', (req, res) => {
    res.render(
        'index.ejs',
        {
            allDrinks:drinks
        }
    );
  });

  // NEW
app.get("/drinks/new", (req, res) => {
  res.render('new.ejs');
});

   // NEW SHOW ROUTE 
   
  app.get('/drinks:indexOfDrinksArray', (req, res)=>{
    res.render('show.ejs', {
      drink: drinks[req.params.indexOfDrinksArray]
    });
  });

app.listen(3000, () =>{
  console.log('listening');
});

