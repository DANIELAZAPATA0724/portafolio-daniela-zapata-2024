import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Daniela Zapata - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.html) {
      filterTags.push(Tag.HTML);
    }
    if (this.express) {
      filterTags.push(Tag.EXPRESS);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.vite) {
      filterTags.push(Tag.VITE);
    }
    if (this.next) {
      filterTags.push(Tag.NEXT);
    }
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (
      this.typescript ||
      this.angular ||
      this.javascript ||
      this.html ||
      this.react
    ) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.angular = false;
    this.javascript = false;
    this.html = false;
    this.react = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
