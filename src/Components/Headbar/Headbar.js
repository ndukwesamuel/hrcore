import React from 'react';
import bct from '../../assets/Images/bct.png';
import './headbar.styles.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Headbar = ({ name, total, text }) => {
  const { permissions, userData, extra } = useSelector(
    (state) => state.reducer.loginReducer
  );

  const navigate = useNavigate();

  return (
    <>
      <header className="headbar__header">
        <div className="header-container">
          <div className="headbar__header--left">
            {name}
            {total !== undefined ? (
              <span className="number_of_request">
                {total} {text}
              </span>
            ) : (
              ' '
            )}
          </div>

          {extra === 1 && (
            <div
              className="headbar__header--right cursor-pointer"
              onClick={() => navigate('/admin/settings')}
            >
              <p className="text-center">Admin</p>
              <div className="organisation-box">
                <div className="organisation-image">
                  <img src={bct} alt="bct-logo" />
                </div>
                <div className="organisation-name">Settings</div>
              </div>
            </div>
          )}

          {extra === 0 && (
            <div className="headbar__header--right">
              <p>your organisation</p>
              <div className="organisation-box">
                <div className="organisation-image">
                  <img src={bct} alt="bct-logo" />
                </div>
                <div className="organisation-name">bct limited</div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
