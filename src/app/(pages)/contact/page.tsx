'use client';
import { MoveLeft } from 'lucide-react';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa6';
import { ContactCard } from '@/src/components/card';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="default-layout bg-secondary default-shadow relative overflow-hidden">
      <div className="px-4 py-8 title z-50">
        <Link href={'/'}>
          <MoveLeft />
        </Link>
      </div>

      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-violet-800/20 blur-3xl" />

      <div className="relative px-4 py-12 flex flex-col gap-6 appear">
        <div className="flex flex-col gap-8">
          <div className="space-y-5 justify-self-center">
            <span className="section-badge text">Contato</span>

            <h2 className="title max-w-2xl leading-tight">Vamos construir algo incrível juntos.</h2>

            <p className="text max-w-2xl text-base leading-relaxed sm:text-lg">Estou disponível para projetos freelance, oportunidades fullstack e colaborações. Caso tenha uma ideia, produto ou negócio, podemos transformar isso em algo real.</p>
          </div>

            <Link href="mailto:seuemail@email.com" className="w-fit primary-btn justify-center sm:justify-start">
              Entrar em contato
              <FaWhatsapp size={16} />
            </Link>

        </div>

        <div className="bg-primary flex flex-col gap-5 rounded-md border border-zinc-800/50 p-5 md:p-8 w-full">
          <div className="space-y-2 w-full">
            <h3 className="font-poppins text-2xl font-semibold text-(--title)">Redes e contato</h3>

            <p className="text text-sm sm:text-base">Você pode falar comigo por qualquer uma dessas plataformas.</p>
          </div>

          <div className="flex flex-col gap-4">
            <ContactCard href="mailto:luampabl014@gmail.com" icon={<Mail size={20} />} title="Email" description="luampabl014@gmail.com" />

            <ContactCard href="https://wa.me/5524998763577" icon={<MessageCircle size={20} />} title="WhatsApp" description="+55 (24) 99876-3577" external />

            <ContactCard href="https://github.com/Luam-Novais" icon={<FaGithub size={20} />} title="GitHub" description="github.com/Luam-Novais" external />

            <ContactCard href="https://www.linkedin.com/in/luam-pablo-de-novais-carvalho-854330346/" icon={<FaLinkedin size={20} />} title="LinkedIn" description="linkedin.com/in/luam-pablo-de-novais-carvalho" external />
          </div>
        </div>
      </div>
    </section>
  );
}
