import { UserConfedentialDto, UserDto } from "../dto";

export class UserTransformer{
    static toUserWithHash(data):UserConfedentialDto{
        return {
            id:data.id,
            firstName:data.first_name,
            lastName:data.last_name,
            phone:data.phone,
            role:data.rolename,
            email:data.email,
            hash:data.hash
        }

    }
    static toUser(data:UserConfedentialDto):UserDto{

        return {
            id:data.id,
            firstName:data.firstName,
            lastName:data.lastName,
            phone:data.phone,
            role:data.role,
            email:data.email
        }

    }
     

}