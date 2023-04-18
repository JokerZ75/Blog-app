import { useMemo, useEffect } from 'react';
interface UserDisplayProps {
    username: string;
    image: any;
}


const userDisplay = (user: UserDisplayProps) => {
  return (
    <div className="flex flex-col items-center p-4 my-5">
      <div className="w-24 h-24">
        <img className="w-24 h-24 rounded-full" src={user.image} alt="A users profile icon" />
      </div>
      <div className="text-lg">{user.username}</div>
    </div>
  );
};

export default userDisplay;