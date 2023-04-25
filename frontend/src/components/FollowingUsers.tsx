import { useEffect, useState, useMemo } from 'react';
import UserDisplay from "./ui/userDisplay";

const followedUsers = () => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("http://localhost:8008/users/displayInfo", { signal })
      .then((res) => res.json())
      .then((usersData) => {
        setUsers(usersData);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
            console.log("Aborted");
        } else {
          throw err;
        }
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="bg-slate-300 dark:bg-slate-800 m-5 mb-0 rounded-t p-5">
      <h2 className="text-3xl font-bold">Users</h2>
      <div className="flex overflow-x-scroll">
        {users.map((user: any) => {
          return (
            <UserDisplay
              key={user.username}
              username={user.username}
              image={user.profileImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default followedUsers;
