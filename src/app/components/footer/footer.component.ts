// footer.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  githubUrl = 'https://github.com/diego0604';
  twitterUrl = 'https://twitter.com/';
  year = new Date().getFullYear();
}
