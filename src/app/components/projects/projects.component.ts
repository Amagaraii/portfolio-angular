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
      {
        title: '',
        description: '',
        image: 'https://via.placeholder.com/300x200',
        link: '#'
      },
      {
        title: '',
        description: '',
        image: 'https://via.placeholder.com/300x200',
        link: '#'
      },
      {
        title: '',
        description: '',
        image: 'https://via.placeholder.com/300x200',
        link: '#'
      },
      {
        title: '',
        description: '',
        image: 'https://via.placeholder.com/300x200',
        link: '#'
      }
    ];

}
