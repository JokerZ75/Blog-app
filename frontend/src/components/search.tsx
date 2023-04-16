import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const searchArea = () => {
  return (
    <div className="sticky h-14 w-4/5 top-5 mx-auto mt-5">
      <div className="h-full w-full relative">
        <div className="absolute h-full w-full">
          <input
            className="h-full w-full p-5 bg-slate-200 text-black rounded dark:bg-slate-600 dark:text-white"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="absolute right-0">
          <FontAwesomeIcon className="mt-4 mr-5 h-6 w-6" icon={faMagnifyingGlass}/>
        </div>
      </div>
    </div>
  );
};

export default searchArea;
