import { User, UserModel } from "../model/user.model";

export async function createUser(   
    user: User
) {
    try{
        const userDocument = await UserModel.create(user);  //User anlegen

        console.log("{User Service | Create User} - Successfully created user with id: "+userDocument._id);

        return userDocument;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export async function getUser(
    id: string
){
    try{
        const user = await UserModel.findById(id);
        
        if(!user){
            throw new Error(`Could not find user with ${id}`);
        }


        return user;
    }catch(e){
        console.error('{User Service | Get Usre} - Error getting User');
        throw e;
    }
}