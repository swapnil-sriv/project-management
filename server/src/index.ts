import express, {Request, Response} from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import searchRoutes from "./routes/searchRoutes";
import userRoutes from "./routes/userRoutes";
import teamRoutes from "./routes/teamRoutes"
import priorityRoutes from "./routes/priorityRoutes"

// CNFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// ROUTES
app.get('/',(req,res)=>{
    res.send("This is home route!");
});

app.use("/projects",projectRoutes);
app.use("/tasks",taskRoutes);
app.use("/search",searchRoutes);
app.use("/users",userRoutes);
app.use("/teams",teamRoutes);
app.use("/priority",priorityRoutes);


const port = process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
})