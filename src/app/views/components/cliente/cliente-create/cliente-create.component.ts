import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit{

  constructor(
    private router: Router,
    private cliente: ClienteService){}

  ngOnInit(): void {
      
  }

  cancel():void{
this.router.navigate(['Clientes'])
  }
}
