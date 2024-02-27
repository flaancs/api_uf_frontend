"use client";
import { useUF } from "@/hooks/useUF";
import { UFValueCard } from "./UFValueCard";

export const UFSection = () => {
  const { date, loading, ufValue, formatedDate, handleChangeDate } = useUF();

  return (
    <section className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="w-full md:w-[20rem]">
        <input
          type="date"
          placeholder="Fecha"
          className="px-4 py-2 rounded-lg bg-slate-700 text-white !w-full"
          value={formatedDate}
          onChange={handleChangeDate}
        />
      </div>
      <UFValueCard date={date} ufValue={ufValue} loading={loading} />
    </section>
  );
};
