import axios from "axios";
import { useCallback, useEffect, useState } from "react";

// Define a user type based on the API response
type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

// Define the structure of the API response
type ApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};

// Hook props
type UseGetUsersProps = {
  currentPage: number;
};

// Return value type
type UseGetUsersReturn = {
  users: ApiResponse | null;
  isLoading: boolean;
  error: string | null;
};

// Custom hook to fetch users from the API
const useGetUsers = ({
  currentPage = 1,
}: UseGetUsersProps): UseGetUsersReturn => {
  const [users, setUsers] = useState<ApiResponse>({
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Memoized function to fetch users
  const getUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get<ApiResponse>("https://reqres.in/api/users", {
        params: { page: currentPage },
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      setUsers(res.data);
      setError(null);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err?.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  // Trigger API call when currentPage changes
  useEffect(() => {
    getUsers();
  }, [getUsers, currentPage]);

  return { users, isLoading, error };
};

export default useGetUsers;
