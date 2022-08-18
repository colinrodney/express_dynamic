const express = require("express")
const hbs = require("hbs")
const path = require("path")

app = express()
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "/partials"))
app.set("views", path.join(__dirname,"/views"))

port = 3000;
app.listen(port, (err) =>{
    if(!err){
        console.log(`listening @ port ${port}`)
    }
})

app.get("/", (req,res) =>{
    res.render("index",{
        author: "Mr. Colin R Rodney"
    })
})

app.get("/about", (req,res) =>{
    res.render("about",{
        about_content: "This is Handlebars!"

    })
})

app.get("/register", (req,res)=>{
    res.render("register")
})

app.post("/registered", (req,res) =>{
    res.send("registration complete!")
})