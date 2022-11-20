const express = require("express");
const User = require("../models/user");
const bcryptjs = require('bcryptjs');


const authRouter = express.Router();


authRouter.post('/api/signup', async (req, res) => {
    try {
        //get the data from client
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User with same email already exists!!' });
        }
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        //     Informational responses(100 – 199)
        //      Successful responses(200 – 299)
        //      Redirection messages(300 – 399)
        //      Client error responses(400 – 499)
        //      Server error responses(500 – 599)

        const hashedPassword = await bcryptjs.hash(password, 8);

        let user = new User({
            email,
            password: hashedPassword,
            name,
        })
        user = await user.save();
        res.json(user);
        // post that data in database
        //return that data to the user
    } catch (e) {
        res.status(500).json({ error: e.message });
    }


});




module.exports = authRouter;