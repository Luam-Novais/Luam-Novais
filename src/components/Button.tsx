export function SecondaryButton({ children }: { children: React.ReactNode }) {
  return <button className="border border-violet-400 px-12 py-2 text-violet-400 rounded-md uppercase flex items-center justify-center w-fit default-shadow transition duration-300">{children}</button>;
}
export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return <button className="primary-btn bg-violet-600 text-violet-50 flex justify-center items-center w-full md:w-fit"> {children}</button>;
}
