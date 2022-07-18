import { ralbx_iUser } from "./user.type";

let ralbx_IUsers = (b: ralbx_iUser) => { b.id };

export interface ralbx_iTransaction {
    id: number,
    date: Date,
    name: string,
    from: typeof ralbx_IUsers,
    to: number,
    amount: number,
    note: string
}
