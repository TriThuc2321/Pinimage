interface INewUser {
    uid: string;
    name: string | null;
    picture: string | null;
    email: string;
}

interface IUser extends INewUser {
    _id: string;
}

interface IPost {
    _id: string;
    prompt: string;
    url: string;
    host?: IUser;
    view?: number;
    heart?: number;
}
interface IStore {
    user: IUser;
}

export type { IUser, INewUser, IPost, IStore };
