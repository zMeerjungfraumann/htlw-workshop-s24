import express from 'express';
import envUtil from './util/env.util';
import router from './routes';
import cors from 'cors';
import mongoose from 'mongoose';

//console.log(envUtil.PORT);
//console.log(typeof envUtil.PORT);

const app = express();

app.use(express.json()); //Middleware schaut ob der Content JSON ist, wenn ja dann parst er es, wenn nein dann schmeißt er einen error zurück

app.use(cors());    //Erlaubt, dass von überall requests kommen dürfen | dass nicht nur requests von der selben domain akzeptiert werden

app.use("/", router);


/*app.get('/', (request, response) => {   //Wenn ein get request kommt dann auf die standard route und hello world zurückschreiben
    response.status(200).send("Hello, World!");

});

//POST-Endpoint = Dafür da, dass Client daten mitschickt
app.post("/", (request, response) =>{
    return response.status(200).json(request.body);
})*/


app.listen(envUtil.PORT, async () => { //Er soll auf unseren Port hören und wenn der Server hochgefahren wird, wird "Server started" ausgegeben.
    console.log('Server started.');

    await mongoose.connect(envUtil.MONGO_URL);  //Verbinden zur MongoDB
    
    console.log('Connected to MongoDB.');

    const car = {
        brand: "BMW",
        color: "orange"
    }

    const car2 = { brand: car.brand, color: car.color, motor: "N55" }
    const car3 = { ...car, motor: "N55" }
    const car4 = { ...car3}

    console.log(car, car2, car3, car4);

});