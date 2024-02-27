import { formatDate } from "@/utils/date";

export interface UfValueCardProps {
  date: Date;
  ufValue: string | null;
  loading?: boolean;
}

export const UFValueCard = ({ date, ufValue, loading }: UfValueCardProps) => {
  if (!ufValue && !loading) return null;
  return (
    <div className="w-full md:w-[20rem] md:h-[12rem] py-4 bg-white shadow-md rounded-lg text-center flex flex-col justify-center items-center text-slate-600">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <h2 className="text-xl font-semibold">Valor de la UF</h2>
          <span className="text-sm">{formatDate(date)}</span>
          <p className="text-3xl font-bold mt-2 text-slate-800">$ {ufValue}</p>
        </>
      )}
    </div>
  );
};
