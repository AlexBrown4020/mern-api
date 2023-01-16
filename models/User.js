import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    photo:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
    creditCard:{
        type:String,
        default:''
    },
    securityNumber:{
        type:String,
        default:''
    }
}, {timestamps: true});

export default mongoose.model('User', UserSchema);