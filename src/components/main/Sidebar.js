import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export const Sidebar = (props) => {
  const sidebar = [
    {
      path: "/",
      title: "Информация",
      icon: "far fa-receipt",
      exact: true,
    },
    {
      path: "/student-book",
      title: "Зачетка",
      icon: "far fa-book",
    },
    {
      path: "/iup",
      title: "ИУП",
      icon: "far fa-clipboard-list",
    },
    {
      path: "/payment",
      title: "Оплата",
      icon: "far fa-money-check-alt",
    },
    {
      path: "/e-ob",
      title: "Е-Обходной",
      icon: "far fa-laptop",
    },
  ];

  return (
    <div className="sidebar">
      Sidebarr
      <div className="sidebar-nav">
        {sidebar.map((item, index) => {
          return (
            <NavLink
              key={index}
              className="sidebar-item"
              activeClassName="active-sidebar-item"
              to={item.path}
              exact = {item.exact}
            >
              <div style={{display: 'flex'}}>
                <div className='sidebar-icons'><i className={item.icon} style={{ marginRight: "1rem", fontSize: '1.5rem'}}></i></div>
                {item.title}
              </div>
              <i className="far fa-long-arrow-alt-right sidebar-arrow"></i>
            </NavLink>
          ) 
        })}

        <NavLink
          className="sidebar-item"
          activeClassName="active-sidebar-item"
          style={{ marginTop: '4rem' }}
          to='/settings'
        >
          <div style={{ display: 'flex' }}>
            <div className='sidebar-icons'> <i className="far fa-book" style={{ marginRight: "1rem", fontSize: '1.5rem' }}></i> </div>
            Настройки
          </div>
          <i className="far fa-long-arrow-alt-right sidebar-arrow"></i>
        </NavLink>
      </div>
    </div>
  );
};
