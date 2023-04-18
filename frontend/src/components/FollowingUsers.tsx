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
        usersData.forEach((user: any) => {
          fetch(`http://localhost:8008/images/byid/${user.profileImage}`, {
            signal,
          })
            .then((res) => res.json())
            .then((data) => {
              // Set Users adding the image to its user json
              setUsers((users: any) => [
                ...users,
                { ...user, profileImage: data.base64Data },
              ]);
            });
        });
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          throw err;
        }
      });
    return () => {
      controller.abort();
    };
  }, []);

  useMemo(() => {

  }, [])

  return (
    <div className="bg-slate-300 dark:bg-slate-800 m-5 rounded-t p-5">
      <h2 className="text-3xl font-bold">Users</h2>
      <div id='contains' className="flex overflow-x-scroll">
        {users.map((user: any) => {
          return (
            <UserDisplay
              key={user.username}
              username={user.username}
              image={"data:image/jpeg;base64," + user.profileImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default followedUsers;
