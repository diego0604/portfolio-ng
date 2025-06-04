import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextarea } from 'primeng/inputtextarea';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, InputTextarea, ButtonModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  email = 'dietuspr@gmail.com';
  phone = '3104536244';
  location = 'Pereira, Colombia';
  githubUrl = 'https://github.com/diego0604';
  twitterUrl = 'https://twitter.com/';

  name = '';
  subject = '';
  message = '';

  onSubmit(): void {
    if (this.name && this.subject && this.message) {
      const encodedName = encodeURIComponent(this.name);
      const encodedSubject = encodeURIComponent(this.subject);
      const encodedMessage = encodeURIComponent(this.message);
      const phoneNumber = '+57' + this.phone;
      const text = `Quiero saber de tus servicios. Soy ${encodedName}. Asunto: ${encodedSubject}. Mensaje: ${encodedMessage}`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
      window.location.href = whatsappUrl;
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
