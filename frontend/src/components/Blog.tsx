interface BlogProps {
  Title: string;
  description: string;
}

const blog = ({ Title, description }: BlogProps) => {
  return (
    <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:gap-2 flex flex-col duration-500 bg-slate-400 dark:bg-slate-800 mx-10 my-5 p-3 rounded-lg overflow-hidden">
      <div className="md:row-span-3 md:flex dark:bg-slate-700 bg-slate-300 rounded mb-2 md:mb-0 md:justify-center md:items-center ">
        <h1 className="text-4xl font-bold text-center p-5 mb-2 rounded">
          {Title}
        </h1>
      </div>
      <p className="p-3 md:row-span-2 dark:bg-slate-600 bg-slate-200 rounded">
        {description}
      </p>
      <button
        data-title={Title}
        className="bg-slate-100 dark:bg-slate-500 md:col-start-2 p-3 rounded-lg text-center mt-2 md:mt-0"
      >
        Read
      </button>
    </div>
  );
};

export default blog;
