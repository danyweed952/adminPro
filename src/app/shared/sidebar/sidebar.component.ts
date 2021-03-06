import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  usuario: Usuario;
  menu: any [] = [];

  constructor(public _sideBarService: SidebarService, public _us: UsuarioService) {
    this.menu = _us.menu;
   }

  ngOnInit() {
    this.usuario = this._us.usuario;


  }

}
