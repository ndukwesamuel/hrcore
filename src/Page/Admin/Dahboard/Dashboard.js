import React, { useEffect, useRef } from 'react';
import styles from './Dashboard.module.scss';
import {
  StatsCard,
  Announcement,
  Analytics,
  TableHeader,
} from './DashboardElements';
import Icon from '../../../assets/Icons';
import birthDayAvatar from '../../../assets/Avatar.png';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useNavigate } from 'react-router-dom';

ChartJS.defaults.font.family = 'Manrope';

const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#2A72A8', '#F72585'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
        borderWidth: 0,
      },
    ],
  },
  options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context?.raw}%`;
          },
        },
        displayColors: false,
      },
    },
  };

const dataBar = {
    labels: [
      'People Management',
      'Recruitment',
      'Logistics',
      'Dispatch',
      'Legal',
      'Account',
      'IT',
      'Business Development',
      'HR',
      'Admin',
    ],
    datasets: [
      {
        data: [60, 40, 30, 50, 20, 10, 38, 70, 12, 18],
        backgroundColor: ['#2A72A8', '#F72585'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],

        borderWidth: 0,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  },
  optionsBar = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context?.raw} Staffs`;
          },
        },
        yAlign: 'bottom',
        displayColors: false,
        bodyFont: {
          size: 18,
        },
        titleFont: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
        },
        border: {
          display: false,
        },
      },

      y: {
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <main className={`${styles.container} ${styles.dashboard_layout}  `}>
      <div className="content">
        <div className={styles.top_stats}>
          <StatsCard number={1200} title={`Employees`} number2={`+ 4%`} />
          <StatsCard
            number={30}
            icon="stats_engagement"
            title={`Engagement`}
            suffix={`%`}
          />
          <StatsCard
            number={10}
            icon="stats_attrition"
            title={`2023 Attrition Rate`}
            suffix={`%`}
          />
        </div>

        <div className={styles.analytics}>
          <Analytics title={`Employee Composition`}>
            <div className={styles.one}>
              <div
                style={{
                  position: 'absolute',
                }}
                className={styles.women}
              >
                <p>{`40%`}</p>
                <p>
                  {' '}
                  <span
                    style={{
                      aspectRatio: '1/1',
                      width: '8px',
                      backgroundColor: '#F72585',
                    }}
                  ></span>{' '}
                  Women
                </p>
              </div>
              <Doughnut data={data} options={options} />
              <div
                style={{
                  position: 'absolute',
                }}
                className={styles.men}
              >
                <p>{`60%`}</p>
                <p>
                  {' '}
                  <span
                    style={{
                      aspectRatio: '1/1',
                      width: '8px',
                      backgroundColor: '#2A72A8',
                    }}
                  ></span>{' '}
                  Men
                </p>
              </div>
            </div>
          </Analytics>
          <Analytics title={`Department Composition`}>
            <div className={styles.two}>
              <Bar data={dataBar} options={optionsBar} />
            </div>
          </Analytics>
        </div>
        <div className={styles.tables}>
          <TableHeader name="Leave Requests" />
        </div>
        <div className={styles.tables}>
          <TableHeader name="Recent Documents" />
        </div>
        <div className={styles.tables}>
          <TableHeader name="Invoice" />
        </div>
      </div>
      <aside>
        <div
          className={styles.stats}
          onClick={() => navigate('/admin/employee/birthday')}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              className={styles.stats_image}
              src={birthDayAvatar}
              alt="birthday"
            />
            <img
              className={styles.stats_image}
              src={birthDayAvatar}
              alt="birthday"
            />
            <span className={styles.stats_image}> 28</span>
          </div>
          <div className="">
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              Birthday Celebrant
            </h3>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '12px',
                gap: '6px',
                marginTop: '8px',
              }}
            >
              See All{' '}
              <span>
                <Icon name={`arrow`} />
              </span>
            </p>
          </div>
        </div>
        <div className={styles.stats}>
          <div className="">
            <span
              style={{
                rotate: '180deg',
              }}
            >
              <Icon name={`arrow`} />
            </span>
            Upcoming Holiday
            <span>
              <Icon name={`arrow`} />
            </span>
          </div>
          <div className="">
            <span>Easter</span>
            <span>April 20th</span>
          </div>
        </div>
        <Announcement />
      </aside>
    </main>
  );
};

export default Dashboard;
