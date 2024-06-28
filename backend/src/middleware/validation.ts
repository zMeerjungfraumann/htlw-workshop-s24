import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

export const validate = (schema: AnyZodObject) => { //Schema wird mitgegeben
    return (req: Request, res: Response, next: NextFunction) => {
        const validated= schema.safeParse({
            params: req.params,
            body: req.body
        });    //Daten (also User/req.body) nach dem schema parsen
        //schema.parse wird ein error geworfen  //try catch block
        //schema.safeParse kriegt man ein Success und Data  //success im if else block nachschauen

        if(validated.success){  //Wenn es successfully validiert worden ist
            Object.assign(  //Keys zuweisen
                req, validated.data        //Target, Source
            );

            next(); //Ruft die nächste Middleware (createUserHandler) auf
        }else{
            res.status(400).json({
                error: "Malformed body."
            })
        }

    }
}