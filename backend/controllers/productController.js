const getAllProducts = (req, res) => {
    // logic to get all products from the database
    res.send("All products");
};

const getAllProductById = (req, res) => {
    // logic to get a product by its ID from the database
    const productId = req.params.id;
    res.send(`Product with ID: ${productId}`);
};

module.exports = { getAllProducts, getAllProductById };
