import { ralbx_iTransaction } from "./transaction.type"
import { ralbx_iUser } from "./user.type"

let ralbx_ITransc = (a: ralbx_iTransaction) => { a.id };
let ralbx_IUsers = (b: ralbx_iUser) => { b.id };

interface ralbx_iFilters {
    "name": typeof ralbx_ITransc,
    "from": typeof ralbx_IUsers,
    "to": typeof ralbx_IUsers,
    "datefrom": Date,
    "dateto": Date,
    "pricefrom": number,
    "priceto": number
}

export { ralbx_iFilters }