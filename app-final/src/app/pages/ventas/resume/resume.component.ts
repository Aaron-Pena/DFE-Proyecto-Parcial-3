import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SaleInterface } from 'src/app/services/sale.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit{

  @Input() mensaje: string = '';
  @Input() data!:SaleInterface[];
  @Input() totalSold!:number;
  @Input() importe:string ='';
  ngOnInit(){
    console.log("object");
    
  }
}
