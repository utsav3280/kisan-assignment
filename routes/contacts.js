const router = require("express").Router();
const Messages = require("../modals/messages");
const UsersInfo = require("../modals/users");
require("dotenv").config();
const client = require('twilio')(process.env.accountSid, process.env.authToken);

router.post("/messages", async (req, res) => {
    try {
        client.messages.create({
            body: `Hi. Your OTP is ${req.body.otp}`,
            to: `+91${req.body.phone}`,
            from: '+19705174466'
        }).then((response) => {
            Messages.create({
                name: req.body.name,
                phone: req.body.phone,
                otp: req.body.otp
            })
            res.json({
                status: "success"
            }) 
        }).catch((error) => {
            console.log(error)
        })
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

router.get("/", async (req, res) => {
    try {
        const contacts = await UsersInfo.find();
        res.json({
            contacts
        });
    } catch (error) {
        console.log("error");
        res.json({
            error: error.message
        })
    }
})

router.get("/messages", async (req, res) => {
    try {
        const messages = await Messages.find();
        // reversing
        let list = messages.reverse();
        res.json({
            list
        })
    } catch (error) {
        console.log("error");
        res.json({
            error: error.message
        })
    }
})

module.exports = router;