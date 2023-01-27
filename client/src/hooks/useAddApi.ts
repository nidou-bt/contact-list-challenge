import {
  MutationFunction,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { IContact } from "types/type";

interface IProps {
  category: string;
  fetchApi: MutationFunction<IContact | undefined, IContact & { file?: File }>;
}

const useAddApi = ({ category, fetchApi }: IProps) => {
  const queryClient = useQueryClient();
  const {
    mutate,
    isError,
    isLoading,
  }: UseMutationResult<IContact | undefined, void, IContact & { file?: File }> = useMutation({
    mutationFn: fetchApi,
    mutationKey: [category],
    // onError: (error, variables, { id }) => {
    //   console.log(`rolling back optimistic delete with id ${id}`);
    // },
    onSuccess: (data, variables, context) => {
      setTimeout(() => {
        if (data) {
          queryClient.setQueryData<IContact[]>([category], (oldQueryData) => {
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
