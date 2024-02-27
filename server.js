const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(cors());

app.get("/proxy", async (req, res) => {
  const question = req.query.question;
  const apiUrl = `https://hercai.onrender.com/v3/hercai?question=${encodeURIComponent(
    question
  )}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
