import { Component } from '@angular/core';

interface Skill {
  name: string;
  logo: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class Skills {
  skills: Skill[] = [
    { name: 'C#', logo: 'skills/logo-csharp.svg', color: '#9B4F96' },
    { name: 'Angular', logo: 'skills/logo-angular.svg', color: '#DD0031' },
    { name: 'HTML', logo: 'skills/logo-html.svg', color: '#E34F26' },
    { name: 'CSS', logo: 'skills/logo-css.svg', color: '#264DE4' },
    { name: 'JavaScript', logo: 'skills/logo-js.svg', color: '#F7DF1E' },
    { name: 'SQL', logo: 'skills/logo-sql.svg', color: '#00758F' },
    { name: 'TypeScript', logo: 'skills/logo-ts.svg', color: '#3178C6' },
    { name: 'Figma', logo: 'skills/logo-figma.svg', color: '#F24E1E' },
  ];
}
