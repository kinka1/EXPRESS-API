const express = require('express');
const cors = require('cors');
const db = require('./app/models');
const app = express();

const corsoptions = {
    origin: '*'
};

app.use(cors(corsoptions));
app.use(express.json());

db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database!');
    }).catch(err => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });

require('./app/routes/baju.routes')(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}.");
});