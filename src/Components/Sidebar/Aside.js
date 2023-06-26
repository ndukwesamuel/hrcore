import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Aside.scss';
import Icons from '../../assets/Icons';
import { useSelector } from 'react-redux';

const Aside = () => {
  const { permissions, userData, extra } = useSelector(
    (state) => state.reducer.loginReducer
  );

  // const { extra } = useSelector((state) => state.reducer.loginReducer);

  // ? This is an array of Objects used to add items to the sidebar
  // ! please study the object structure before modification
  // ! To route to your page only update the nave link [First find your page in the nav]
  const navItems = [
    {
      navLink: '/employee',
      navName: 'Dashboard',
      slug: 'dashboard',
      arrow: true,
      icon: 'dashboard',
      children: [],
    },
    {
      navLink: '/employee',
      navName: 'Dashboard',
      slug: 'admin_dashboard',
      arrow: true,
      icon: 'dashboard',
      children: [],
    },
    {
      navName: 'Employee',
      slug: 'employee_module',
      arrow: true,
      icon: 'employee',
      children: [
        {
          navLink: '/admin/employee/',
          navName: 'Directory',
          slug: 'admin_directory',
        },
        { navLink: '', navName: 'Audit', slug: 'audit' },
        {
          navLink: '/admin/documents/docs',
          navName: 'Documents',
          slug: 'admin_document',
        },
        {
          navLink: '/employee/documents',
          navName: 'Documents',
          slug: 'document',
        },
        {
          navLink: '/admin/employee/exit',
          navName: 'Exit',
          slug: 'admin_exit',
        },
        { navLink: '/employee/exit', navName: 'Exit', slug: 'exit' },
      ],
    },
    {
      navName: 'Engagement',
      slug: 'engagements_module',
      arrow: true,
      icon: 'engagement',
      children: [
        {
          navLink: '/admin/engagements',
          navName: 'Announcements',
          slug: 'admin_announcements',
        },
        {
          navLink: '/employee/engagements',
          navName: 'Announcements',
          slug: 'announcements',
        },
        {
          navLink: '/admin/engagements/survey',
          navName: 'Survey',
          slug: 'admin_survey',
        },
        {
          navLink: '/employee/engagements/survey',
          navName: 'Survey',
          slug: 'survey',
        },
      ],
    },

    {
      navName: 'Leave',
      slug: 'leave_module',
      arrow: true,
      icon: 'leave',
      children: [
        {
          navLink: '/admin/leave',
          navName: 'Leave Requests',
          slug: 'admin_leave_list',
        },
        {
          navLink: '/employee/leave',
          navName: 'My Requests',
          slug: 'leave_list',
        },
      ],
    },
    {
      navName: 'Finance',
      slug: 'finance_module',
      arrow: true,
      icon: 'finance',
      children: [
        {
          navLink: '/admin/invoice',
          navName: 'Invoice',
          slug: 'admin_invoice',
        },
      ],
    },
    {
      navName: 'Recruitment',
      slug: 'recruitment_module',
      arrow: true,
      icon: 'recruitment',
      children: [],
    },
    {
      navName: 'Request',
      slug: 'request_module',
      arrow: true,
      icon: 'request',
      children: [],
    },
    {
      navName: 'Performance',
      slug: 'performance_module',
      arrow: true,
      icon: 'performance',
      children: [],
    },
  ];

  const [reveal, setReveal] = useState(null);

  const handleReveal = (key) => {
    if (reveal === key) {
      return setReveal(null);
    }

    setReveal(key);
  };

  const LogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div className="mainSideNave">
      {/* Top Nav */}
      <div className="top">
        <div className="innerTop">
          <div className="brandLogo">
            <Icons name={`logo`} />
          </div>
          <p className="menuText">Menu</p>
        </div>

        {/* Nav Items */}
        <ul className="sideNavList">
          {navItems.map((item, key) => {
            return (
              // permissions.includes(item.slug) && (
              <li
                key={key}
                className={
                  reveal === key ? `sideNavItem show` : `sideNavItem hide`
                }
                onClick={() => handleReveal(key)}
              >
                {' '}
                <NavLink className={`navItemGroup`} to={item.navLink}>
                  {' '}
                  <div className={`navItemWrapper`}>
                    <Icons name={item.icon} />
                    <p className="sideNavName">{item.navName}</p>
                  </div>
                  {item.children.length > 0 && <Icons name={`dropDownArrow`} />}
                </NavLink>
                <ul className="sideNavItemChildren">
                  {item.children.map((child, key) => {
                    return (
                      // permissions.includes(child.slug) && (
                      <li className="itemChild" key={key}>
                        <NavLink to={child.navLink}>{child.navName}</NavLink>
                      </li>
                      // )
                    );
                  })}
                </ul>
              </li>
              // )
            );

            return (
              <li
                key={key}
                className={
                  reveal === key ? `sideNavItem show` : `sideNavItem hide`
                }
                onClick={() => handleReveal(key)}
              >
                {' '}
                <NavLink className={`navItemGroup`} to={item.navLink}>
                  {' '}
                  <div className={`navItemWrapper`}>
                    <Icons name={item.icon} />
                    <p className="sideNavName">{item.navName}</p>
                  </div>
                  {item.children.length > 0 && <Icons name={`dropDownArrow`} />}
                </NavLink>
                <ul className="sideNavItemChildren">
                  {item.children.map((child, key) => (
                    <li className="itemChild" key={key}>
                      <NavLink to={child.navLink}>{child.navName}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Nav */}
      <div className="bottomSidenav">
        <div className="bottomInner">
          <div className="navProfile ">
            <div className="profileDetails">
              <div className="image ">
                <Icons
                  name={`fake-profile`}
                  data_img={userData?.profile_image}
                />
              </div>

              <NavLink
                to={extra === 1 ? '/admin/employee/' : '/employee/profile'}
              >
                <div className="profileIn">
                  <p className="adminName">
                    {userData?.first_name} {userData?.last_name}
                  </p>
                  <p>Admin Account</p>
                </div>
              </NavLink>
            </div>
            <Icons name={`swap`} />
          </div>
          <div
            onClick={LogOut}
            className="sideNavLogout"
            style={{ fontSize: 13 }}
          >
            <Icons name={`sign-out`} />

            <p className="">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
