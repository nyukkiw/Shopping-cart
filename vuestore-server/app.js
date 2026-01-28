const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const PORT = process.env.PORT || 8000;

let corsOptions = {
    origin: "http://localhost:8081"
}
// enable cors
app.use(cors(corsOptions))
app.use(morgan('dev'));
app.use((req,res,next) => {
    req.timeRequest = Date.now()
    console.log(req.method, req.url);
    next()
})

const auth = ((req,res,next) => {
    const {password} = req.query;
    if(password === 'tahukrispy'){
        next();
    }
    res.send('perlu masukkan password')
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/img', express.static(path.join(__dirname, './public/img')));

const db = require('./app/models');
db.mongoose.connect(db.url)
.then((result)=> {
    console.log("database connected");
}).catch((err) => {
    console.log("cannot connect to the database!", err);
    process.exit();
});

app.get('/', auth, (req, res) => {
    res.send('hello world');
})

app.get('/halaman', (req, res) => {
    console.log(req.timeRequest)
    res.send('hello halaman')
})

app.use((req,res) => {
    res.status(404).send('not found');
})

require('./app/routes/product.route')(app);
require('./app/routes/order.route')(app);
require('./app/routes/user.route')(app);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

