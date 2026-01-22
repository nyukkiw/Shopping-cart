const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 8000;

let corsOptions = {
    origin: "http://localhost:8081"
}
// enable cors
app.use(cors(corsOptions))

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


app.get('/',(req, res) => {
    res.json({
        message:'welcome to vuestore server'
    });
});

require('./app/routes/product.route')(app);
require('./app/routes/order.route')(app);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

