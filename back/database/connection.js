const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = router;

let stock = [
  {
    productId: 1,
    productName: "Brandy Snap",
    productQuantity: 15,
    productPrice: 1.50,
    productDescription: "A mixture of golden syrup, flour, ginger, cream, sugar, butter and lemon juice.",
  },
  {
    productId: 2,
    productName: "Tiramisu",
    productQuantity: 35,
    productPrice: 3.65,
    productDescription: "Delicate lady finger cookies, espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and cocoa powder.",
  },
  {
    productId: 3,
    productName: "Chocolate Brownie",
    productQuantity: 18,
    productPrice: 2.80,
    productDescription: "Frosting, cream cheese, chocolate, cocoa powder, sugar.",
  },
  {
    productId: 4,
    productName: "Candy Floss",
    productQuantity: 20,
    productPrice: 3.25,
    productDescription: "A pinky sweet and tasty sugar.",
  },
  {
    productId: 5,
    productName: "Lemon Slushie",
    productQuantity: 30,
    productPrice: 1.95,
    productDescription: "A lemon flavored ice crystals",
  }
]

router.get("/", (req, res) => {
  res.send({ data: stock, message: "Stock Ok" });
});

router.post("/add", (req,res) => {
  console.log(request.body);
  });
  
router.put('/update', (req, res) => {
  res.send({ data: stock, message: "Stock Updated" })
});

router.delete('/delete', (req, res) => {
  res.send("Stock Item Deleted")
});