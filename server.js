const express = require("express");
const app = express();
const port = 3000;
const weather = require("weather-js");

app.set("view engine", "ejs");
app.use(express.static('images'));

app.get("/", (req, res) => {
  weather.find(
    { search: "Davao City, PH", degreeType: "C" },
    function (err, result) {
      if (err) console.log(err);
      // console.log(result[0].forecast)
      console.log(result)
      const location = result[0].location.name
      const latitude = result[0].location.lat
      const longtitude = result[0].location.long
      const forecast = result[0].forecast

      res.render('index', {
        location: location,
        forecast: forecast,
        latitude : latitude,
        longtitude: longtitude
      })
      
    }
  );
});

app.get('/other', (req, res) =>{
  res.render('other')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
