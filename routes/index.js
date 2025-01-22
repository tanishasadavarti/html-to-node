const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const contactController = require('../controllers/contactController');

// Existing routes
router.get('/', (req, res) => res.render('home'));
router.get('/about', (req, res) => res.render('about'));
router.get('/contact', contactController.getContactPage);
router.post('/contact', contactController.submitContactForm);
router.get('/products', productController.getProducts);

router.get('/products/add', (req, res) => res.render('add-product'));
router.post('/products/add', productController.addProduct);

// New routes for edit and delete
router.get('/products/edit/:id', productController.getEditProductForm); // Show edit form
router.post('/products/edit/:id', productController.updateProduct); // Handle edit form submission
router.post('/products/delete/:id', productController.deleteProduct); // Handle delete

module.exports = router;


module.exports = router;
