require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;


mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', function (err) {
    console.log('Error: Gagal koneksi ke MongoDB');
}).on('open', function () {
    console.log('MongoDB telah terkoneksi')
})

//ROUTER
const userRouter = require('./src/routers/userRouter')
const adminRouter = require('./src/routers/adminRouter')

app.use(cookieParser())
app.use(cors({ exposedHeaders: "*" }));
app.use(bodyParser.json());

//Router
app.use('/api/', adminRouter);
app.use('/api/user', userRouter);


//NOT FOUND HANDLING
app.use((req, res) => {
        res.json({ success: false, error: '404 Page is not found' })
});






app.listen(port, () => {
        console.log(`App is running on port ${port}`);
});


