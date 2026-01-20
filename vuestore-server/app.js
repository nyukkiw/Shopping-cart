const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

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

