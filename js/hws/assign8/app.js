const express = require("express");
const booksRouter = require("./routes/booksRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/books", booksRouter);

app.use((error, req, res, next) => {
  if (error.message.startsWith("No product")) {
    res.status(404).json({ success: false, message: error.message });
  } else {
    next("dfdfdfd");
  }
});

app.use((error, req, res, next) => {
  res.status(500).json({ success: false, message: error.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
