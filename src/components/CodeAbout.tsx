// export default function CodeAbout() {
//   return (
//     <div className="bg-zinc-900 h-1/2 shadow-2xl default-shadow rounded-2xl relative">
//       <div className="p-2 flex gap-1">
//         <span className="w-2 h-2 rounded-full bg-red-500" />
//         <span className="w-2 h-2 rounded-full bg-amber-500" />
//         <span className="w-2 h-2 rounded-full bg-green-600" />
//       </div>
//       <div className="px-8 py-4">
//         <span className="flex gap-2">
//           <p className="text-pink-600">const</p> <p className="text-green-300">Luam</p>
//           <p className="text-white">{'='}</p>
//           <span className="flex gap-2 text-pink-600">
//             new <p className="text-violet-600">Developer</p>
//             <p className="text-white">{'{'}</p>
//           </span>
//         </span>
//         <div className="px-8">
//           <Property name="name" value='"Luam pablo"' />
//           <div className="flex gap-2">
//             <p className="text-white">stack:</p>
//             <span className="flex text-white">
//               [<p className="text-amber-300">"Node.js"</p>,<p className="text-amber-300">"Next.js"</p>,<p className="text-amber-300">"React"</p>,<p className="text-amber-300">"Typescript"</p>,<p className="text-amber-300">"Tailwind"</p>, ]
//             </span>
//           </div>
//           <Property name="foco" value="Soluções escaláveis" />
//           <Property name="paixao" value="Código limpo e performance" />
//           <div className="flex gap-2">
//             <p className="text-white">disponibilidade:</p>
//             <p className="text-violet-400">true</p>,
//           </div>
//         </div>

//         <span className="text-white">{'}'}</span>
//       </div>
//     </div>
//   );
// }

// const Property = ({ name, value }: { name: string; value: string }) => {
//   return (
//     <div className="flex gap-2">
//       <p className="text-white">{name}:</p>
//       <p className="text-amber-300">{value}</p>,
//     </div>
//   );
// };
export default function CodeAbout() {
  return (
    <div className="bg-zinc-900 h-fit default-shadow overflow-hidden rounded-3xl border border-zinc-800/50">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-xs text-zinc-500">developer.ts</span>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-6 text-sm md:text-base">
        <code className="font-mono">
          <Line>
            <Keyword>const</Keyword> <Variable>luam</Variable> <Text>=</Text> <Keyword>new</Keyword> <ClassName>Developer</ClassName>
            <Text>{'({'}</Text>
          </Line>

          <Line indent>
            <Property>name</Property>
            <Text>: </Text>
            <String>"Luam Pablo"</String>,
          </Line>

          <Line indent>
            <Property>formation</Property>
            <Text>: </Text>
            <String>"Análise e Desenvolvimento de Sistemas"</String>,
          </Line>

          <Line indent>
            <Property>stack</Property>
            <Text>: [</Text>
            <String>"React"</String>, <String>"Next.js"</String>, <String>"Node.js"</String>, <String>"TypeScript"</String>, <String>"PostgreSQL"</String>
            <Text>]</Text>,
          </Line>

          <Line indent>
            <Property>focus</Property>
            <Text>: </Text>
            <String>"Aplicações escaláveis"</String>,
          </Line>

          <Line indent>
            <Property>experience</Property>
            <Text>: </Text>
            <String>"Projetos freelance"</String>,
          </Line>

          <Line indent>
            <Property>availableForWork</Property>
            <Text>: </Text>
            <Boolean>true</Boolean>,
          </Line>

          <Line>
            <Text>{'})'}</Text>
          </Line>
        </code>
      </pre>
    </div>
  );
}

function Line({ children, indent = false }: { children: React.ReactNode; indent?: boolean }) {
  return <div className={indent ? 'pl-6' : ''}>{children}</div>;
}

function Keyword({ children }: { children: React.ReactNode }) {
  return <span className="text-pink-500">{children}</span>;
}

function Variable({ children }: { children: React.ReactNode }) {
  return <span className="text-green-400">{children}</span>;
}

function ClassName({ children }: { children: React.ReactNode }) {
  return <span className="text-violet-400">{children}</span>;
}

function Property({ children }: { children: React.ReactNode }) {
  return <span className="text-sky-400">{children}</span>;
}

function String({ children }: { children: React.ReactNode }) {
  return <span className="text-amber-300">{children}</span>;
}

function Boolean({ children }: { children: React.ReactNode }) {
  return <span className="text-violet-500">{children}</span>;
}

function Text({ children }: { children: React.ReactNode }) {
  return <span className="text-zinc-300">{children}</span>;
}