const request = require("postman-request")
// &query=37.8267,-122.4233&units=f
// ! api sorgu url
const url =
  "http://api.weatherstack.com/current?access_key=6a062fa08038e848eb2f9ad4b2ce7c10"

request({ url: url, json: true }, (error, response) => {
  //   const data = JSON.parse(response.body)
  //   console.log(data.current) // * json : true yazmadığımız kısımda böyle gelir ve biz veriyi JSON formatına çeviririz.
  if (error) {
    console.log("Error var " + error.message)
  } else if (response.body.error) {
    console.log("Girilen konum bilgisi bulunamadı")
  } else {
    console.log("burak")
    console.log(
      "Hava Sıcaklığı : " +
        response.body.current.temperature +
        " Hissedilen  : " +
        response.body.current.feelslike
    )
  }
})

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Bursa.json?access_token=pk.eyJ1IjoiZGV2ZWxvcGVyYnVyYWtndWwiLCJhIjoiY2x0emlyNThqMDBmczJ1cGRnNmw4YTRoaiJ9.TKyh0iv0a_FSkhRakSeAyA"

request({ url: geocodeURL, json: true }, (error, response) => {
  const longitude = response.body.features[0].center[0]
  const latitude = response.body.features[0].center[1]

  console.log("Enlem : " + latitude + " Boylam : " + longitude)
})
