export const sortCollection = <T, K extends keyof T>(
  data: T[],
  field: K,
  order: OrderType
): T[] => {
  return [...data].sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    if (valueA === valueB) return 0;

    if (order === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });
};

const regExp = /\B(?=(\d{3})+(?!\d))/g;

export const transformCellValue = (
  n: number,
  isFloatNumber?: boolean
): string => n.toFixed(isFloatNumber ? 2 : 0).replace(regExp, ",");
