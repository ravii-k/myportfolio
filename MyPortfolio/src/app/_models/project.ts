// tslint:disable-next-line: no-namespace
  export interface Project {
    title: string;
    description: string;
    projectImage: ProjectImage;
    projectPreview: ProjectPreview;
    projectSourceCode: ProjectSourceCode;
    skills: [string];
  }

  export interface ProjectImage {
    src: string;
    alt: string;
  }

  export interface ProjectPreview {
    description: string;
    url: string;
  }

  export interface ProjectSourceCode {
    description: string;
    url: string;
  }
