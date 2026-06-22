import { prisma } from '@/src/config/prisma';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  const projects = await prisma.project.findMany();
  return Response.json(projects);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body)
    const projectCreated = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        shortDescription: body.shortDescription,
        slug: body.slug,
        thumbnail: body.thumbnail,
        type: body.type,
        liveUrl: body.liveUrl,
        repositoryUrl: body.repositoryUrl,
        featured: body.featured,
        tags: body.tags
      },
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.log(error)
    return Response.json({ok: false, data: 'falha ao criar projeto.'})
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
     const {id} = await request.json();

     const projectDeleted = await prisma.project.delete({
      where:{
        id: id
      }
     })
    return Response.json({ ok: true, data: 'projeto excluido com sucesso.' });

  } catch (error) {
    return Response.json({ ok: false, data: 'falha ao excluir projeto.' });
  }
}