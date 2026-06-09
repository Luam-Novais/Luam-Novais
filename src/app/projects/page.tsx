import { ProjectCard } from '@/src/components/card';
import { Project } from '@/src/types/project';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import { LayoutGrid, Monitor, Server, Layers } from 'lucide-react';

export enum ProjectType {
  fullstack = 'fullstack',
  frontend = 'frontend',
  backend = 'backend',
}
export default function ProjectsPage() {
  return (
    <main className="default-layout">
      <div className="px-4 py-8 title z-50">
        <Link href={'/'}>
          <MoveLeft />
        </Link>
      </div>

      <ProjectsHero />

      <ProjectsFilters />

      <ProjectsGrid />

      <ProjectsCTA />
    </main>
  );
}

function ProjectsHero() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <span className="section-eyebrow">Projetos</span>

        <h1 className="title mt-4 max-w-3xl">Aplicações desenvolvidas para resolver problemas reais.</h1>

        <p className="text mt-6 max-w-2xl text-lg">Uma seleção de projetos que demonstram minha experiência com frontend, backend, arquitetura de software e desenvolvimento fullstack.</p>
      </div>
    </section>
  );
}
function ProjectsFilters() {
  return (
    <div className="mb-12 flex gap-6 overflow-x-scroll">
      <button className="primary-btn">
        Todos <LayoutGrid size={16} />{' '}
      </button>

      <button className="filter-btn">
        fullstack <Layers size={16} />
      </button>

      <button className="filter-btn">
        frontend <Monitor size={16} />
      </button>

      <button className="filter-btn">
        Backend <Server size={16} />
      </button>
    </div>
  );
}
function ProjectsGrid() {
  return (
    <section className="px-4 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
function ProjectsCTA() {
  return (
    <section className="px-4 pb-32">
      <div className="bg-secondary default-shadow mx-auto max-w-7xl rounded-[40px] border border-zinc-800/50 p-12 text-center">
        <h2 className="title">Tem um projeto em mente?</h2>

        <p className="text mx-auto mt-6 max-w-2xl">Estou disponível para desenvolver aplicações web, APIs e soluções completas sob medida.</p>

        <button className="primary-btn mx-auto mt-8">Entrar em contato</button>
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
    type: ProjectType.fullstack,
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
