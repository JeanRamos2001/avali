import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {
  public mensagem: string = "";

  @Output() public mensagemEnviada = new EventEmitter<string>();

  public enviarMensagem(){
    this.mensagemEnviada.emit(this.mensagem);
  }

}
