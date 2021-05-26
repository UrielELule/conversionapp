import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad: number  = 0;
  tengo: string     = 'USD';
  quiero: string    = 'EUR';
  total: number     = 0;
  
  monedas: string[] = ['USD', 'EUR', 'LIBRA'];


  constructor() { }

  ngOnInit(): void {
  }

  convertir(){


   switch(this.tengo){

     case 'USD':
       if(this.quiero === 'USD'){
         this.total = this.cantidad;
       }

       if(this.quiero === 'EUR'){
         this.total = this.cantidad * 0.82
       }

       if(this.quiero === 'LIBRA'){
         this.total =  this.cantidad * 0.71
       }
       break;

     case 'EUR':
       if(this.quiero === 'USD'){
         this.total = this.cantidad * 1.22
       }

       if(this.quiero === 'EUR'){
        this.total = this.cantidad;
       }

       if(this.quiero === 'LIBRA'){
        this.total = this.cantidad * 0.86
       }

       break;

     case 'LIBRA':

      if(this.quiero === 'USD'){
        this.total = this.cantidad * 1.41
      }

      if(this.quiero === 'EUR'){
        this.total = this.cantidad * 1.16
      }
      
      if(this.quiero === 'LIBRA'){
        this.total = this.cantidad;
      }
      
      break;
   }

  }

}
