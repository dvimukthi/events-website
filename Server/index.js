const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const registerRoute = require("./routes/register");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/register", registerRoute);

// start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
