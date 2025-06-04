import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
declare const AOS: any;

interface Project {
  title: string;
  description: string;
  image: string;
  categories: string[];
  tech: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  filters = ['all', 'web', 'dotnet', 'angular'];
  activeFilter = 'all';

  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product catalog, shopping cart, and payment integration.',
      image: 'assets/images/Screenshot_3.png',
      categories: ['web', 'dotnet'],
      tech: ['.NET Core', 'SQL Server'],
      link: 'https://trydistri-qa.azurewebsites.net/'
    }
  ];

  ngOnInit(): void {
    AOS.init();
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  isVisible(project: Project): boolean {
    return this.activeFilter === 'all' || project.categories.includes(this.activeFilter);
  }
}
