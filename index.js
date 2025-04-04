import mongoose from "mongoose";
import app from "./src/app.js";

import config from "./src/config/index.js";

( async() => {
    try {
        
        await mongoose.connect(config.DB_URL);
        console.log(`dB Connected`);

        app.on('error',(err)=>{
            console.error(`Error : ${err}`);
            
        })

        const onListening = () =>{
            console.log(`App is Listening on PORT : ${config.PORT}`);
            
        }

        app.listen(config.PORT, onListening)



    } catch (err) {
        console.error(`Error : ${err}`)
        throw err
    }

}) ()
