import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetUsers = ({ currentPage = 1 }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://reqres.in/api/users", {
        params: {
          page: currentPage,
        },
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      setUsers(res.data);
      setError(null);
    } catch (error) {
      setError(error.error);
      console.log(error, "error");
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);
  // useCallback is used to memoize the function so that it doesn't get recreated on every render

  useEffect(() => {
    getUsers();
  }, [getUsers, currentPage]);

  return { users, isLoading, error };
};

export default useGetUsers;
