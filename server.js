import dotenv from 'dotenv';
dotenv.config();

//import dependencies
import express from 'express';
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';

//create express app
const app = express();

//Request Logger Middleware
app.use((res, req, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//connect database
await connectDB();

//middlewares
app.use(express.json());

//routes
app.use('/api/v1/todo', todoRoutes);

//test route
app.get('/', (req, res) => {
  res.send('Todo API is running');
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
});

app.listen(3000, () => {
  console.log("Sever running at http://localhost:3000");
});