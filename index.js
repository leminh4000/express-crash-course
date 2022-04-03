const express = require('express');
const app=express();

const courses=[
    {id:1, name: "math 0"}
    ,{id:2, name: "philosophy"}
    ,];

app.get('/', function(req, res){
    res.send('hello express2222');
});

app.get('/api/course', function(req, res){
    res.json([1,2,3,4,5,6,7,8,9,]);
});

app.get('/api/course/:id', function(req, res){
    const coursesGet = courses.find(c => c.id == req.params.id);
    if (!coursesGet) res.send(404);
    res.send(coursesGet);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listening on port ${port}`));