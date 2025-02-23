var express = require("express");
var app = express();
var QRCode = require("qrcode");
const { dbConfig } = require("./Configuration/db.config");
const { MenuItem } = require("./Model/menu.model");
const bodyParser = require("body-parser");
// express to initialize the server

// middleware
app.use(bodyParser.json());

app.get("/api/qr/:tableId", async (req, res) => {
  const tableId = req.params.tableId;
  const tableURl = `http://localhost:5173/menu/${tableId}`;
  try {
    QRCode.toDataURL(tableURl, (err, url) => {
      if (err) {
        res.status(500).json({ Message: "Error Generating QR Code" });
      } else {
        res.json({ qrCodeUrl: url });
      }
    });
  } catch (err) {
    res.status(500).json({ Message: "Error Generating QR Code" });
  }
});

// add items in menu

app.post("/api/menu/create", (req, res) => {
  MenuItem.create(req.body)
    .then((response) => {
      res.status(201).json({ Message: "Menu Item Added Succesdfully!!" });
    })
    .catch((err) => {
      res.status(500).json({ Message: error });
    });
});

// api to get the menu Items

app.get("/api/menu/getDetails", (req, res) => {
  MenuItem.find()
    .then((response) => {
      res
        .status(201)
        .json({
          Message: "Menu Item fetched Succesdfully!!",
          menuItems: response,
        });
    })
    .catch((err) => {
      res.status(500).json({ Message: error });
    });
});

app.listen(5001, () => {
  dbConfig();
  console.log("Listening to port 5001");
});
