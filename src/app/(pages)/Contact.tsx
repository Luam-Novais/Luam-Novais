'use client';
import Link from 'next/link';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa6';
import { ContactCard } from '@/src/components/card';
export function ContactSection() {
  return (
    <section className="default-layout bg-secondary default-shadow relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-violet-800/20 blur-3xl" />

      {/* CONTENT */}
      <div className="relative grid gap-12 p-6 sm:p-8 md:p-12 xl:grid-cols-[1fr_420px] xl:gap-16">
        {/* LEFT */}
        <div className="flex flex-col gap-8">
          <div className="space-y-5 justify-self-center">
            <span className="text text-sm font-medium uppercase tracking-[0.25em] text-violet-500">Contato</span>

            <h2 className="title max-w-2xl leading-tight">Vamos construir algo incrível juntos.</h2>

            <p className="text max-w-2xl text-base leading-relaxed sm:text-lg">Estou disponível para projetos freelance, oportunidades fullstack e colaborações. Caso tenha uma ideia, produto ou negócio, podemos transformar isso em algo real.</p>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="mailto:seuemail@email.com" className="primary-btn justify-center sm:justify-start">
              Entrar em contato
              <FaWhatsapp size={16}/>
            </Link>

          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-primary flex flex-col gap-5 rounded-md border border-zinc-800/50 p-5 md:p-8 w-full">
          <div className="space-y-2 w-full">
            <h3 className="font-poppins text-2xl font-semibold text-(--title)">Redes e contato</h3>

            <p className="text text-sm sm:text-base">Você pode falar comigo por qualquer uma dessas plataformas.</p>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-4">
            <ContactCard href="mailto:seuemail@email.com" icon={<Mail size={20} />} title="Email" description="seuemail@email.com" />

            <ContactCard href="https://wa.me/5511999999999" icon={<MessageCircle size={20} />} title="WhatsApp" description="+55 (11) 99999-9999" external />

            <ContactCard href="https://github.com" icon={<FaGithub size={20} />} title="GitHub" description="github.com/seuuser" external />

            <ContactCard href="https://linkedin.com" icon={<FaLinkedin size={20} />} title="LinkedIn" description="linkedin.com/in/seuuser" external />
          </div>
        </div>
      </div>
    </section>
  );
}
