const orderModel = require("../model/order.model");
const userModel = require("../model/user.model");

// User Controller Functions
const createUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({age: {$gte:req.query.age}}, { name: 1, email: 1, age: 1, hobbies: 1 }).sort({ age: -1 }).limit(10);
    // const users = await userModel.find({age: {$gt :req.query.age,$lt:req.query.age2}}, { name: 1, email: 1, age: 1, hobbies: 1 }).sort({ age: -1 }).limit(10);
    // const users = await userModel.find({hobbies: {$in: [req.query.hobby]}}, { name: 1, email: 1, age: 1, hobbies: 1 }).sort({ age: -1 }).limit(10);
    // const users = await userModel.find({name:{ $regex: req.query.name, $options: "i" }}, { name: 1, email: 1, age: 1, hobbies: 1 }).sort({ age: -1 }).limit(10);
    // const users = await userModel.find({"address.city": req.query.address}, { name: 1, email: 1, age: 1, hobbies: 1,address:1 }).sort({ age: -1 }).limit(10);
    // const users = await userModel
    //   .find(
    //     {
    //       "skills.level": { $regex: req.query.skillLevel },
    //       "skills.name": { $regex: req.query.skillName, $options: "i" },
    //     },
    //     { name: 1, email: 1, age: 1, hobbies: 1, address: 1 }
    //   )
    //   .sort({ age: -1 })
    //   .limit(10);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Order Controller Functions
const createOrder = async (req, res) => {
  try {
    const { orderId, orderDesc, orderValue, productsDesc, userId } = req.body;
    const order = await orderModel.create({
      orderId,
      orderDesc,
      orderValue,
      productsDesc,
      userId,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    // const orders = await orderModel.find({}, { orderId: 1, orderDesc: 1, orderValue: 1, productsDesc: 1, userId: 1 }).sort({ orderValue: 1}).limit(5);
    const orders = await orderModel
      .find(
        {},
        { orderId: 1, orderDesc: 1, orderValue: 1, productsDesc: 1, userId: 1 }
      )
      .sort({ orderValue: 1 })
      .limit(5);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrderByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrderbyOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { orderDesc, orderValue, productsDesc } = req.body;
    const order = await orderModel.findByIdAndUpdate(
      orderId,
      { orderDesc, orderValue, productsDesc },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrderByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await orderModel.find({ userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteOrderbyOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await orderModel.findByIdAndDelete(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  createOrder,
  getAllOrders,
  getOrderByOrderId,
  getOrderByUserId,
  updateOrderbyOrderId,
  deleteOrderbyOrderId,
};
