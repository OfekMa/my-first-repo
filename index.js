const express = requier('express');
const body_parser = requier('body-parser');

const app=express();

app.use(body_parser.urlencoded());
app.use(body_parser.json());

const actionsRoute = require('./action');
app.use('/api',actionsRoute);

const port = 5001;
app.listen(port,function(){
    console.log(`server is working via port ${port}`);
});