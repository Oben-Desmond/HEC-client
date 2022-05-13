

export interface Participant{
    name:string,
    email:string,
    tel:string,
    reason:string,
    expectation:string,
    gender:'male'|'female',
    registeredOn:number,
    ref?:string

}


export interface Application{
   participant:Participant,
   reference:string

}