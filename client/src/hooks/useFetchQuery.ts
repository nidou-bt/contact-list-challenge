import { IContact } from "@/types/type";
import { QueryFunction, useQuery, UseQueryResult } from "@tanstack/react-query";

interface IProps {
  category: string;
  page?: number ;
  fetchApi: QueryFunction<unknown, any[]> | undefined;
}

const useFetchQuery = ({ category, page = 1, fetchApi }: IProps) => {
  const { data, isLoading, isError } : UseQueryResult<IContact[], void> = useQuery({
    queryKey: [category, page],
    queryFn: fetchApi,
    staleTime: Infinity,
  });
  return { data, isLoading, isError };
};

export default useFetchQuery;
