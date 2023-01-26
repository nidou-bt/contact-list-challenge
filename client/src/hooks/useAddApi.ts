import {
  MutationFunction,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { IContact } from "../types/type";

interface IProps {
  category: string;
  fetchApi: MutationFunction<IContact | undefined, IContact & { picture: File }>;
}

const useAddApi = ({ category, fetchApi }: IProps) => {
  const queryClient = useQueryClient();
  const {
    mutate,
    isError,
    isLoading,
  }: UseMutationResult<IContact | undefined, void, IContact & { picture: File }> = useMutation({
    mutationFn: fetchApi,
    // onError: (error, variables, { id }) => {
    //   console.log(`rolling back optimistic delete with id ${id}`);
    // },
    mutationKey: [category],
    onSuccess: (data, variables, context) => {
      setTimeout(() => {
        if (data) {
          queryClient.setQueryData<IContact[]>(["contact"], (oldQueryData) => {
            if (oldQueryData) {
              return [...oldQueryData, data];
            } else {
              return [data];
            }
          });
        }
      }, 1000);
    },
  });
  return {
    mutate,
    isError,
    isLoading,
  };
};

export default useAddApi;
