const userModel = require("../models/userModel");

async function userSignUpController(req, res) {
    try {
        const { email, fullNames, cellPhone, source } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            throw new Error("Thank you, we already have you");
        }

        if (!email || !fullNames || !cellPhone || !source) {
            throw new Error("All fields are required");
        }

        const userData = new userModel({ email, fullNames, cellPhone, source });
        const saveUser = await userData.save();

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "Data sent successfully!"
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = userSignUpController;
