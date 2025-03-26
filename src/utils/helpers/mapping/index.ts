import { IUserInformation } from "@/types/user";

export const mapUserInfoFromDataToState = (data: any): IUserInformation => {
    return {
        _id: data._id,
        email: data.email,
        displayName: data.displayName,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        avatar: data.avatar,
    }
}