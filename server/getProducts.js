
const products = require('../products.json');


const getProducts = (req, res) => {
    if (req.query.price) {
        const items = products.filter(val => {
            return val.price >= parseInt(req.query.price)});
            return res.status(200).send(items)
    }
    res.status(200).send(items)
}

module.exports = getProducts;