export interface LoginResponse {
    data: Data;
    tokenSession: string;
}

export interface Data {
    name: string;
    email: string;
    password: string;
    avatar: string;
}
