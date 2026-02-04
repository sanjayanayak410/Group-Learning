import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/usersApi";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 10000, // data fresh for 10 sec
    cacheTime: 30000, // cache stays 30 sec
  });
};
