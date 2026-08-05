import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Site de Estudos com IA</h1>
      <p className="mt-4">Escolha uma disciplina e comece a estudar com um tutor por IA.</p>
      <div className="mt-6">
        <Link href="/topics"><a className="px-4 py-2 bg-blue-600 text-white rounded">Ver Tópicos</a></Link>
      </div>
    </main>
  );
}
