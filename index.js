// public folder should have all the css files
// express,mongoose,hbs need to be imported using npm command
// html files should be stored inside a template file where extension  of html file should be hbs
// this code is fully based on node.js ,mongodb,
// to view to stored details use "mongodb compass" to view the stored login details







const express = require("express")
const path = require("path")
const app = express()
const hbs=express("hbs")
const logcollection=express("/.mongodb")
const port = process.env.PORT || 3008



const tempelatePath = path.join(__dirname, '../templates')
const publicPath = path.join(__dirname, '../public')


app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicPath))

app.get("/",(req,res)=>{
    res.render("retailerlogin")
})


app.get("/signup",(req,res)=>{
    res.render("signup")
})
 //app.post(hbs file name which is accesed)

app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    }

    const checking = logcollection.findOne({ name: req.body.name })
    
   try{
    if (checking.name === req.body.name && checking.password===req.body.password) {
        res.send("user details already exists")
    }
    else{
        logcollection.data.save()
   }
}catch{
    res.send("wrong inputs")
   }

    res.status(201).render("home", {
        naming: req.body.name
    })
   
})


app.post('/corporatelogin', async (req, res) => {

    try {
        const check = await logcollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
    }
})

app.post('/individuallogin', async (req, res) => {

    try {
        const check = await logcollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
    }
})

app.post('/wholesalerlogin', async (req, res) => {

    try {
        const check = await logcollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
    }
})

app.post('/retailerlogin', async (req, res) => {

    try {
        const check = await logcollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
    }
})
app.post('/governmentlogin', async (req, res) => {

    try {
        const check = await logcollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
    }
})



app.listen(3008,()=>{
    console.log("port connected")
})