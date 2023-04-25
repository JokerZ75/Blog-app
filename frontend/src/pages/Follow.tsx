import Layout from "../layouts/layout";
import FollowingUsers from "../components/FollowingUsers";
import FollowingBlogs from "../components/FollowingBlogs";

const following = () => {
  return (
    <Layout>
      <FollowingUsers />
      <FollowingBlogs />
    </Layout>
  );
};

export default following;
