const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

// Route to get users with income lower than $5 USD and have a car of brand “BMW” or “Mercedes”
router.get('/users', UserController.getUsersWithIncomeAndCar);

// Route to get male users which have phone price greater than 10,000
router.get('/male-users', UserController.getMaleUsersWithPhonePrice);

// Route to get users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name
router.get('/quotes', UserController.getUsersWithLastNameQuoteAndEmail);

// Route to get users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit
router.get('/cars', UserController.getUsersWithCarBrandAndNoDigitInEmail);

// Route to get the data of top 10 cities which have the highest number of users and their average income
router.get('/cities', UserController.getTopCitiesByUserCountAndAvgIncome);

module.exports = router;


