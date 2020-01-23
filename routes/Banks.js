const express = require('express');
const router = express.Router();
const readXmlFile = require('../xmlParser.js');

async function getData() {
    const data = await readXmlFile();
    return data;
}
const data = getData();

const banks = [
    {Bank_Name: "פועלים",
     Branch_Code: 5},
     {Bank_Name: "leomi",
     Branch_Code: 1},
     {Bank_Name: "discont",
     Branch_Code: 4},
     {Bank_Name: "SBI State Bank of India",
     Branch_Code: 2},
     {Bank_Name: "poalim",
     Branch_Code: 7},

]

router.get('/', (req, res) => res.json(data));

// router.get('/:Branch_Code', (req, res) => {
//     res.json(banks.filter(bank => bank.Branch_Code === parseInt(req.params.Branch_Code) ))

// });

router.get('/:Bank_Name', (req, res) => {
    res.json(data.filter(bank => bank.Bank_Name === req.params.Bank_Name))

})

module.exports = router;