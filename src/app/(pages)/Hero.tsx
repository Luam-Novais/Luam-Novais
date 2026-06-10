import { Braces, Mouse, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { PrimaryButton, SecondaryButton } from '../../components/Button';
import { ScrollBar } from '../../components/animated-components';
export default function Hero() {
  return (
    <section className="mt-8 flex flex-col relative  px-4 md:px-20 py-8 ">
      <div className="absolute -top-20 -left-10 h-64 w-64 rounded-full bg-violet-800/20 blur-3xl" />

      <div className="w-full flex flex-col gap-8 justify-center lg:grid lg:gap-12 appear">
        <div className="grid gap-2">
          <span className="text-violet-600 bg-violet-600/10 px-4 py-2 rounded-md w-fit h-fit text-xs flex gap-2">
            <Braces size={16} />
            <h3 className="font-medium font-inter">DESENVOLVEDOR FULLSTACK</h3>
          </span>
          <h1 className="title">
            Luam novais<span className="text-violet-600">.</span>
          </h1>
        </div>
        <p className="text w-full lg:w-3/4 text-base">
          Mais do que funcionalidades, construo <span className="font-bold title text-base! lowercase!">produtos bem projetados</span>. Aplicações rápidas, organizadas e preparadas para <span className="font-bold title text-base! lowercase!">crescer</span>.
        </p>

        <div className="flex gap-12 mt-12">
          <Link href={'/projects'} className="w-full md:w-fit">
            <PrimaryButton>
              ver projetos
              <MoveRight size={20} />
            </PrimaryButton>
          </Link>
        </div>
      </div>
      <ScrollBar />
    </section>
  );
}
