import {LiveAnnouncer} from '@angular/cdk/a11y';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { recaudoDTO } from '../recaudo';
import { RecaudosService } from '../recaudos.service';

export interface PeriodicElement {
  estacion: string;
  hora: string;
  categoria: string;
  valor: number;
  sentido: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {estacion: 'Estacion 1', hora: '', categoria: 'Hydrogen', valor: 1.0079, sentido: 'H'},
  {estacion: 'Estacion 2', hora: '', categoria: 'Helium', valor: 4.0026, sentido: 'He'},
  {estacion: 'Estacion 3', hora: '', categoria: 'Lithium', valor: 6.941, sentido: 'Li'},
  {estacion: 'Estacion 4', hora: '', categoria: 'Beryllium', valor: 9.0122, sentido: 'Be'},
  {estacion: 'Estacion 5', hora: '', categoria: 'Boron', valor: 10.811, sentido: 'B'},
  {estacion: 'Estacion 6', hora: '', categoria: 'Carbon', valor: 12.0107, sentido: 'C'},
  {estacion: 'Estacion 7', hora: '', categoria: 'Nitrogen', valor: 14.0067, sentido: 'N'},
  {estacion: 'Estacion 8', hora: '', categoria: 'Oxygen', valor: 15.9994, sentido: 'O'},
  {estacion: 'Estacion 9', hora: '', categoria: 'Fluorine', valor: 18.9984, sentido: 'F'},
  {estacion: 'Estacion 10', hora: '', categoria: 'Neon', valor: 20.1797, sentido: 'Ne'},
];

@Component({
  selector: 'app-listado-recaudos',
  templateUrl: './listado-recaudos.component.html',
  styleUrls: ['./listado-recaudos.component.css']
})
export class ListadoRecaudosComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['estacion', 'categoria', 'sentido', 'hora', 'valor'];
  dataSource = new MatTableDataSource<recaudoDTO>();
  
  constructor(private _liveAnnouncer: LiveAnnouncer, private recaudosService: RecaudosService) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatSort) sort: MatSort | undefined;

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  @Input()
  recaudos: { estacion: string; hora: string; categorias: number[]; sentidos: number[]; valor: string; }[] | undefined;

  ngOnInit(): void {
    this.recaudosService.ObtenerTodos()
    .subscribe(recaudos => {
      this.dataSource = new MatTableDataSource(recaudos);
    }, error => console.error(error))
    
  }
  remover(indiceRecaudo:number):void 
  {
    this.recaudos?.splice(indiceRecaudo,1);
  }
}
