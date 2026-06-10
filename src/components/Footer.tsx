'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, Heart } from 'lucide-react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa6';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
  {
    label: 'Sobre',
    href: '/about',
  },
  {
    label: 'Contato',
    href: '/contact',
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/seuuser',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/seuuser',
  },
  {
    icon: Mail,
    href: 'mailto:luampabl014@gmail.com',
  },
];

export function Footer() {
  return (
    <footer className="bg-primary border-t border-zinc-800/50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        {/* TOP */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <div className="max-w-xl space-y-6">
            <div className="space-y-4">
              <span className="font-poppins text-3xl font-semibold text-(--title)">luam.dev</span>

              <p className="text text-base leading-relaxed sm:text-lg">Desenvolvendo aplicações modernas, performáticas e escaláveis com foco em experiência do usuário e arquitetura fullstack.</p>
            </div>

            {/* CTA */}
            <Link href="mailto:luampabl014@gmail.com" className="primary-btn w-fit justify-center sm:justify-start">
              Vamos conversar
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {/* NAVIGATION */}
            <div className="space-y-5">
              <h3 className="font-poppins text-lg font-medium text-(--title)">Navegação</h3>

              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link key={link.label} href={link.href} className="header-link text w-fit">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* SOCIAL */}
            <div className="space-y-5">
              <h3 className="font-poppins text-lg font-medium text-(--title)">Redes sociais</h3>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <Link key={index} href={social.href} target="_blank" className="bg-secondary hover:border-violet-600/50 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 transition-all duration-300 hover:-translate-y-1">
                      <Icon size={22} className="text-(--title)" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-zinc-800/50" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text flex items-center justify-center gap-2 text-sm sm:justify-start">
            © {new Date().getFullYear()} luam.dev — Desenvolvido com
            <Heart size={16} className="fill-violet-500 text-violet-500" />
          </p>

          <p className="text text-sm">Next.js • TypeScript • TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
}
