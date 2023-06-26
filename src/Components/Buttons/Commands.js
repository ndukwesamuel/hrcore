import { Link } from 'react-router-dom';
import style from './Commands.module.scss';

const Commands = ({ type, text = 'View Details', linkTo, openMenu, css }) => {
  switch (type) {
    case 'view':
      return (
        <Link className={style.viewDetails} to={linkTo}>
          {text}
        </Link>
      );

    case 'dot-v':
      return (
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={openMenu}
          className={style.dot_v}
        >
          <g clipPath="url(#clip0_4017_13650)">
            <path
              d="M16 17.6709C16.8284 17.6709 17.5 16.9993 17.5 16.1709C17.5 15.3425 16.8284 14.6709 16 14.6709C15.1716 14.6709 14.5 15.3425 14.5 16.1709C14.5 16.9993 15.1716 17.6709 16 17.6709Z"
              fill="black"
            />
            <path
              d="M16 9.1709C16.8284 9.1709 17.5 8.49933 17.5 7.6709C17.5 6.84247 16.8284 6.1709 16 6.1709C15.1716 6.1709 14.5 6.84247 14.5 7.6709C14.5 8.49933 15.1716 9.1709 16 9.1709Z"
              fill="black"
            />
            <path
              d="M16 26.1709C16.8284 26.1709 17.5 25.4993 17.5 24.6709C17.5 23.8425 16.8284 23.1709 16 23.1709C15.1716 23.1709 14.5 23.8425 14.5 24.6709C14.5 25.4993 15.1716 26.1709 16 26.1709Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_4017_13650">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(0 0.170898)"
              />
            </clipPath>
          </defs>
        </svg>
      );

    case 'dot-h':
      return (
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 16.171C19.5 16.8633 19.2947 17.5399 18.9101 18.1155C18.5256 18.6911 17.9789 19.1397 17.3394 19.4046C16.6999 19.6695 15.9961 19.7388 15.3172 19.6038C14.6383 19.4687 14.0146 19.1354 13.5251 18.6459C13.0356 18.1564 12.7023 17.5328 12.5673 16.8538C12.4322 16.1749 12.5015 15.4712 12.7664 14.8316C13.0313 14.1921 13.4799 13.6455 14.0555 13.2609C14.6311 12.8763 15.3078 12.671 16 12.671C16.9272 12.6743 17.8156 13.0441 18.4712 13.6998C19.1269 14.3555 19.4967 15.2438 19.5 16.171ZM6 12.671C5.30777 12.671 4.63108 12.8763 4.05551 13.2609C3.47993 13.6455 3.03133 14.1921 2.76642 14.8316C2.50152 15.4712 2.4322 16.1749 2.56725 16.8538C2.7023 17.5328 3.03564 18.1564 3.52513 18.6459C4.01461 19.1354 4.63825 19.4687 5.31719 19.6038C5.99612 19.7388 6.69985 19.6695 7.33939 19.4046C7.97894 19.1397 8.52556 18.6911 8.91015 18.1155C9.29473 17.5399 9.5 16.8633 9.5 16.171C9.49671 15.2438 9.1269 14.3555 8.47124 13.6998C7.81557 13.0441 6.92725 12.6743 6 12.671ZM26 12.671C25.3078 12.671 24.6311 12.8763 24.0555 13.2609C23.4799 13.6455 23.0313 14.1921 22.7664 14.8316C22.5015 15.4712 22.4322 16.1749 22.5673 16.8538C22.7023 17.5328 23.0356 18.1564 23.5251 18.6459C24.0146 19.1354 24.6383 19.4687 25.3172 19.6038C25.9961 19.7388 26.6999 19.6695 27.3394 19.4046C27.9789 19.1397 28.5256 18.6911 28.9101 18.1155C29.2947 17.5399 29.5 16.8633 29.5 16.171C29.4967 15.2438 29.1269 14.3555 28.4712 13.6998C27.8156 13.0441 26.9272 12.6743 26 12.671Z"
            fill="#C1C1C1"
          />
        </svg>
      );

    default:
      return <button>Dotes</button>;
  }
};

export { Commands as default };