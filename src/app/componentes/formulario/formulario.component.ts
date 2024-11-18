import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  @Input() btnAcao!:string;
  @Input() descTitulo!:string;
  @Input() dadosUsuario : UsuarioListar | null = null
  @Output() onSubmit = new EventEmitter<UsuarioListar>();

  
  usuarioForm!: FormGroup;

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl(this.dadosUsuario ? this.dadosUsuario.id : 0),
      nomeCompleto: new FormControl(this.dadosUsuario ? this.dadosUsuario.nomeCompleto :""),
      email: new FormControl(this.dadosUsuario ? this.dadosUsuario.email :""),
      cpf: new FormControl(this.dadosUsuario ? this.dadosUsuario.cpf :""),
      situacao: new FormControl(this.dadosUsuario ? this.dadosUsuario.situacao :true)
      
    })
  }

  submit(){
    this.onSubmit.emit(this.usuarioForm.value);
  }


}
