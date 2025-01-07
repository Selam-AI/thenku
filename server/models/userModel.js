const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
    const JWT = require ('jsonwebtoken');

//models
const userSchema = new mongoose.Schema({
        username: {
        type: String,
        required:[true, 'Username is Required'],
},
     email: {
    type: String,
    required: [true, 'Email is Required'],
    unique:true,s
    },
    passsword: {
    type: String,
    required: [true, 'Passsword is required'],
    minlength:[6,'Passsword length should be 6 character long'],
    },
    customerID: {
    type: String,
    default:"",
    },
    subscription: {
    type: String,
    default:"",
},
});

//hashed password
userSchema.pre('save', async function (next) {
    //update
    if (!this.isModefied("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.passsword = await bcrypt.hash(this.passsword, salt);
    next();
});


//match password
userSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

//Sign Token
userSchema.methods.getSignedToken = function (res) {
    const accessToken = JWT.sign({ id: this.id }, process.env.JWT_ACCESS_SECRET, { expiresIn: JWT_ACCESS_EXPIREIN });
    const refreshToken = JWT.sign({ id: this.id }, process.env.JWT_REFRESH_TOKEN, { expiresIn: process.envJWT_REFRESH_EXPIREIN });
    res.cookie('refreshToken', `${refreshToken}`, { maxAge: 86400 * 7000, httpOnly: true });
};



const User = mongoose.model('User', userSchema);

module.exports = User;