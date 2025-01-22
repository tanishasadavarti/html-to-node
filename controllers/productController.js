const Product = require('../models/product');

// Controller to add a product
exports.addProduct = async (req, res) => {
  const { name, price, description, imageUrl } = req.body;
  try {
    const product = new Product({ name, price, description, imageUrl });
    await product.save();
    res.redirect('/products');
  } catch (err) {
    res.status(500).send('Error adding product');
  }
};

// Controller to get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('products', { products });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Controller to get the edit product form
exports.getEditProductForm = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('edit-product', { product });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Controller to update a product
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, price, description, imageUrl } = req.body;
  try {
    await Product.findByIdAndUpdate(productId, { name, price, description, imageUrl });
    res.redirect('/products');
  } catch (err) {
    res.status(500).send('Error updating product');
  }
};

// Controller to delete a product
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    await Product.findByIdAndDelete(productId);
    res.redirect('/products');
  } catch (err) {
    res.status(500).send('Error deleting product');
  }
};
