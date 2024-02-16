
import Link from "next/link";
import prisma from "../../../lib/prisma";
import Notes from "./Notes";
import Categories from './../../components/Categories';
// import {
// MdAdd,
//   MdFavorite,
//   MdFlight,
//   MdNote,
//   MdPerson,
//   MdWork,
// } from "react-icons/md";

export default async function Home() {
  const entries = await prisma.entry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });


  return (
    <>
      <div className="container p-4">
        <div className="flex flex-row items-center justify-start text-gray-900 hover:text-white cursor-pointer mb-4">
          <div className="border border-gray-500 p-2">
            {/* <MdNote className="w-8 h-8 mb-2 " /> */}
          </div>
          <span className="text-md ml-3 font-semibold">All Notes</span>
        </div>
        <h2 className="text-lg font-semibold mb-2">Catogries</h2>

       <Categories entries={entries} />
        <Link
          href="/notes/add/create"
          className=" text-gray-800 px-4 py-4 rounded-full shadow-md bg-white hover:bg-blue-600 fixed bottom-16 right-4 border z-10 border-gray-400"
        >
          {/* <MdAdd className="w-6 h-6" /> */}
        </Link>
        {/* {entries.map((entry) => (
          <Notes key={entry.id} {...entry} />
        ))} */}
      </div>
    </>
  );
}
