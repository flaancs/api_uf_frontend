export const formatDate = (date: Date): string => {
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.getTime() + userTimezoneOffset);
  return adjustedDate.toLocaleString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
