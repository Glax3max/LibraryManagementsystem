import User from "../model/users.model.js";

export const createUser = async(req,res) => {
    try {
        const {userName,email,number,password} = req.body;
        const newUser = await User.create({
            userName,
            email,
            number,
            password
        })
        return res.status(200).json({message:"User created successfully"},newUser)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateUser = async(req,res) => {
    res.send("User updated")
}
