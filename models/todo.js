import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean,
    days :Number
});

export default mongoose.model('todo', todoSchema);