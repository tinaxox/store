import { FilterIcon, SearchIcon } from "./Icons";

export function Filter() {
  return (
    <div className="flex justify-center items-center gap-3 mt-8 px-7">
      <div className="flex gap-4 relative max-w-[300px]">
        <input className="p-3 rounded-xl flex w-[70vw]" type="text" />
        <div className="flex gap-3 absolute top-[25%] left-[3%] justify-center items-center">
          <SearchIcon className="w-6 h-6 stroke-2 stroke-neutral-300" />
          <p className="text-zinc-400">Search</p>
        </div>
      </div>
      <div className="bg-neutral-800 max-w-min max-h-min p-3 rounded-xl flex justify-center items-center">
        <FilterIcon className=" stroke-white w-6 h-6" />
      </div>
    </div>
  );
}
