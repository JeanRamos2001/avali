import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ultimaMensagem: string = "";

  public receberMensagem(mensagem: any){
    this.ultimaMensagem = mensagem;
  }
}
