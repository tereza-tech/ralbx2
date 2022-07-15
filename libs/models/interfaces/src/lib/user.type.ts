interface ralbx_iUser {
    "id": number,
    "name": string,
    "mail": string,
    "passhash"?: string,
    "surname"?: string,
    "confirmed"?: boolean,
    "location"?: string,
    "consents"?: ralbx_iLegalConsent,
    "removed"?: string
}

interface ralbx_iLegalConsent {
    "cookies"?: boolean,
    "data"?: boolean
}

export { ralbx_iUser, ralbx_iLegalConsent }


