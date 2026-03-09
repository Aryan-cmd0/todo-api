import express from "express";
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

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



app.listen(3000, () => {
  console.log("Sever running at http://localhost:3000");
});