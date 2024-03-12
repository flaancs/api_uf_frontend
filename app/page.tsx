import Link from "next/link";
import { UFSection } from "@/components/UFSection";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

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
        <div className="flex gap-4 justify-center items-center mt-4">
          <Link
            target="_blank"
            href={`${BACKEND_URL}docs`}
            title="Documentación API UF"
            className=" text-white"
          >
            Documentación API
          </Link>
          <span className=" text-white">•</span>
          <Link
            target="_blank"
            href="https://github.com/flaancs/api_uf_backend"
            title="Documentación API UF"
            className=" text-white"
          >
            Github
          </Link>
        </div>
      </div>
    </main>
  );
}
