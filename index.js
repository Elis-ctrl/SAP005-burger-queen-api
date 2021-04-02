require("dotenv").config()
const express = require("express")
const routes = require("./server/routes/index")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")


// app.use(cors());
app.use(express.json());
app.use("/", routes);

//error handling
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "production")
    res.status(500).json({ error: "internal server error" });
  else return next(err);
});

app.get("*", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
