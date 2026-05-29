'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Pencil, Trash2, ExternalLink, GitCommit, Plus } from 'lucide-react';

enum ProjectType {
  web = 'web',
  mobile = 'mobile',
  backend = 'backend',
}

type Project = {
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
  createdAt: string;
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Fullstack',
    slug: 'portfolio-fullstack',
    shortDescription: 'Portfólio moderno com dashboard admin.',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    repositoryUrl: 'https://github.com',
    liveUrl: 'https://google.com',
    featured: true,
    type: ProjectType.web,
    createdAt: '2026-05-20',
  },

  {
    id: '2',
    title: 'API Financeira',
    slug: 'api-financeira',
    shortDescription: 'Backend robusto para controle financeiro.',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    tags: ['Node.js', 'Fastify', 'Postgres'],
    repositoryUrl: 'https://github.com',
    featured: false,
    type: ProjectType.backend,
    createdAt: '2026-05-18',
  },
];

export default function ProjectsPage() {
  async function handleDeleteProject(id: string) {
    const confirmed = confirm('Deseja realmente excluir este projeto?');

    if (!confirmed) return;

    try {
      // await fetch(`/api/projects/${id}`, {
      //   method: "DELETE",
      // })

      console.log('Projeto removido:', id);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Projetos</h1>

            <p className="mt-2 text-zinc-400">Gerencie todos os projetos do portfólio</p>
          </div>

          <Link href="/admin/projects/create" className="flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 font-medium transition hover:bg-violet-500">
            <Plus size={18} />
            Novo projeto
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
              {/* IMAGE */}
              <div className="relative h-52 w-full">
                {/* <Image src={project.thumbnail} alt={project.title} fill className="object-cover" /> */}

                {project.featured && <div className="absolute left-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-medium">Destaque</div>}
              </div>

              {/* CONTENT */}
              <div className="space-y-5 p-5">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h2 className="line-clamp-1 text-xl font-semibold">{project.title}</h2>

                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs capitalize text-zinc-300">{project.type}</span>
                  </div>

                  <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">{project.shortDescription}</p>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-3">
                  {project.repositoryUrl && (
                    <a href={project.repositoryUrl} target="_blank" className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
                      <GitCommit size={16} />
                      Repositório
                    </a>
                  )}

                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
                      <ExternalLink size={16} />
                      Deploy
                    </a>
                  )}
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                  <span className="text-xs text-zinc-500">{new Date(project.createdAt).toLocaleDateString('pt-BR')}</span>

                  <div className="flex items-center gap-2">
                    {/* EDIT */}
                    <Link href={`/admin/projects/${project.id}`} className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 text-sm transition hover:bg-zinc-800">
                      <Pencil size={16} />
                      Editar
                    </Link>

                    {/* DELETE */}
                    <button onClick={() => handleDeleteProject(project.id)} className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/20">
                      <Trash2 size={16} />
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {projects.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-800 py-24 text-center">
            <h2 className="text-2xl font-semibold">Nenhum projeto encontrado</h2>

            <p className="mt-2 text-zinc-400">Crie seu primeiro projeto para começar</p>

            <Link href="/admin/projects/create" className="mt-6 rounded-2xl bg-violet-600 px-5 py-3 font-medium transition hover:bg-violet-500">
              Criar projeto
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
