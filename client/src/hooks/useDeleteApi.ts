import {
  MutationFunction,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { IContact } from "../types/type";

interface IProps {
  category: string;
  page?: number;
  fetchApi:
    | MutationFunction<
        IContact|undefined,
        {
          id: number;
        }
      >
    | undefined;
}

const useDeleteApi = ({ category, fetchApi }: IProps) => {
  const queryClient = useQueryClient();
  const {
    mutate,
    isError,
    isLoading,
  }: UseMutationResult<IContact|undefined, void, { id: number }> = useMutation({
    mutationFn: fetchApi,
    // onError: (error, variables, { id }) => {
    //   console.log(`rolling back optimistic delete with id ${id}`);
    // },
    onSuccess: () => {
      queryClient.invalidateQueries([category]);
    },
  });
  return {
    mutate,
    isError,
    isLoading,
  };
};

export default useDeleteApi;
