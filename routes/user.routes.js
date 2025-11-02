const controller = require("../controller/user.controller");
const express = require("express");
const router = express.Router();

router.post("/create", controller.createUser);
router.get("/getAll", controller.getAllUsers);
router.get("/:id", controller.getUserById);

router.post("/order/create", controller.createOrder);
router.get("/order/getAll", controller.getAllOrders);
router.get("/order/user/:userId", controller.getOrderByUserId);
router.get("/order/:orderId", controller.getOrderByOrderId);
router.put("/order/:orderId", controller.updateOrderbyOrderId);
router.delete("/order/:orderId", controller.deleteOrderbyOrderId);

module.exports = router;