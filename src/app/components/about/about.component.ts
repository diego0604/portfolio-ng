import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports: [ButtonModule]
})
export class AboutComponent {
  fullName = 'Diego Alejandro Salazar Ramirez';
  email = 'dietuspr@gmail.com';
  location = 'Colombia';
  availability = 'Available for freelance and full-time positions';
  imagePath = 'assets/images/diegod.png';

  onDownloadCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/cv/CV.pdf';
    link.download = 'CV.pdf';
    link.click();
  }
}
