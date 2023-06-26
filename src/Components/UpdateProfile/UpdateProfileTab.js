import React from 'react';

function UpdateProfileTab({ nextStep_title_clickTab, showData }) {
  return (
    <div className="stepforms">
      <div className="firststep" onClick={() => nextStep_title_clickTab(1)}>
        <span
          className={` ${showData > 1 ? 'step_beforenumber' : 'stepnumber'}
           `}
        >
          1
        </span>
        <p
          className={` ${showData > 1 ? '' : 'step_name'}
          `}
        >
          Basic Information
        </p>
      </div>
      <div className="firststep" onClick={() => nextStep_title_clickTab(2)}>
        <span
          className={` ${showData > 2 ? 'step_beforenumber' : 'stepnumber'}
          ${showData < 2 ? 'step_unchosennumber' : 'stepnumber'}
        `}
        >
          2
        </span>
        <p
          className={` ${showData === 2 && 'step_name'}
        
        `}
        >
          Organization
        </p>
      </div>
      <div className="firststep" onClick={() => nextStep_title_clickTab(3)}>
        <span
          className={` ${showData > 3 ? 'step_beforenumber' : 'stepnumber'}
          ${showData < 3 ? 'step_unchosennumber' : 'stepnumber'}
        
        `}
        >
          3
        </span>
        <p
          className={` ${showData === 3 && 'step_name'}
        
        `}
        >
          Qualifications
        </p>
      </div>
    </div>
  );
}

export default UpdateProfileTab;
