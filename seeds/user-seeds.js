const { User } = require("../models");

const userData = [
  {
    username: "MarkLarrs",
    password: "password567",
  },
  {
    username: "Zyndi",
    password: "pass1word2",
  },
  {
    username: "Slixx",
    password: "password3333",
  },
  {
    username: "Jemii",
    password: "password444",
  },
  {
    username: "Parzo",
    password: "password5555",
  },
  {
    username: "Jimjam",
    password: "password6666",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
