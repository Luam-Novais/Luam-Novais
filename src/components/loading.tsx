type LoadingProps = {
  text?: string;
};

export function Loading({ text = 'Carregando...' }: LoadingProps) {
  return (
    <div className="min-h-screen h-screen flex flex-col items-center justify-center gap-3 py-8 bg-primary text">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-300 border-t-violet-600" />
      <span className="text-sm text-zinc-500">{text}</span>
    </div>
  );
}
