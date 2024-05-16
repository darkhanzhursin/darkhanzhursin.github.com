const express = require("express");
const productRouter = require("./routes/productRouter");

const app = express();

app.use(express.json());
app.use("/products", productRouter);

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

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
