const UserModel = require('../models/UserModel.js');

exports.getUsersWithIncomeAndCar = async (req, res) => {
  const users = await UserModel.find({
    income: { $lt: '5' },
    car: { $in: ['BMW', 'Mercedes-Benz'] },
  });
  res.send(users);
};

exports.getMaleUsersWithPhonePrice = async (req, res) => {
  const maleUsers = await UserModel.find({
    gender: 'Male',
    $expr: { $gt: [{ $toInt: "$phone_price" }, 10000] },
  });
  res.send(maleUsers);
};

exports.getUsersWithLastNameQuoteAndEmail = async (req, res) => {
  const quotes = await UserModel.find({
    last_name: { $regex: /^M/i },
    quote: { $regex: /.{15}/ },
    email: { $regex: /M$/i },
  });
  res.send(quotes);
};

exports.getUsersWithCarBrandAndNoDigitInEmail = async (req, res) => {
  const cars = await UserModel.find({
    car: { $in: ['BMW', 'Mercedes', 'Audi'] },
    email: { $not: /\d/ },
  });
  res.send(cars);
};

exports.getTopCitiesByUserCountAndAvgIncome = async (req, res) => {
  const cities = await UserModel.aggregate([
    {
      $group: {
        _id: '$city',
        count: { $sum: 1 },
        avg_income: { $avg: { $toDouble: "$income" } },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
  ]);
  res.send(cities);
};
