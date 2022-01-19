const expres = require('express');

const app = expres();

/* 
app.use((req, res, next) => {
    console.log('First Middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Second Middleware');
    res.send('<h1>Assignment solved (almost!)</h1>');
}); 
*/

app.use('/users',(req, res, next) => {
    console.log('The users step!');
    res.send('<h1>The users step!</h1>');
});

app.use('/',(req, res, next) => {
    console.log('Step 1 ran! (the one with the /)');
    res.send('<h1>This is step 1! (the one with the /)</h1>');
});

app.listen(3000);
