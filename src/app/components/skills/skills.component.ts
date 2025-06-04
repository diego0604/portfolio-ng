import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgClass, ButtonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  categories: string[] = ['Frontend', 'Backend', 'Database'];
  activeCategory = this.categories[0];

  skills: Record<string, { name: string, icon: string, level: number }[]> = {
    Frontend: [
      { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
      { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
      { name: 'JavaScript', icon: 'fab fa-js', level: 85 },
      { name: 'Angular', icon: 'fab fa-angular', level: 40 },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap', level: 75 },
      { name: 'Responsive Design', icon: 'fas fa-mobile-alt', level: 60 },
    ],
    Backend: [
      { name: '.NET Framework', icon: 'fab fa-windows', level: 90 },
      { name: '.NET Core', icon: 'fab fa-microsoft', level: 85 },
      { name: 'C#', icon: 'fas fa-code', level: 90 },
      { name: 'ASP.NET MVC', icon: 'fas fa-server', level: 90 },
      { name: 'Web API', icon: 'fas fa-cogs', level: 80 },
      { name: 'Azure Services', icon: 'fas fa-cloud', level: 50 },
    ],
    Database: [
      { name: 'SQL Server', icon: 'fas fa-database', level: 80 },
      { name: 'T-SQL', icon: 'fas fa-table', level: 85 },
      { name: 'Entity Framework', icon: 'fas fa-project-diagram', level: 80 },
      { name: 'LINQ', icon: 'fas fa-exchange-alt', level: 85 },
      { name: 'Stored Procedures', icon: 'fas fa-server', level: 80 },
      { name: 'Performance Tuning', icon: 'fas fa-chart-line', level: 75 },
    ]
  };

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}
