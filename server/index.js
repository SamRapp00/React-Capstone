
//supabase sql setup 

//check diagram
//nodemon start----<<---

//app.post example???


const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize')
require("dotenv").config()
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());



const PORT = 5555;
const { DATABASE_URI } = process.env;

const sequelize = new Sequelize(DATABASE_URI, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

// Define the Email model
const Email = sequelize.define('email', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: false,
    tableName: 'emails'  // Ensure this matches your table name
});

// Test the database connection and sync the model
sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
        return Email.sync();  // Ensure the table exists
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/signup', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if email already exists
        const existingEmail = await Email.findOne({ where: { email } });

        if (existingEmail) {
            return res.status(400).send('This email address has already been added.');
        }

        // Add new email to the database
        await Email.create({ email });
        res.status(200).send('Email address successfully added.');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing your request.');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));