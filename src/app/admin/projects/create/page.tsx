'use client';
import { useFieldArray, useForm } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import { Input } from '@/src/components/Input';
import type { ProjectDTO } from '@/src/types/project.d.ts';

enum ProjectType {
  fullstack = 'fullstack',
  frontend = 'frontend',
  backend = 'backend',
}
export default function CreateProjectPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProjectDTO>({
    defaultValues: {
      featured: false,
      type: ProjectType.fullstack,
      images: [{ file: undefined as any }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'images',
  });

  async function onSubmit(data: ProjectDTO) {
    const payload = {
      ...data,
      tags: data.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    // Exemplo:
    // await fetch("/api/projects", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // })
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Criar Projeto</h1>
          <p className="text-zinc-400 mt-2">Adicione um novo projeto ao portfólio</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TITLE */}
            <Input
              type="text"
              label="Título"
              register={register('title', {
                required: 'Título obrigatório',
              })}
              placeholder="Meu projeto"
            />

            {/* SLUG */}
            <Input
              type="text"
              label="Slug"
              placeholder="meu-projeto"
              register={register('slug', {
                required: 'Slug obrigatório',
              })}
            >
              {errors.slug && <span className="text-sm text-red-400">{errors.slug.message}</span>}
            </Input>
          </div>

          {/* SHORT DESCRIPTION */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Descrição curta</label>

            <textarea
              {...register('shortDescription', {
                required: 'Descrição curta obrigatória',
              })}
              rows={3}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-violet-500"
              placeholder="Resumo rápido do projeto..."
            />

            {errors.shortDescription && <span className="text-sm text-red-400">{errors.shortDescription.message}</span>}
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Descrição completa</label>

            <textarea
              {...register('description', {
                required: 'Descrição obrigatória',
              })}
              rows={8}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-violet-500"
              placeholder="Detalhes completos do projeto..."
            />

            {errors.description && <span className="text-sm text-red-400">{errors.description.message}</span>}
          </div>

          {/* THUMBNAIL */}
          <Input
            type="file"
            label="Thumbnail URL"
            placeholder="https://..."
            register={register('thumbnail', {
              required: 'Thumbnail obrigatória',
            })}
          >
            {errors.thumbnail && <span className="text-sm text-red-400">{errors.thumbnail.message}</span>}
          </Input>
          {/* TAGS */}
          <Input type="text" label="Tags" placeholder='"react, nextjs, typescript"' register={register('tags')}>
            <p className="text-xs text-zinc-500">Separe as tags por vírgula</p>
          </Input>
          {/* URLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" label="Repositório" placeholder="https://github.com/..." register={register('repositoryUrl')} />
            <Input type="text" label="Deploy" placeholder="https://..." register={register('liveUrl')} />
          </div>

          {/* TYPE + FEATURED */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Tipo</label>

              <select {...register('type')} className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-violet-500">
                <option value={ProjectType.fullstack}>Fullstack</option>
                <option value={ProjectType.frontend}>Frontend</option>
                <option value={ProjectType.backend}>Backend</option>
              </select>
            </div>

            <div className="flex items-center gap-3 pt-8">
              <input type="checkbox" {...register('featured')} className="h-5 w-5 rounded border-zinc-700 bg-zinc-900" />

              <label className="text-sm font-medium">Projeto em destaque</label>
            </div>
          </div>

          {/* IMAGES */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Imagens do projeto</h2>

              <button
                type="button"
                onClick={() =>
                  append({
                    file: undefined as any,
                  })
                }
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium hover:bg-violet-500 transition"
              >
                <Plus size={16} />
                Adicionar imagem
              </button>
            </div>

            <div className="space-y-3">
              {fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-[1fr_50px] gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    {...register(`images.${index}.file`, {
                      required: 'Imagem obrigatória',
                    })}
                    className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 file:mr-4 file:rounded-lg file:border-0 file:bg-violet-600 file:px-4 file:py-2 file:text-white hover:file:bg-violet-500"
                  />

                  <button type="button" onClick={() => remove(index)} className="rounded-xl border border-zinc-800 px-4 hover:bg-zinc-900 transition">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SUBMIT */}
          <button type="submit" disabled={isSubmitting} className="w-full rounded-2xl bg-violet-600 py-4 font-semibold hover:bg-violet-500 transition disabled:opacity-50">
            {isSubmitting ? 'Criando projeto...' : 'Criar projeto'}
          </button>
        </form>
      </div>
    </main>
  );
}
