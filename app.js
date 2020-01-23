
const express = require('express');




const app = express();


app.use('/banks', require('./routes/Banks'))




app.listen(3000, () => console.log("Server started on port 3000"));