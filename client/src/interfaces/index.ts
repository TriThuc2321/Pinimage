interface INewUser {
    uid: string;
    name: string | null;
    picture: string | null;
    email: string;
}

interface IUser extends INewUser {
    _id: string;
}
interface IStore {
    user: IUser;
}

export type { IUser, INewUser, IStore };
