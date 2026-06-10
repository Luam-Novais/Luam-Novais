import { Project } from '../types/project';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export function HighlightProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article key={project.id} className={`bg-secondary default-shadow appear group overflow-hidden rounded-2xl border border-zinc-800/50 ${index === 1 ? 'xl:translate-y-16' : ''}`}>
      {/* IMAGE */}
      <div className="relative h-80 overflow-hidden">
        <Image src={project.thumbnail} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute left-6 top-6">
          <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium capitalize text-white">{project.type}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-8 p-8">
        <div className="space-y-5">
          <h3 className="font-poppins text-3xl font-semibold text-(--title)">{project.title}</h3>

          <p className="text text-base leading-relaxed">{project.shortDescription}</p>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-2xl border border-zinc-700 bg-secondary p-2 text-sm! text">
              {tag}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" className="primary-btn">
              Visualizar
              <ArrowUpRight size={18} />
            </Link>
          )}

          {project.repositoryUrl && (
            <Link href={project.repositoryUrl} target="_blank" className="header-link text">
              <FaGithub size={20} />
              Repositório
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

type ContactCardProps = {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  external?: boolean;
};

export function ContactCard({ href, icon, title, description, external }: ContactCardProps) {
  return (
    <Link href={href} target={external ? '_blank' : undefined} className="group bg-secondary hover:border-violet-600/50 flex items-center justify-between gap-4 rounded-md border border-zinc-800 p-4 transition-all duration-300 sm:p-5">
      <div className="flex min-w-0 items-center gap-4">
        {/* ICON */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600/10 text-violet-500">{icon}</div>

        {/* CONTENT */}
        <div className="min-w-0">
          <p className="truncate font-poppins text-base font-medium text-(--title) sm:text-lg">{title}</p>

          <span className="text block truncate text-sm">{description}</span>
        </div>
      </div>

      <ArrowUpRight className="shrink-0 text-zinc-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </Link>
  );
}

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-secondary default-shadow overflow-hidden rounded-md border border-zinc-800/50 transition-all duration-500 hover:-translate-y-2">
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">
        <Image src={project.thumbnail} alt={project.title} fill className="object-cover transition duration-700 hover:scale-105" />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-violet-600 px-4 py-2 text-sm text-white">{project.type}</span>
      </div>

      {/* CONTENT */}
      <div className="space-y-6 p-8">
        <div>
          <h3 className="mb-3 font-poppins text-2xl font-semibold text-(--title)">{project.title}</h3>

          <p className="text">{project.shortDescription}</p>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
              {tag}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" className="primary-btn">
              Ver projeto
            </Link>
          )}

          {project.repositoryUrl && (
            <Link href={project.repositoryUrl} target="_blank" className="header-link text">
              GitHub
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
