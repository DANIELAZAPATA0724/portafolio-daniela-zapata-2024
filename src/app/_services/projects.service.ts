import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Golden Hands | Ecommerce Project", pictures: ["../../assets/ecommerceHome.png","../../assets/goldenhands3.png", "../../assets/goldenhansd2.png", "../../assets/productsgoldenhands.png",], projectLink: "https://github.com/amanda1686/ecommerce", summary: "Este proyecto está desarrollado utilizando tecnologías modernas como React, Vite y Tailwind CSS", description: "Este es un proyecto heredado, enfocado en ofrecer productos y servicios diseñados especialmente para adultos mayores. Este proyecto está desarrollado utilizando tecnologías modernas como React, Vite y Tailwind CSS para brindar una experiencia ágil y amigable para nuestros usuarios.", tags: [Tag.JAVASCRIPT, Tag.CSS, Tag.HTML, Tag.REACT, Tag.VITE, Tag.TAILWIND]},
    {id: 1, name: "Happy Phone v2.0 | Ecommerce Project", pictures: ["../../assets/happyphonev2.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Tienda de moviles, diseñada con JavaScript - Desarrollada como un Proyecto Grupal", description: "Proyecto heredado, enfocado en presentar y distribuir una línea exclusiva de teléfonos móviles que redefinen la experiencia del usuario. Ofrecemos dispositivos con diseño vanguardista, tecnología avanzada y opciones de personalización, priorizando una experiencia única para nuestros usuarios.", tags: [Tag.JAVASCRIPT, Tag.CSS, Tag.HTML,]},
    {id: 2, name: "Happy Phone v1.0 | Ecommerce Project", pictures: ["../../assets/happyphonev1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSS, Tag.HTML]},
    {id: 3, name: "Rustic Receipes | Web API Project", pictures: ["../../assets/rusticreceipesAPI.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT, Tag.CSS, Tag.HTML,]},
    {id: 4, name: "Tu Profe Particular | Landing Page Project", pictures: ["../../assets/tuprofeparticular.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSS, Tag.HTML,]},
    {id: 5, name: "Furture Projects", pictures: ["","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT, Tag.CSS, Tag.HTML,]}
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is not project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
  let filteredProjects: Project[] = [];

  this.projects.forEach(function (project){
   let foundAll = true;

   filterTags.forEach(function (filterTag) {
     if (project.tags.includes(filterTag) == false) {
      foundAll = false;
     }
   });

   if (foundAll) {
    filteredProjects.push(project);
   }

  });

return filteredProjects;
}
}
