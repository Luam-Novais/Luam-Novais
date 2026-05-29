
export enum ProjectType {
  web = 'web',
  mobile = 'frontend',
  backend = 'backend',
}
export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  thumbnail: string;
  tags: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
  type: ProjectType;
};

export interface ProjectDTO {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  thumbnail: FileList;
  tags: string;
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
  type: ProjectType;
  images: {
    file: FileList;
  }[];
};