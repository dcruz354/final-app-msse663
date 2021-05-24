export interface Products {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = [
    {
        id: 1,
        name: 'PVC 1',
        price: 10,
        description: "PVC pipe size 1" 
    },
    {
        id: 2,
        name: 'PVC 2',
        price: 15,
        description: 'PVC pipe size 2' 
    }
];