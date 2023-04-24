const { General } = require('../model/loginmodel')
const express = require('express')
const router = new express.Router()
const app = express();
const { User } = require('../model/loginmodel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const multer = require('multer')
const sharp = require('sharp')
const path = require('path');
const { singularize } = require('i/lib/methods');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../images"))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: storage })


router.get('/', (req, res) => {
    res.send('hello from backend')
})


router.post('/general', upload.single('images'), async (req, res) => {

    console.log("test", req.file)
    // res.json({ message: "imag done yes" })

    const image = new General({
        images: req.file.originalname,
        category: req.body.category,
        description: req.body.description,
        metatitle: req.body.metatitle,
        metadescription: req.body.metadescription,
        metakeywords: req.body.metakeywords,
        parent: req.body.parent,
        filters: req.body.filters,
        stores: req.body.stores,
        status: req.body.status,
        columns: req.body.columns,
        sortorder: req.body.sortorder,
        keywords: req.body.keywords
    });
    await image.save();
    res.status(200).send('Image uploaded');

})


router.post('/register', async (req, res) => {
    const { name, email, password, cpassword } = req.body

    if (!name || !email || !password || !cpassword) {
        return res.status(400).send("Error : please fill the data")
    }

    console.log('req.body', req.body);
    try {
        const userCheck = await User.findOne({ email: email })

        if (userCheck) {
            return res.status(400).json({ Error: "email already exist" })
        }

        console.log('user', userCheck);
        const user = new User({ name, email, password, cpassword })
        console.log('user', user);


        await user.save()
        res.status(201).json({ message: "data save" })

    } catch (e) {
        res.send(e)
    }


})


router.post('/login', async (req, res) => {
    // res.send(req.body)
    try {

        const { name, password } = req.body
        console.log(name, password);

        const login = await User.findOne({ name: name })
        console.log(login);

        if (login) {
            const match = await bcrypt.compare(password, login.password)
            // console.log(match);
            if (match) {
                res.send('success')
            } else {
                res.status(400).send('invalid data')
            }
        }
    } catch (e) {
        res.send("login error")
    }
})
router.get('/about', async (req, res) => {

    const data = await General.find()
    res.send(data)
    // console.log(data);

})


router.post('/compare', async (req, res) => {
    const { _id } = req.body
    const data = await General.findOne({ _id })
    res.send(data)
})


router.post('/update', async (req, res) => {
    console.log("akahi", req.body);
    const { category, description, metatitle, metadescription, metakeywords, parent, image,filters, stores, status, columns, sortorder, keywords, _id } = req.body

    const data = await General.findOneAndUpdate({ _id },
        {
            $set: {
                category: category,
                description: description,
                metatitle: metatitle,
                metadescription: metadescription,
                metakeywords: metakeywords,
                parent: parent,
                filters: filters,
                stores: stores,
                images: image,
                status: status,
                columns: columns,
                sortorder: sortorder,
                keywords: keywords
            }
        })

    await data.save()
    res.status(200).send('data save')
    console.log("update", data);
})


router.post('/delete', async (req, res) => {
    const { _id } = req.body
    console.log(_id);
    const data = await General.findOneAndDelete({ _id })
    console.log(data);
    res.status(200).send('data delete')

})

module.exports = router;
