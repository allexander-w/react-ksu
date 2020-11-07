import React from "react";
import { MainLayout } from "../../layouts/MainLayout";
import "./Main.css";

export const Main = () => {
  const info = [
    {
      icon: "far fa-university",
      color: "#FE9497",
      title: "Факультет информационных технологий",
      subtitle: "Факультет",
    },
    {
      icon: "far fa-briefcase",
      color: "#A289DD",
      title: "Вычислительная техника и программное обеспечение",
      subtitle: "Специальность",
    },
    {
      icon: "far fa-users",
      color: "#428BF2",
      title: "19-201-42 / Рус",
      subtitle: "Учебная группа",
    },
  ];

  return (
    <MainLayout>
      <div className="main-date">
        <p>2020.01.23 Вторник</p>
        <p>2019-2020 учебный год</p>
      </div>

      <div className="main-head-title">
        <h3 className="page-title main-title">
          Личный кабинет студента / магитсранта
        </h3>
        <p className="page-txt">Привет, имя студента, желаем хорошего дня! s</p>
      </div>

      <div className="main-user">
        <div className="main-user-info">
          <div className="main-user-ava">
            <p>+</p>
          </div>

          <div className="main-user-information">
            <p className="main-user-name">Имя студента</p>
            <p className="main-user-course">Студент, 3-й курс</p>
          </div>
        </div>
      </div>

      <div className="main-student">
        <ul className="main-card-info">
          {info.map((item, index) => {
            return (
              <li key={index} className="main-card-item">
                <div
                  className="main-card-icon"
                  style={{ backgroundColor: item.color }}
                >
                  <i className={item.icon}> </i>
                </div>
                <div style={{ maxWidth: "27rem" }}>
                  <p>{item.title}</p>
                  <p className="main-card-text">{item.subtitle}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="main-card-money">
          <i className="far fa-credit-card card-icon"></i>
          <div className="main-card-block">
            <p className="main-card-title">2 000 000.00</p>
            <p className="main-card-subtitle">Остаток по оплате за год</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
