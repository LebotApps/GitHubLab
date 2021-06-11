// require packages for Express

const { name } = require('ejs');
const express = require('express');

const app = express();


//set port to a variable

const port = 3000;

//Exported drinks data 

const drinks = require('./models/drinks.js')

//
app.use(express.urlencoded({extended: false}));

//Get Index 

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the Gitpub App!</h1>`);
});
app.listen(3000);



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

  // NEW INDEX ROUTE

  app.get("/drinks:/id", (req, res) => { 
      
    res.render('index.ejs', {
        allDrinks:drinks
    });
    });

   // NEW SHOW ROUTE 

 app.get('/drinks/:indexOfDrinksArray', (req, res)=>{
     res.render('show.ejs');
 });

  // Show Page 
  // app.get('/drinks/:indexOfDrinksArray', (req, res) => {
  //   res.send('show.ejs', { 
  //       drinks: drinks[req.params.indexOfDrinksArray] 
  //   });
  // });    
 
// CREATE
// app.post('/drinks', (req, res) => {

// Drinks.create(req.body, (error, createdDrinks)=>{
//     res.redirect('/drinks');
// });
// });
