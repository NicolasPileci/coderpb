let express = require('express')
let app = express()
const PORT = 8000
let path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("views", path.join(__dirname, "views", "pug"))                             
app.set("view engine", "pug")   

let productos = []

/* 

Con EJS

app.set("views", path.join(__dirname, "views", "ejs"))                             
app.set("view engine", "ejs")      

*/   

app.get("/", (req, res, next) => {
    res.render("formulario")                                
})  

app.post("/productos", (req, res, next) => {
    productos.push(req.body)
    res.redirect("/")      
})   

app.get("/productos", (req, res, next) => {    
    res.render("productos", {productos})                            
})   


/* 

CON EJS 

app.get("/", (req, res, next) => {
    res.render("index")                                
})  

app.post("/productos", (req, res, next) => {
    productos.push(req.body)
    res.redirect("/")      
})   

app.get("/productos", (req, res, next) => {    
    res.render("./partials/historial.ejs", {productos})                            
})    */

app.listen(PORT, () => {
    console.log("Corriendo servidor")
})

