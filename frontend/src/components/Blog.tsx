interface BlogProps {
    Title: string;
    description: string;
}

const blog = ({Title, description}:BlogProps) => {
    return (
        <div className="flex flex-col bg-slate-400 dark:bg-slate-800 mx-10 my-5 p-3 rounded-lg overflow-hidden">
            <h1 className="text-4xl font-bold text-center p-5 dark:bg-slate-700 bg-slate-300 mb-2 rounded">{Title}</h1>
            <p className="p-3 dark:bg-slate-600 bg-slate-200 rounded">{description}</p>
        </div>
    )
}

export default blog