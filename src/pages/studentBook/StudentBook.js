import React, { useState } from "react";

import { MainLayout } from "../../layouts/MainLayout";
import "./StudentBook.css";

export const StudentBook = (props) => {
  
  const [courses, setCources] = useState([
    {
      title: "Первый курс",
      active: true,
      id: 0,
    },
    {
      title: "Второй курс",
      active: false,
      id: 1,
    },
    {
      title: "Третий курс",
      active: false,
      id: 2,
    },
    {
      title: "Четвертый курс",
      active: false,
      id: 3,
    },
  ]);

  const [semesters, setSemesters] = useState([
    {
      title: "Первый семестр",
      active: true,
      id: 0,
    },
    {
      title: "Второй семестр",
      active: false,
      id: 1,
    },
  ]);

  const changeCourse = id => {
      setCources( courses.map(item => {
          if( item.id === id ) {
              return { ...item , active: true}
          }
          return { ...item, active: false }
      }) )
  }

  return (
    <MainLayout>
      <div className="main-date">
        <p>Группа: 18-201-42 / Рус</p>
        <p>
          5B070400/6B06103 - Вычислительная техника и программное обеспечение (4
          г.)
        </p>
      </div>

      <div className="main-head-title">
        <h3 className="page-title main-title">Зачетная книжка</h3>
        <p className="page-txt">
          Электронная зачетная книжка студента / магистранта
        </p>
      </div>

      <div className="stbook-table-header">
        <ul className="stbook-table-course-nav">
          {courses.map((item, index) => {
            return (
              <li
                key={index}
                className={item.active ? "stbook-table-course-item" : null}
                onClick= { () => {changeCourse(item.id)} }
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <ul className="stbook-table-course-nav">
          {semesters.map((item, index) => {
            return (
              <li
                key={index}
                className={item.active ? "stbook-table-course-item" : null}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>

    </MainLayout>
  );
};
