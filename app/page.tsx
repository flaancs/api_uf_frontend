import { UFSection } from "@/components/UFSection";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col justify-center px-8">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-thin">API UF</h1>
          <h2 className="font-thin">
            Consulta los valores de UF en base a una fecha en especifico
          </h2>
        </div>
        <UFSection />
      </div>
    </main>
  );
}
