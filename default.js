
const products = require("./constants/data");

const Product = require("./model/product-schema");

const DefaultData = async() => {
    try {
        await Product.insertMany(products);

        console.log("Data imported successfully");
    } catch (error) {
        console.log(`error by inserting default data` , error.message);
    }
}

module.exports = DefaultData