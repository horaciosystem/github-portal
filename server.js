const express = require("express")
const path = require("path")
const port = process.env.PORT || 8080
const app = express()

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, "build")))

app.get("/", (req, res) =>
  res.redirect(301, "https://github-portal-shawn.herokuapp.com/users")
)

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(port)
