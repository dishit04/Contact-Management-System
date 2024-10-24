const UserModel = require('../Models/User.model'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(503).send({ error: error.message });
    }
};

// Login
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).send({ token, message: 'Login successful' });
    } catch (error) {
        res.status(503).send({ error: error.message });
    }
};
