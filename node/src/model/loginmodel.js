const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

const generalSchema = new mongoose.Schema({
    category: {
        type: String,
    },
    description: {
        type: String
    },
    metatitle: {
        type: String,
    },
    metadescription: {
        type: String
    },
    metakeywords: {
        type: String
    },
    parent: {
        type: String
    },
    filters: {
        type: String
    },
    store: {
        type: String
    },
    columns: {
        type: String
    },
    status: {
        type: String
    },
    sortorder: {
        type: Number
    },
    keywords: {
        type: String
    },
    images: {
        type: String
    }
})







// newSchema.methods.generateToken = async function () {
//     try {
//         const token = await jwt.sign({ _id: this._id.toString() }, "akshitakshitakshitakshitakshitakshitakshitakshit")
//         this.tokens = this.tokens.concat({ token: token })
//         await this.save();
//         return token;
//         console.log(token);
//     } catch (e) { res.send(e) }
// }


newSchema.pre("save", async function (next) {

    if (this.isModified("password")) {

        this.password = await bcrypt.hash(this.password, 10)
        this.cpassword = await bcrypt.hash(this.password, 10);
    }
    next();
})


const User = new mongoose.model("Registerdata", newSchema)
const General = new mongoose.model("General", generalSchema)

module.exports = { User: User, General: General }