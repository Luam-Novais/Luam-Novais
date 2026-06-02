'use client';
import { useState } from 'react';
import { ArrowDownToLine, FolderGit2, Home, Layers, Menu, Send, User, X } from 'lucide-react';
import useMedia from '../hooks/useMedia';
import Link from 'next/link';
import { ThemeSwitch } from './animated-components';
export default function Header() {
  const matches = useMedia('(max-width: 1024px)');

  if (matches) {
    return <HeaderMobile />;
  }
  return <HeaderDesktop />;
}

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  function handleOpen() {
    setIsOpen(true);

    setTimeout(() => {
      setShowNav(true);
    }, 700);
  }

  function handleClose() {
    setShowNav(false);

    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  }

  return (
    <header className="bg-primary flex justify-between items-center px-8 py-2">
      <h1 className="title">{'</>'}</h1>

      <button onClick={handleOpen} className="bg-secondary text p-3 rounded-md">
        <Menu />
      </button>

      {isOpen && (
        <>
          {/* <div className="overlay bg-violet-600" /> */}

          <nav
            className={`
              fixed inset-0 z-50
              bg-secondary
              flex flex-col gap-12
              text
              p-4
              transition-all duration-500
              ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}
          >
            <span className="flex justify-between">
              <h1>{'</>'}</h1>

              <button className="" onClick={handleClose}>
                <X size={22} />
              </button>
            </span>

            <div className="flex flex-col capitalize gap-14">
              <Link href={'/'} className="header-link" onClick={handleClose}>
                <Home />
                Home
              </Link>
              <Link href={'/about'} className="header-link" onClick={handleClose}>
                <User />
                Sobre
              </Link>
              <Link href={'/projects'} className="header-link" onClick={handleClose}>
                <FolderGit2 />
                Projetos
              </Link>
              <Link href={''} className="header-link" onClick={handleClose}>
                <Layers />
                Stack
              </Link>
              <Link href={''} className="header-link" onClick={handleClose}>
                <Send />
                Contato
              </Link>
            </div>

            <a href="" className="text-violet-50 bg-violet-600 px-4 w-fit py-2 rounded-md flex gap-2 items-center">
              Download CV
              <ArrowDownToLine size={20} />
            </a>
            <ThemeSwitch />
          </nav>
        </>
      )}
    </header>
  );
}

export function HeaderDesktop() {
  return (
    <header className="flex bg-primary justify-between items-center  px-8 md:px-10 py-2 w-full h-fit text">
      <h1 className="text-2xl font-bold!">{'</>'}</h1>
      <nav className="flex gap-10 items-center justify-between font-poppins">
        <Link href={'/'} className="header-link">
          <Home />
          Home
        </Link>
        <Link href={'/about'} className="header-link">
          <User />
          Sobre
        </Link>
        <Link href={'/projects'} className="header-link">
          <FolderGit2 />
          Projetos
        </Link>
        <Link href={''} className="header-link">
          <Layers />
          Stack
        </Link>
        <Link href={''} className="header-link">
          <Send />
          Contato
        </Link>
      </nav>
      <div className='flex justify-center items-center gap-2'>
        <a href="" className="text-violet-600 bg-violet-600/10 px-4 py-2 rounded-md flex gap-2 items-center">
          Download CV
          <ArrowDownToLine size={20} />
        </a>
        <ThemeSwitch />
      </div>
    </header>
  );
}
