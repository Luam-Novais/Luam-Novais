'use client';
import { RiReactjsLine, RiJavascriptLine, RiNodejsLine, RiGitBranchLine } from 'react-icons/ri';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiNestjs, SiPostgresql, SiMysql } from 'react-icons/si';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import { Info } from 'lucide-react';
import { useState } from 'react';

export default function StackSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="default-layout">
      <div className="px-4 py-8">
        <Link className="title" href={`/`}>
          <MoveLeft />
        </Link>
      </div>
      <div className="mx-auto max-w-7xl  px-4 py-8 appear">
        <div className="mb-16">
          <span className="section-badge text">Tecnologias</span>

          <h2 className="title mt-4">Stack e ferramentas</h2>

          <p className="text mt-6 max-w-3xl text-lg">Tecnologias que utilizo para desenvolver aplicações modernas, escaláveis e focadas em performance.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <article key={tech.name} className="bg-secondary group default-shadow rounded-3xl border border-zinc-800/50 p-6 transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6 flex items-center justify-between">
                  <Icon size={42} className="text-violet-500" />

                  <button onClick={() => setSelected(selected === tech.name ? null : tech.name)} className="text-zinc-400 transition hover:text-violet-500">
                    <Info size={18} />
                  </button>
                </div>

                <h3 className="mb-2 font-poppins text-xl font-semibold text-(--title)">{tech.name}</h3>

                <span className="text text-sm text-violet-400">{tech.category}</span>

                {selected === tech.name && (
                  <div className="mt-5 border-t border-zinc-800 pt-4">
                    <p className="text text-sm leading-relaxed">{tech.description}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export const technologies = [
  {
    name: 'React',
    icon: RiReactjsLine,
    category: 'Frontend',
    description: 'Biblioteca JavaScript utilizada para criar interfaces modernas e reativas baseadas em componentes.',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    category: 'Frontend',
    description: 'Framework React que oferece SSR, SSG, rotas, otimizações e recursos para aplicações escaláveis.',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    category: 'Linguagem',
    description: 'Superset do JavaScript que adiciona tipagem estática e melhora a escalabilidade do código.',
  },
  {
    name: 'JavaScript',
    icon: RiJavascriptLine,
    category: 'Linguagem',
    description: 'Linguagem base da web utilizada tanto no frontend quanto no backend.',
  },
  {
    name: 'Node.js',
    icon: RiNodejsLine,
    category: 'Backend',
    description: 'Runtime JavaScript que permite executar aplicações fora do navegador.',
  },
  {
    name: 'Express',
    icon: SiExpress,
    category: 'Backend',
    description: 'Framework minimalista para construção de APIs e aplicações backend.',
  },
  {
    name: 'NestJS',
    icon: SiNestjs,
    category: 'Backend',
    description: 'Framework backend baseado em TypeScript com arquitetura escalável e modular.',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    category: 'Database',
    description: 'Banco de dados relacional avançado focado em robustez e performance.',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    category: 'Database',
    description: 'Banco de dados relacional amplamente utilizado em aplicações web.',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    category: 'Frontend',
    description: 'Framework CSS utility-first para criação rápida de interfaces modernas.',
  },
  {
    name: 'Git',
    icon: RiGitBranchLine,
    category: 'Ferramenta',
    description: 'Sistema de versionamento utilizado para controlar alterações e colaboração em projetos.',
  },
];
