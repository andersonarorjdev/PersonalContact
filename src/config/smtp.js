require('dotenv').config();

console.log(process.env.USER, process.env.PASS);

module.exports = {
    host: "smtp.gmail.com",
    port: "587",
    user: process.env.NAME_USER,
    password: process.env.PASS
}