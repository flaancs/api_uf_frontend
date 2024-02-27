import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const useUF = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [ufValue, setUfValue] = useState<string | null>(null);

  const formatedDate = useMemo(() => date?.toISOString().split("T")[0], [date]);

  useEffect(() => {
    setLoading(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    axios
      .get(`${apiUrl}uf-value/${formatedDate}`)
      .then((response) => {
        const { uf_value } = response?.data;
        setUfValue(uf_value || null);
      })
      .catch((error) => {
        const { detail } = error?.response?.data;
        toast.warning(
          detail || "Ocurrió un error al obtener el valor de la UF"
        );
        setUfValue(null);
      })
      .finally(() => setLoading(false));
  }, [formatedDate]);

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(event.target.value));
  };

  return {
    date,
    loading,
    ufValue,
    formatedDate,
    handleChangeDate,
  };
};
