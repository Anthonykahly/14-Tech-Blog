const { User } = require("../models");

const userData = [
  {
    username: "Michael",
    password: "password123",
  },
  {
    username: "Zacharia",
    password: "pass1word623",
  },
  {
    username: "Steven",
    password: "password4425",
  },
  {
    username: "James",
    password: "password0834",
  },
  {
    username: "Patrick",
    password: "password4712",
  },
  {
    username: "Jimothy",
    password: "password1223",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
