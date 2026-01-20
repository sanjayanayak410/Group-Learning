import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../api/usersApi";

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // refresh users cache
      queryClient.invalidateQueries(["users"]);
    },
  });
};
