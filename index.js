const express = require('express');//brings express into the project
const app = express();//allows me to use app.
const menu = require('./menu');//where my data is
const expressHbs = require('express-handlebars');//brings handlebars into the project


//Did this because Chris said to, do not understand what it is
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Home Page
app.get('/', (req, res) => {//listening for a get request on the homepage, represented by /
    res.render('home', {//replaces the res.send, does not seem to work, do not know why, works now bc layout is filled out
        //the message I want to display on the home page where I put the variable message
        message: "Welcome to Krista's BBQ!"

    });
});

//About page
app.get('/about', (req, res) => {//listening for a get request (visitor) on the about page
    res.render('about', {//replaces the res.send, does not seem to work, do not know why, works now because layout is filled out
        //the message I want displayed on the about page where I put the variable message
        message: "Spicy jalapeno bacon ipsum dolor amet tail doner picanha leberkas turducken ribeye meatloaf burgdoggen fatback turkey shankle. Burgdoggen landjaeger pancetta, sausage fatback buffalo t-bone alcatra boudin bresaola flank leberkas pork belly. T-bone ground round kielbasa, drumstick beef ribs ham hock boudin picanha pork chop meatball tri-tip brisket. Jowl tri-tip pork chop strip steak, venison pork filet mignon chuck brisket bresaola."
    });
});

//Menu page, does not work
app.get('/menu-list', (req, res) => {//listening for a get request (visitor) on the menu page
    res.render('menu-list', {
        menu
    });
});

//Port I am running on, this does work, i think
app.listen(8888, () => {
    console.log('Your express app is running at http://localhost:8888');
});