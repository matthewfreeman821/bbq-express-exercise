const express = require('express');
const app = express();
const menu = require('./menu');
const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Home Page
app.get('/', (req, res) => {
    res.render('home', {
        message: "Welcome to Krista's BBQ!"

    });
});

//About page
app.get('/about', (req, res) => {
    res.render('about', {
        message: "Spicy jalapeno bacon ipsum dolor amet tail doner picanha leberkas turducken ribeye meatloaf burgdoggen fatback turkey shankle. Burgdoggen landjaeger pancetta, sausage fatback buffalo t-bone alcatra boudin bresaola flank leberkas pork belly. T-bone ground round kielbasa, drumstick beef ribs ham hock boudin picanha pork chop meatball tri-tip brisket. Jowl tri-tip pork chop strip steak, venison pork filet mignon chuck brisket bresaola."
    });
});

//Menu page
app.get('/menu', (req, res) => {
    res.render('menu', {
        menu
    });
});

app.listen(8888, () => {
    console.log('Your express app is running at http://localhost:8888');
});