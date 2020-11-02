import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import './Main.css'

export const Main = () => {
  return (
    <MainLayout>
      <div className='main-date'>
        <p>2020.01.23 Вторник</p>
        <p>2019-2020 учебный год</p>
      </div>

      <div className='main-head-title'>
        <h3 className='page-title main-title'>Личный кабинет студента / магитсранта</h3>
        <p className='page-txt'>Привет, имя студента, желаем хорошего дня!</p>
      </div>

      <div className='main-user'>
        <div className='main-user-info'>
          <div className='main-user-ava'>
            <p>+</p>
          </div>
          
          <div className='main-user-information'>
            <p className='main-user-name'>Имя студента</p>
            <p className='main-user-course'>Студент, 3-й курс</p>
          </div>
        </div>
      </div>

      <div className='main-student'>
        <div className='main-card-info'>
          
        </div>
        <div className='main-card-money'>
          
        </div>
      </div>
    </MainLayout>
  )
}