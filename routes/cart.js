const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  createCart,
  updateCart,
  addProductToCart,
  decreaseCartProductQuantity,
  deleteCart,
  deleteProductFromCart,
  getCart
} = require("../cart");

// @route   POST /cartSlice
// @desc    Create cartSlice
// @access  Private
router.post("/", passport.authenticate("jwt", { session: false }), createCart);

// @route   PUT /cartSlice
// @desc    Update cartSlice when adding / deleting products in cartSlice
// @access  Private
router.put("/", passport.authenticate("jwt", { session: false }), updateCart);

// @route   PUT /cartSlice/:productId
// @desc    Add one product to cartSlice
// @access  Private
router.put(
  "/:productId",
  passport.authenticate("jwt", { session: false }),
  addProductToCart
);

// @route   DELETE /cartSlice
// @desc    Delete cartSlice (when the order is placed or customer logging out)
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  deleteCart
);

// @route   DELETE /cartSlice/:productId
// @desc    Delete one product from cartSlice
// @access  Private
router.delete(
  "/:productId",
  passport.authenticate("jwt", { session: false }),
  deleteProductFromCart
);

// @route   DELETE /cartSlice/product/:productId
// @desc    Delete one product from cartSlice
// @access  Private
router.delete(
  "/product/:productId",
  passport.authenticate("jwt", { session: false }),
  decreaseCartProductQuantity
);

// @route   GET /cartSlice
// @desc    Get cartSlice for customer
// @access  Private
router.get("/", passport.authenticate("jwt", { session: false }), getCart);

module.exports = router;
