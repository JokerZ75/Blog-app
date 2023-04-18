import Layout from "../layouts/layout";
import FollowingUsers from "../components/FollowingUsers";

const following = () => {
  return (
    <Layout>
      <FollowingUsers />
      <div>
        <h1>Blogs</h1>
      </div>
    </Layout>
  );
};

export default following;
