import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin:["http://localhost:5173","https://tarunsaisrinivas.vercel.app","https://bytefolio.netlify.app/"],
    methods:["PUT","POST","GET","DELETE"],
    credentials:true,
}));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open',() =>{
    console.log("DB Connected Successfully");
})
// MongoDB Schema
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(200).json({ success: true, message: 'Message saved successfully.' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// Add a new route to fetch submitted messages
app.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
