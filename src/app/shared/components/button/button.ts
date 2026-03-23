import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  // O texto que vai aparecer no botão
  @Input() text: string = ''; 
  
  @Input() actionType: 'download' | 'whatsapp' = 'whatsapp'; 
  
  @Input() fileUrl: string = 'curriculo-eduardo.pdf'; 
  @Input() fileName: string = 'Curriculo_Eduardo_Padilha.pdf';

  phoneNumber: string = '5549999664798'; 
  whatsappMessage: string = 'Olá Eduardo, vi o seu portfólio e gostaria de conversar!';

  get whatsappLink(): string {
    const encodedMessage = encodeURIComponent(this.whatsappMessage);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}
