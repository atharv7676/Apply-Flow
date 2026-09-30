import mongoose, {Schema} from "mongoose"
import bcrypt from "bcryptjs"


const UserSchema = new Schema({
    name :{
        type : String,
        required : true,
        trim : true,
    },
    email :{
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        unique : true,
    },
    password :{
        type : String,
        required : true,
        trim : true,
    },
    role:{
        type:String,
        enum:["user", "admin"],
        default : "user",
    },
})


UserSchema.pre("save", async function(){
    if(!this.isModified("password")){
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
})

UserSchema.methods.comparePassword = async function (enteredPassword){
    return  await bcrypt.compare(
        enteredPassword,
        this.password
    )
};



const User = mongoose.model("User", UserSchema)

export default User