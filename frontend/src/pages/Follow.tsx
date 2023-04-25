import Layout from "../layouts/layout";
import FollowingUsers from "../components/FollowingUsers";
import FollowingBlogs from "../components/FollowingBlogs";

const following = () => {
  return (
    <Layout>
      <FollowingUsers />
      <div className="m-5 p-5 py-1 dark:bg-slate-800 bg-slate-300 my-[-1px] flex justify-center">
        <div className="w-10/12 h-1 my-2 transition-colors duration-700 dark:bg-slate-50 bg-slate-900"></div>
      </div>
      <FollowingBlogs />
    </Layout>
  );
};

export default following;
