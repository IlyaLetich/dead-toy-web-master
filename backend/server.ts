const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
import { Request, Response } from "express";

const Schema = mongoose.Schema;

const catalogScheme = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    linkGame: { type: String, required: true },
});

const newsItemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const gameInfoScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    linkGame: {
        type: String,
        required: true
    },
    gameImage: {
        type: String,
        required: true
    },
    sliderImage: {
        type: [String],
        required: true
    },
    genres: {
        type: [String],
        required: true
    }
});

const horrorSchema = new Schema({
    title: { type: String, required: true },
    timeReading: { type: String, required: true },
    body: [
        {
            image: { type: String, default: null },
            text: { type: String, default: '' }
        }
    ],
    datePublication: { type: String, required: true },
    linkShare: { type: String, default: '' }
});

const Blogs = mongoose.model('blog-collection', horrorSchema);
module.exports = Blogs;

const News = mongoose.model('news-item', newsItemSchema);
module.exports = News;

const Catalog = mongoose.model('catalog-item', catalogScheme);
module.exports = Catalog;

const Game = mongoose.model('games-info', gameInfoScheme);
module.exports = Game;

const PORT = 3001;
const Url = "mongodb+srv://deadtoycompany:4EYBWDb3fSSnd8v6@cluster0.olp5y1v.mongodb.net/dead-toy-web?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

mongoose
    .connect(Url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res: any) => console.log('Connected to MongoDB'))
    .catch((err: string) => console.log(`DB connection error ${err}`));

app.listen(PORT, (err: string) => {
    err ? console.log(err) : console.log(`listening port ${PORT}`)
});

app.get('/catalog-data', (req: any, res: any) => {
    Catalog.find()
        .then((items: any) => {
            res
                .status(200)
                .json(items)
        })
        .catch(() => 'Something goes wrong...')
})

app.get('/game-info', (req: any, res: any) => {
    Game.find()
        .then((items: any) => {
            res
                .status(200)
                .json(items)
        })
        .catch(() => 'Something goes wrong...')
})

app.get('/news-items', (req: any, res: any) => {
    News.find()
        .then((items: any) => {
            res
                .status(200)
                .json(items)
        })
        .catch(() => 'Something goes wrong...')
})

app.get('/game-info/:_id', (req: any, res: any) => {
    const id = req.params._id;
    Game.findOne({ _id: id })
        .then((item: any) => {
            res
                .status(200)
                .json(item)
        })
        .catch((error: any) => {
            console.log(`Ошибка при выполнении запроса: ${error}`);
            res.status(500).json({ message: 'Ошибка сервера' });
        });
})

app.get('/blog-info/:_id', (req: any, res: any) => {
    const id = req.params._id;
    Blogs.findOne({ _id: id })
        .then((item: any) => {
            res
                .status(200)
                .json(item)
        })
        .catch((error: any) => {
            console.log(`Ошибка при выполнении запроса: ${error}`);
            res.status(500).json({ message: 'Ошибка сервера' });
        });
})

let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'dead-toy-message@mail.ru',
        pass: 'w4fyuCusnhia2LSvJxDq',
    },
});

app.post("/api/mail", (req: Request, res: Response) => {
    const { from, to, subject, text } = req.body.formdata;

    const mailOptions = {
        from,
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
            console.log(error);
            console.log(mailOptions);
            res.status(500).json({ message: "Message sending failed" + mailOptions });
        } else {
            console.log("Email sent: " + info.response);
            res.json({ message: "Message sent" });
        }
    });
});

