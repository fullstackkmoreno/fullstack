import { Time } from "@angular/common";
import { Timestamp } from "rxjs";

export interface recaudoDTO {
    estacion:string;
    categoria:number;
    sentido:number,
    hora:string,
    valor:number
}