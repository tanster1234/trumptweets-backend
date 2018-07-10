const express = require('express')
const bodyParser = require('body-parser')
const { postgraphile } = require("postgraphile");

const app = express()

console.log(process.env.PORT)
console.log(process.env.DATABASE_URL)


app.use(postgraphile(
  process.env.DATABSE_URL
  //'postgres://jqpncmcxrbbfdi:56fa430948144d9d5f1a72e1c289ab36c28734bd79e96365545ab612d6bbaa8a@ec2-54-83-33-213.compute-1.amazonaws.com:5432/d5qvf40aq70u8k?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',
  "public",
  {
    dynamicJson: true,
    disableDefaultMutations: true,
    graphiql: true,
    watchPg: true,
    enableCors: true,
  }
));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT, () => {
  console.log(`app listening on ${process.env.PORT}` )
});

