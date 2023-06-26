import React, { useState } from 'react';
import './sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import hrlogo from '../../assets/HRimg.png';
import Svgicons from '../../assets/Svgicons';
import SignOut from '../../assets/Images/SignOut.png';
import { useNavigate } from 'react-router-dom';

import CalendarCheck from '../../assets/CalendarCheck.png';

export const SidebarAdmin = () => {
  const navigate = useNavigate();

  const [slideshow, setSlideshow] = useState(false);
  const [slideshow2, setSlideshow2] = useState(false);
  const [slideshow3, setSlideshow3] = useState(false);
  const [slideshow4, setSlideshow4] = useState(false);
  const [slideshow5, setSlideshow5] = useState(false);
  const [slideshow6, setSlideshow6] = useState(false);
  const SlideShow = () => {
    setSlideshow(!slideshow);
  };
  const SlideShow2 = () => {
    setSlideshow2(!slideshow2);
  };
  const SlideShow3 = () => {
    setSlideshow3(!slideshow3);
  };
  const SlideShow4 = () => {
    setSlideshow4(!slideshow4);
  };
  const SlideShow5 = () => {
    setSlideshow5(!slideshow5);
  };
  const SlideShow6 = () => {
    setSlideshow6(!slideshow6);
  };

  const LogOut = (e) => {
    localStorage.clear();
    window.location('/');
    // return navigate('/auth/adminlogin');

    // if (localStorage.getItem('rememberMe') === 'true') {
    //    navigate('/auth/adminss');
    // } else {
    //   localStorage.clear();
    // }

    // sessionStorage.clear();
    // window.location.reload();
  };
  return (
    <div className="sidebar">
      <div className="up">
        <div className="sidebar__logo">
          <img src={hrlogo} alt="hrcore-logo" />
        </div>
        <p className="sidebar__heading">Menu</p>

        <ul className="sidebar__menu ">
          <li className="sidebar__list ">
            <NavLink to="/" className="">
              <Svgicons action="dir" />
              <span className="prespace">dashboard</span>
            </NavLink>
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
                  {/* <NavLink to="/admin/directory">directory</NavLink> */}
                </li>
                <li className="sidebar__submenu-item">
                  <NavLink to="#">profile</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar__list  ">
            <div className="second-list" onClick={SlideShow}>
              <div className="sidebar__list--left">
                <Svgicons action="calendar" />
                <span className="prespace">Leave</span>
              </div>
              <div className="sidebar__list--right">23</div>
            </div>
            {slideshow && (
              <ul className="sidebar__submenu">
                <li className="sidebar__submenu-item flexing">
                  <NavLink to="/admin/leave">
                    <div className="flexing-left">Manage</div>
                    <div className="flexing-right">196</div>
                  </NavLink>
                </li>
                <li className="sidebar__submenu-item">
                  {/* <NavLink to="submenu">
                    <div className="flexing-left">My request</div>
                    <div className="flexing-right">4</div>
                  </NavLink> */}
                </li>
              </ul>
            )}
          </li>

          {/* <li className="sidebar__list">
            <div className="second-list" onClick={SlideShow3}>
              <div className="sidebar__list--left">
                <Svgicons action="payroll" />
                <span className="prespace">payroll</span>
              </div>
              <div className="sidebar__list--right2">
                <Svgicons action="arrow" className="arrow" />
              </div>
            </div>
            {slideshow3 && (
              <ul className="sidebar__submenu">
                <li className="sidebar__submenu-item">
                  <NavLink to="directory">menu</NavLink>
                </li>
                <li className="sidebar__submenu-item">
                  <NavLink to="profile">menu2</NavLink>
                </li>
                <li className="sidebar__submenu-item">
                  <NavLink to="audit">menu3</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar__list">
            <div className="second-list" onClick={SlideShow4}>
              <div className="sidebar__list--left">
                <Svgicons action="recruit" />
                <span className="prespace">recruitment</span>
              </div>
              <div className="sidebar__list--right2">
                <Svgicons action="arrow" className="arrow" />
              </div>
            </div>
            {slideshow4 && (
              <ul className="sidebar__submenu">
                <li className="sidebar__submenu-item">
                  <NavLink to="directory">menu</NavLink>
                </li>
                <li className="sidebar__submenu-item">
                  <NavLink to="profile">menu2</NavLink>
                </li>
                <li className="sidebar__submenu-item">
                  <NavLink to="audit">menu3</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar__list">
            <div className="second-list" onClick={SlideShow5}>
              <div className="sidebar__list--left">
                <Svgicons action="requests" />
                <span className="prespace">request</span>
              </div>
              <div className="sidebar__list--right2">
                <Svgicons action="arrow" className="arrow" />
              </div>
            </div>
            {slideshow5 && (
              <ul className="sidebar__submenu">
                <li className="sidebar__submenu-item">
                  <NavLink to="directory">menu</NavLink>
                </li>
                <li className="sidebar__submenu-item">
                  <NavLink to="profile">menu2</NavLink>
                </li>
                <li className="sidebar__submenu-item">
                  <NavLink to="audit">menu3</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar__list">
            <div className="second-list" onClick={SlideShow6}>
              <div className="sidebar__list--left">
                <Svgicons action="performance" />
                <span className="prespace">performance</span>
              </div>
              <div className="sidebar__list--right2">
                <Svgicons action="arrow" className="arrow" />
              </div>
            </div>
            {slideshow6 && (
              <ul className="sidebar__submenu">
                <li className="sidebar__submenu-item">
                  <NavLink to="directory">menu</NavLink>
                </li>
                <li className="sidebar__submenu-item">
                  <NavLink to="profile">menu2</NavLink>
                </li>
                <li className="sidebar__submenu-item">
                  <NavLink to="audit">menu3</NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="down">
        <ul className="sidebar__menu bottom-menu">
          <li className="sidebar__list">
            <div className="sidebar__baselist">
              <div className="sidebar__baselist--left">
                <div className="baselist-before"></div>
                <NavLink to="/admin/settings" className="baselist-after">
                  <p>clement bazuaye</p>
                  <p>Account officer</p>
                </NavLink>
              </div>
              <div className="sidebar__baselist--right">
                <img src={SignOut} alt="" />
              </div>
            </div>
          </li> */}
          <li className="sidebar__list">
            <Link
              to="/"
              className="flex items-center"
              type="submit"
              onClick={(e) => LogOut(e)}
            >
              <img src={SignOut} alt="" />
              <span> log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarAdmin;
