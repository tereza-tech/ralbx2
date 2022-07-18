interface ralbx_iUserId {
    id: number;
}

type ralbx_iUser = ralbx_iUserId & {
    name: string,
    mail: string,
    passhash?: string,
    surname?: string,
    confirmed?: boolean,
    location?: string,
    consents?: ralbx_iLegalConsent,
    removed?: boolean
}

interface ralbx_iLegalConsent {
    id: number,
    cookies?: boolean,
    legals?: boolean
}

export { ralbx_iUserId, ralbx_iUser, ralbx_iLegalConsent }


