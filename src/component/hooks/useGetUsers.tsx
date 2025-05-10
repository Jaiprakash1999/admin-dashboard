import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetUsers = ({ currentPage = 1 }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      console.log(res.data);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    getUsers();
  }, [getUsers, currentPage]);

  return { users, isLoading };
};

export default useGetUsers;
