export interface ProjectSection {
  title: string;
  content: string;
  images?: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  sections: ProjectSection[];
}
