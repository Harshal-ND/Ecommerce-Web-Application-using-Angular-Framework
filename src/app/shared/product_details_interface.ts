export interface ProductDetailsInterface
{
    id:number,
    title:string,
    price:number,
    description:string,
    images:string[],
    creationAt:string,
    updatedAt:string,

    category:{
        
        name:string,
        image:string,
        creationAt:string,
        updatedAt:string
    }

}