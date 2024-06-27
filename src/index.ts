import express from 'express';
import envUtil from './util/env.util';
import router from './routes';
import cors from 'cors';

//console.log(envUtil.PORT);
//console.log(typeof envUtil.PORT);

const app = express();

app.use(express.json()); //Middleware schaut ob der Content JSON ist, wenn ja dann parst er es, wenn nein dann schmeißt er einen error zurück

app.use(cors());

app.use("/", router);


/*app.get('/', (request, response) => {   //Wenn ein get request kommt dann auf die standard route und hello world zurückschreiben
    response.status(200).send("Hello, World!");

});

//POST-Endpoint = Dafür da, dass Client daten mitschickt
app.post("/", (request, response) =>{
    return response.status(200).json(request.body);
})*/


app.listen(envUtil.PORT, () => { //Er soll auf unseren Port hören und wenn der Server hochgefahren wird, wird "Server started" ausgegeben.
    console.log('Server started.');
});