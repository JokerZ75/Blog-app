import Layout from "../layouts/layout";
import UserDisplay from "../components/ui/userDisplay";
import { useEffect, useState } from "react";
import profilePicture from "../components/ui/profilePicture";
import userDisplay from "../components/ui/userDisplay";

const profile = () => {
  const [loggedUser, userDisplay] = useState();
  return (
    <Layout>
      <div className="dark:bg-slate-700 m-5 rounded-lg bg-slate-300">
        <div className="float-left absolute md:float-none md:m-10">
          <UserDisplay username="" image="64389336dc90e8c795be74f7" />
        </div>
        <div id="information" className="pt-5 text-center">
          <h2 className="p-5 text-lg font-bold">General</h2>
          <p className="pb-3 pl-12">Username:</p>
          <p className="pl-4">Email:</p>
        </div>
        <div className="text-center">
        <h2 className="p-5 pl-7 text-lg font-bold">Security</h2>
          <p className="pb-3 pl-12">Change Password</p>
        </div>
      </div>
    </Layout>
  );
};

export default profile;
