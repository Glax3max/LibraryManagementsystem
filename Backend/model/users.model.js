import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    number:{
        type:Number,
        required:true,
        validate: {
        validator: function(v) {
        return v.toString().length === 10;
        },
        message: props => `${props.value} is not a valid 10-digit number!`
        }
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema);
export default User;