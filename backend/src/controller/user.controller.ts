import type { Request, Response } from "express";
import { createUserSchema } from "../schema/user.schema";
import { pick } from "lodash";
import { createUser, getUser } from "../service/user.service";
import { CreateuserInput, GetUserInput } from "../schema/user.schema";


export async function createUserHandler(
    req: Request<{}, {}, CreateuserInput["body"]>,
    res: Response
){
    const validated= createUserSchema.safeParse(req.body);  //Schema validieren

    console.log(validated);

    //Validierung brauchen wir nicht mehr, weil wir das schon in validation.ts gemacht haben
    //if(validated.success){  //schauen ob das schema richtig validiert worden ist
        try{
            //Jetzt ist der validierte Body hier drinnen
            const user = await createUser(req.body);  //Methode zum Anlegen des Users im Service aufrufen

            res.status(200).json(   
                pick(user, "username", "email", "_id")  //Zurückschicken von Username, Email und ID
        );
        }catch(e){
            console.log(e);
            return res.status(400).send(e);
        }
        

    /*}else{
        res.status(400).json({
            error: "Malformed request body"
        });
    }*/

    /*
    * We're expecting the following body:
    * {
    *   fullName: string,
    *   email: string,
    *   password: string
    * }
    */
    


}

export async function getUserHandler(
    req: Request<GetUserInput["params"]>,
    res: Response
){
    try{
        const user = await getUser(req.params.id);
        
        return res.status(200).json(    //Wenn er user gefunden hat
            pick(user, "_id", "username", "email")
        );
    }catch(e){
        return res.status(404).json({
            message: "User not found",
            error: e
        })
    }
}