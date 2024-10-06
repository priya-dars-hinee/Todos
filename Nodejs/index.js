const express = require('express');
const app = express();


const connnection=require('./server');





// app.use(express.urlencoded({extends:true}));
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine","ejs")
// Define routes and middleware here
// ...
app.use(require("./routes/routes"))
app.use(require("./routes/todo"))

const PORT =  8900;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
