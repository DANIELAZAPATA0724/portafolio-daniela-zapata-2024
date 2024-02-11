import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectSercvice: ProjectsService) {
    this.titleService.setTitle('Daniela Zapata - Home');
  }
  ngOnInit(): void {
this.featuredProject = this.projectSercvice.GetProjectById(0); 
 }
}
