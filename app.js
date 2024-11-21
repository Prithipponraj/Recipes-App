const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const recipeRoutes = require('./routes/recipeRoutes')
require('dotenv').config();

const app = express();

app.use(bodyparser.json());

app.get('/',(request, response) => {
  response.json({Message: 'Hello There 🙋‍♂️!!! '});
});

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('connected to the MongoDB');

    const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('server runs @ http://localhost:5000');
    
})
    
})

.catch((err)=>{
  console.log(err);
  
})

app.use('/api', recipeRoutes)


