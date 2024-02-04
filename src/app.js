const express = require("express");
const bodyParser = require("body-parser");
const Db = require("./config/Db.js")
const routeUsers = require("./routes/RouterUser.js")
const app = express();
app.use(bodyParser.json());

const port = 4000;


//usamos la ruta de usuario que creamos
app.use(routeUsers);

app.listen(port,()=>{
     console.log(`backend escuchando en el puerto ${port}`)
})