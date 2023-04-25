import { useMemo, useEffect, useReducer, useRef } from 'react';
import ProfilePicture from './profilePicture';
interface UserDisplayProps {
    username: string;
    image: string;
}


const userDisplay = (user: UserDisplayProps) => {
  return (
    <div className="flex flex-col items-center p-4 my-5">
      <div className="w-24 h-24">
        <ProfilePicture imageID={user.image}/>
      </div>
      <div className="text-lg">{user.username}</div>
    </div>
  );
};

export default userDisplay;