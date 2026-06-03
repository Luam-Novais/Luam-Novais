import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, GitCommit } from 'lucide-react';
import type { Project } from '../../types/project.d.ts';
import { HighlightProjectCard } from '@/src/components/card';

export enum ProjectType {
  web = 'web',
  mobile = 'frontend',
  backend = 'backend',
}
export default async function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <section className="default-layout py-20 px-4 md:px-20 bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        {/* HEADER */}
        <div className="flex flex-col gap-6">
          <span className="section-badge text">Projetos</span>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="title">Projetos em destaque</h2>

              <p className="text mt-6 leading-relaxed">Alguns dos projetos que mais representam minha evolução como desenvolvedor fullstack, focando em performance, arquitetura e experiência visual.</p>
            </div>

            <Link href="/projects" className="primary-btn w-fit">
              Ver todos
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* PROJECTS */}
        <ul className="grid grid-cols-1 gap-10 xl:grid-cols-2">
          {featuredProjects.map((project, index) => {
            return (
              <li key={project.id}>
                <HighlightProjectCard project={project} index={index} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Fullstack',
    slug: 'portfolio-fullstack',
    shortDescription: 'Portfólio moderno com dashboard administrativo, animações suaves e gerenciamento completo de projetos.',
    thumbnail: '/images/project-1.png',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    repositoryUrl: 'https://github.com',
    liveUrl: 'https://google.com',
    featured: true,
    type: ProjectType.web,
  },

  {
    id: '2',
    title: 'Dance School Manager',
    slug: 'dance-school-manager',
    shortDescription: 'Sistema desktop para gerenciamento de turmas, alunos e pagamentos de uma escola de dança.',
    thumbnail: '/images/project-2.png',
    tags: ['Electron', 'React', 'SQLite', 'Node.js'],
    repositoryUrl: 'https://github.com',
    featured: true,
    type: ProjectType.backend,
  },
];
