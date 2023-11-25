export enum SaleEstatus {
    Disponible = 'Disponible',
    Vendido = 'Vendido',
    Apartado = 'Apartado',
    Negociacion = 'Negociación',
  }
  
  export interface Sale {
    id: number;
    client:string;
    telNumber:number;
    game:string,
    seller:string;
    dateOfSale:string;
    price:number;
    notes:string;
    status: SaleEstatus;

  }
  
