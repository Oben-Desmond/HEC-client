


export interface ContentProvider{
    email:string,
    phone_number?:string,
    photoUrl:string,
    name:string
}

export interface ContentTopic{
    id:string,
    description:string,
    available:boolean,
    assigneTo:string,
}