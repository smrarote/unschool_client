import React from 'react';
import dsa from '@assets/imgs/dsa.jpeg';
function CourseCard() {
  const course = {
    name: 'Data Structures & Algorithms',
    thumbnail: dsa,
    description: 'Comprehensive Datastrucutres and algorithms course from 0 to hero',
    tag: 'DSA',
  };
  return (
    <>
      <div className="flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={course.thumbnail} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">{course.name}</p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">$95.00</p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">{course.description}</p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
