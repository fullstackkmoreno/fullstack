import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-recaudos',
  templateUrl: './filtro-recaudos.component.html',
  styleUrls: ['./filtro-recaudos.component.css']
})
export class FiltroRecaudosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private location: Location,
    private activateRoute: ActivatedRoute) { }

  form!: FormGroup;

  categorias = [
    {id: 1, nombre: 'Automovil'},
    {id: 2, nombre: 'Camioneta'},
    {id: 3, nombre: 'Camion'},
    {id: 4, nombre: 'Mula'}
  ]

  sentidos = [
    {id: 1, nombre: 'Norte'},
    {id: 2, nombre: 'Sur'}
  ]

  recaudos = [
    {estacion: 'Estacion 1', hora: '10:00am', categorias: [1], sentidos: [2], valor: '20.99'},
    {estacion: 'Estacion 2', hora: '11:00am', categorias: [2], sentidos: [1], valor: '21.99'}, 
  ]
  
  recaudosOriginal = this.recaudos;

  formularioOriginal = {
    estacion: '',
    hora: '',
    categoriaId: 0,
    sentidoId: 0,
    valor: ''
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarRecaudos(this.form.value);
    
    this.form.valueChanges
      .subscribe(valores => {
        this.recaudos = this.recaudosOriginal;
        this.buscarRecaudos(valores);
        this.escribirParametrosBusquedaEnURL();
      })
  }

  private leerValoresURL() {
    this.activateRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

      if (params.estacion) {
        objeto.nombre = params.estacion;
      }

      if (params.categoriaId) {
        objeto.categoriaId = Number(params.categoriaId);
      }

      if (params.sentidoId) {
        objeto.sentidoId = Number(params.sentidoId);
      }

      if (params.hora) {
        objeto.hora = params.hora;
      }

      if (params.valor) {
        objeto.valor = params.valor;
      }

      this.form.patchValue(objeto);
    })
  }

  private escribirParametrosBusquedaEnURL()  {
    var queryStrings=[];
    var valoresFormulario = this.form.value;
    if (valoresFormulario.estacion) {
      queryStrings.push(`estacion=${valoresFormulario.estacion}`);
    }
    if (valoresFormulario.categoriaId != '0') {
      queryStrings.push(`categoriaId=${valoresFormulario.categoriaId}`);
    }
    if (valoresFormulario.sentidoId) {
      queryStrings.push(`sentidoId=${valoresFormulario.sentidoId}`);
    }
    if (valoresFormulario.hora) {
      queryStrings.push(`hora=${valoresFormulario.hora}`);
    }
    if (valoresFormulario.valor) {
      queryStrings.push(`valor=${valoresFormulario.valor}`);
    }

    this.location.replaceState('galeria', queryStrings.join('&'));
  }
  
  buscarRecaudos(valores: any) {
    if(valores.estacion){
      this.recaudos = this.recaudos.filter((recaudo: { estacion: string | any[]; }) => recaudo.estacion.indexOf(valores.estacion) !== -1);
    }

    if(valores.categoriaId !== 0){
      this.recaudos = this.recaudos.filter((recaudo: { categorias: any[]; }) => recaudo.categorias.indexOf(valores.categoriaId) !== -1);
    }
    
    if(valores.sentidoId !== 0){
      this.recaudos = this.recaudos.filter((recaudo: { sentidos: any[]; }) => recaudo.sentidos.indexOf(valores.categoriaId) !== -1);
    }
    
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }
}
