import React, { useState } from 'react';
import Basicinfo from '../../UpdateProfile/Basicinfo/Basicinfo';
import Organization from '../../UpdateProfile/Organization/Organization';
import Qualifications from '../../UpdateProfile/Qualifications/Qualifications';
import Pensionhmo from '../../UpdateProfile/Pensionhmo/Pensionhmo';

const AdminUpdateprofile = () => {
  const [shown, setShown] = useState(1);

  const nextStep = () => {
    setShown(shown + 1);
  };

  const prevStep = () => {
    setShown(shown - 1);
  };
  switch (shown) {
    case 1:
      return <Basicinfo nextStep={nextStep} />;
    case 2:
      return <Organization prevStep={prevStep} nextStep={nextStep} />;
    case 3:
      return <Qualifications prevStep={prevStep} nextStep={nextStep} />;
    case 4:
      return <Pensionhmo prevStep={prevStep} nextStep={nextStep} />;
  }
};

export default AdminUpdateprofile;
