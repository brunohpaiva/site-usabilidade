export const formatCurrency = (value: number) => value.toLocaleString("pt-BR", {
  minimumFractionDigits: 2,
  style: "currency",
  currency: "BRL"
});