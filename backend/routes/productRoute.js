const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  getAdminProducts,
} = require("../controllers/productController");
const {
  createProductReview,
  getProductReviews,
  deletetReviews,
} = require("../controllers/userController");

const router = express.Router();
const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");

router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getAdminProducts);

router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);

router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct);

router
  .route("/admin/products/:id")
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct);

router.route("/products/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(isAuthenticatedUser, getProductReviews)
  .delete(isAuthenticatedUser, deletetReviews);

module.exports = router;
