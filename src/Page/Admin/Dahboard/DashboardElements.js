import { useNavigate } from 'react-router-dom';
import TableHeaderComponent from '../../../Components/AdminComponent/Dashboard/TableHeaderComponent';
import Icons from '../../../assets/Icons';
import styles from './Element.module.scss';
import Count from 'react-countup';

const StatsCard = ({
  number,
  icon = 'stats_people',
  title,
  number2 = 'Details',
  suffix,
}) => {
  return (
    <div className={styles.stat_card}>
      <div className={styles.top}>
        <Icons name={icon} cssClass={styles.icon} />
      </div>
      <div className={styles.data_wrapper}>
        <div className={styles.data_container}>
          <span className={styles.data_number}>
            <Count end={number} suffix={suffix} delay={1} />
          </span>
          <span className={styles.data_number_stats}>{number2}</span>
        </div>
        <div className={styles.lower}>
          <span className={styles.data_number_title}>{title}</span>
        </div>
      </div>
    </div>
  );
};

const Announcement = ({ items = [1, 2, 3, 4] }) => {
  return (
    <div className={styles.announcement}>
      <div className={styles.announcement_title}>
        <h3>Announcement</h3>
        <Icons name={`mega_phone`} />
      </div>
      <div className={styles.items}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className={styles.engagement_card}>
              <h4>Welcome David to The Team ooooooooooooooo</h4>
              <p>Lorem ipsum dolor sit amet</p>
              <div className="flex">
                <span>From: Admin</span> <span>1/2/2023</span>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.no_announcement}>No Announcement</p>
        )}
      </div>
    </div>
  );
};

const TableHeader = ({ name, page }) => {
  const navigate = useNavigate();
  let url;

  if (name == 'Invoice') {
    url = '/admin/invoice';
  } else if (name == 'Recent Documents') {
    url = '/admin/documents/docs';
  } else if (name == 'Leave Requests') {
    url = '/admin/leave';
  } else {
    url = '/notFound';
  }

  const handleLink = () => {
    navigate(url);
  };

  return (
    <div>
      <div className={styles.table_header}>
        <p className={styles.title}>{name}</p>
        <div className={styles.view_all} onClick={handleLink}>
          <p> View All</p>
          <Icons name={`arrow`} />
        </div>
      </div>
      <TableHeaderComponent
        styles={styles}
        name={name}
        title={styles.title}
        view_all={styles.view_all}
      />
    </div>
  );
};

const EmployeeTableHeader = ({ name, page }) => {
  const navigate = useNavigate();
  let url;

  if (name == 'Leave Requests') {
    url = '/employee/leave';
  } else {
    url = '/dog';
  }

  const handleLink = () => {
    navigate(url);
  };

  return (
    <div>
      <div className={styles.table_header}>
        <p className={styles.title}>{name}</p>
        <div className={styles.view_all} onClick={handleLink}>
          <p> View All</p>
          <Icons name={`arrow`} />
        </div>
      </div>
      <TableHeaderComponent
        styles={styles}
        name={name}
        title={styles.title}
        view_all={styles.view_all}
        page={page}
      />
    </div>
  );
};

const Analytics = ({ children, title }) => {
  return (
    <div className={`${styles.analytics}`}>
      <h4
        style={{
          marginRight: 'auto',
          fontWeight: 800,
          fontSize: '18px',
        }}
      >
        {title}
      </h4>
      {children}
    </div>
  );
};
export { StatsCard, Announcement, Analytics, TableHeader, EmployeeTableHeader };
