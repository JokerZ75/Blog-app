import Layout from "../layouts/layout";
import CreateBlog from "../components/ui/button";
import Blog from "../components/Blog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <Layout>
      <CreateBlog show={<FontAwesomeIcon className="w-[40px] h-[40px] fixed dark:bg-slate-900 bg-slate-400 rounded-full p-3 bottom-36 right-4 md:bottom-8 md:right-8 md:w-20 md:h-20"  icon={faPlus}/>} />
      <Blog Title="My first blog is a very cool blog" description="The first blog lots and lots of text The first blog lots and lots of text" />
      <Blog Title="My second blog" description="The second blog" />
    </Layout>
  );
}

export default Home;