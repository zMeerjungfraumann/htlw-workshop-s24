import zod from "zod";
import { config } from 'dotenv';

config();

const envSchema = zod.object({

    PORT: zod.coerce.number({
        message: "PORT must be a number"

    }).min(0).max(65536),
    MONGO_URL: zod.string({
        message: "MongoDB URL is required"
    })

     /*,PORT: zod.string({
        message: "PORT must be defined"
    }).transform(portStr => {
        try{
            const port = parseInt(portStr);
            
            if(port < 1 || port > 65553) {
                throw "PORT not in valid range"
            }

            return port;
        }catch(e){
            console.error(e);
        }
    })*/
});

export default envSchema.parse(process.env);
