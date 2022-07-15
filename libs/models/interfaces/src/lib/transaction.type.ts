import { ralbx_iUser } from "../index"

export interface ralbx_iTransaction {
    "id": number,
    "date": Date,
    "name": string,
    "from": ralbx_iUser,
    "to": number,
    "amount": number,
    "note": string
}
