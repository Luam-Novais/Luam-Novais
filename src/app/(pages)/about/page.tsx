'use client';

import Image from 'next/image';
import { Code2, Database, Server, Rocket,  MoveLeft} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="default-layout">
      {/* HERO */}
      <div className="px-4 py-8">
        <Link className="title" href={`/`}>
          <MoveLeft />
        </Link>
      </div>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[420px_1fr] lg:items-center">
          {/* FOTO */}
          {/* <div className="mx-auto">
            <div className="bg-secondary default-shadow overflow-hidden rounded-[32px] border border-zinc-800/50">
              <Image src="/me.png" alt="Luam Pablo" width={420} height={520} className="h-full w-full object-cover" />
            </div>
          </div> */}

          {/* TEXTO */}
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="text font-medium uppercase tracking-[0.2em] text-violet-500">Sobre mim</span>

              <h1 className="title">Desenvolvedor Fullstack focado em criar produtos que unem experiência e performance.</h1>

              <p className="text text-lg leading-relaxed">Sou desenvolvedor Fullstack formado em Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e pela criação de soluções que resolvem problemas reais. Ao longo da minha trajetória, desenvolvi projetos freelance para diferentes necessidades de negócio, transformando ideias em aplicações modernas e funcionais.</p>

              <p className="text text-lg leading-relaxed">Meu foco é desenvolver sistemas modernos, escaláveis e bem estruturados, sempre buscando evoluir tanto tecnicamente quanto na forma como entrego valor através do software.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8 text-center">
            <span className="text font-medium uppercase tracking-[0.2em] text-violet-500">Minha história</span>

            <h2 className="title">Uma jornada movida por curiosidade.</h2>

            <div className="space-y-6">
              <p className="text text-lg leading-relaxed">Minha entrada na programação começou pela curiosidade de entender como aplicações funcionavam por trás das telas. Com o tempo, essa curiosidade se transformou em uma paixão por desenvolvimento de software.</p>

              <p className="text text-lg leading-relaxed">Desde então venho estudando arquitetura de software, desenvolvimento backend, interfaces modernas e boas práticas de engenharia para construir aplicações cada vez mais completas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text font-medium uppercase tracking-[0.2em] text-violet-500">Especialidades</span>

            <h2 className="title mt-4">O que eu gosto de construir</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <SkillCard icon={<Code2 />} title="Frontend" description="Interfaces modernas utilizando React, Next.js e TypeScript." />

            <SkillCard icon={<Server />} title="Backend" description="APIs escaláveis com Node.js, Express e Fastify." />

            <SkillCard icon={<Database />} title="Banco de Dados" description="Modelagem, Prisma ORM, PostgreSQL e SQLite." />

            <SkillCard icon={<Rocket />} title="Arquitetura" description="Código organizado, manutenção simples e escalabilidade." />
          </div>
        </div>
      </section>

      {/* JORNADA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <span className="text font-medium uppercase tracking-[0.2em] text-violet-500">Jornada</span>

            <h2 className="title mt-4">Minha evolução na programação</h2>
          </div>

          <div className="space-y-8">
            <TimelineItem year="2024" title="Frontend" description="React, TypeScript, TailwindCSS e construção de interfaces." />

            <TimelineItem year="2025" title="Fullstack" description="Node.js, bancos de dados e arquitetura de aplicações." />

            <TimelineItem year="Hoje" title="Especialização" description="Aprofundamento em backend, escalabilidade e engenharia de software." />
          </div>
        </div>
      </section>
    </main>
  );
}

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <article className="bg-secondary default-shadow rounded-[28px] border border-zinc-800/50 p-8">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/10 text-violet-500">{icon}</div>

      <h3 className="mb-4 font-poppins text-xl font-semibold text-[var(--title)]">{title}</h3>

      <p className="text">{description}</p>
    </article>
  );
}

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
};

function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="bg-secondary rounded-[24px] border border-zinc-800/50 p-6">
      <span className="font-poppins text-sm font-medium text-violet-500">{year}</span>

      <h3 className="mt-2 text-xl font-semibold text-[var(--title)]">{title}</h3>

      <p className="text mt-3">{description}</p>
    </div>
  );
}
