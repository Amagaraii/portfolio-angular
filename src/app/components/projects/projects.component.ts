import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
      {
        title: 'Portfolio Angular',
        description: 'Un portfolio interactif avec Angular et Tailwind CSS.',
        image: 'https://i.ytimg.com/vi/qmxo2NntTX8/maxresdefault.jpg',
        link: 'https://github.com/Amagaraii/portfolio-angular'
      },
      {
        title: 'Bibliothèque de Livres Spring + Postman',
        description: 'Une bibliothèque fait avec springboot et postman.',
        image: 'assets/X.png',
        link: 'https://github.com/Amagaraii/spring_project'
      },
    ];

    projects_pro = [
      {
        title: 'Pardawan',
        description: "Site pour une entreprise de formation et d'alternance. En angular et tailwindcss et springboot.",
        image: 'https://www.fede.education/wp-content/uploads/2024/02/LOGO-PARDAWAN.jpg',
        link: 'https://pardawan.com/#/'
      },
    ];


}
