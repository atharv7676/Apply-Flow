import "./src/config/env.js";
import app from "./app.js";


const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`The Server is running on http://localhost:${PORT}`)
})