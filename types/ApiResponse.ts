export type ApiResponse<T> = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: ({ id: string } & T)[];
};
