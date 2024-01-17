import React from 'react';
import CourseCard from '@/components/Cards/CourseCard';
function CourseList() {
  return (
    <>
      <div className="flex">
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
}

export default CourseList;
