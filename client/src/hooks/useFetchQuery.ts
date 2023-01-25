import { IContact } from "../types/type";
import { QueryFunction, useQuery, UseQueryResult } from "@tanstack/react-query";

interface IProps {
  category: string;
  page?: number ;
  fetchApi: QueryFunction<unknown, any[]> | undefined;
}

const useFetchQuery = ({ category, fetchApi }: IProps) => {
  const { data = [], isLoading, isError } : UseQueryResult<IContact[], void> = useQuery({
    queryKey: [category],
    queryFn: fetchApi,
    staleTime: Infinity,
  });
  return { data, isLoading, isError };
};

export default useFetchQuery;
