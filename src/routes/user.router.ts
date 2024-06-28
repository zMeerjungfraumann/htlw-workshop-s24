import express from "express";
import { createUserHandler, getUserHandler } from "../controller/user.controller";
import { validate } from "../middleware/validation";
import { createUserSchema, getUserSchema } from "../schema/user.schema";


// @path /user
const router= express.Router(); 

router.get('/:id', validate(getUserSchema), getUserHandler ); //:id heißt dass wir einen URL-parameter namens id haben)

router.post('/', validate(createUserSchema), createUserHandler); //Der Router geht zuerst in die Validation-Methode rein und dann 
                                                                 //wird das validierte req.body in createUserHandler verwendet

export default router;