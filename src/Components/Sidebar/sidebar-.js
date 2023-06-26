sidebar 


import React, { useState } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import hrlogo from '../../assets/HRimg.png';
import Svgicons from '../../assets/Svgicons';
import SignOut from '../../assets/Images/SignOut.png';

const Sidebar = () => {
  const [slideshow, setSlideshow] = useState(false);
  const [slideshow2, setSlideshow2] = useState(false);

  const SlideShow = () => {
    setSlideshow(!slideshow);
  };
  const SlideShow2 = () => {
    setSlideshow2(!slideshow2);
  };

  const LogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={hrlogo} alt="hrcore-logo" />
      </div>
      <p className="sidebar__heading">Menu</p>
      <ul className="sidebar__menu ">
        <li className="sidebar__list ">
          <NavLink to="/employee" className="">
            <Svgicons action="dir" />
            <span className="prespace">dashboard</span>
          </NavLink>
        </li>
        <li className="sidebar__list  ">
          <div className="second-list" onClick={SlideShow}>
            <div className="sidebar__list--left">
              <Svgicons action="request" />
              <span className="prespace">request</span>
            </div>
            <div className="sidebar__list--right">23</div>
          </div>
          {slideshow && (
            <ul className="sidebar__submenu">
              <li className="sidebar__submenu-item">
                <NavLink to="/employee/leave/request">my request</NavLink>
              </li>
              <li className="sidebar__submenu-item">
                <NavLink to="submenu">profile</NavLink>
              </li>
              <li className="sidebar__submenu-item">
                <NavLink to="submenu">sub menue</NavLink>
              </li>
              <li className="sidebar__submenu-item">
                <NavLink to="submenu">exit</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="sidebar__list">
          <div className="second-list" onClick={SlideShow2}>
            <div className="sidebar__list--left">
              <Svgicons action="employee" />
              <span className="prespace">employee</span>
            </div>
            <div className="sidebar__list--right2">
              <Svgicons action="arrow" className="arrow" />
            </div>
          </div>
          {slideshow2 && (
            <ul className="sidebar__submenu">
              <li className="sidebar__submenu-item">
                <NavLink to="directory">directory</NavLink>
              </li>
              <li className="sidebar__submenu-item">
                <NavLink to="profile">profile</NavLink>
              </li>
              <li className="sidebar__submenu-item">
                <NavLink to="audit">audit</NavLink>
              </li>
              <li className="sidebar__submenu-item">
                <NavLink to="onboarding">onboarding</NavLink>
              </li>
              <li className="sidebar__submenu-item">
                <NavLink to="offboarding">offboarding</NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar__list">
          <button className="flex items-center" onClick={LogOut}>
            <img src={SignOut} alt="" />
            <span> log out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
