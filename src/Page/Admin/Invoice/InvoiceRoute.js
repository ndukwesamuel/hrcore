import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Headbar } from '../../../Components/Headbar/Headbar';
import AsideAdmin from '../../../Components/Sidebar/AsideAdmin';
import Mobile from '../../../Components/Sidebar/Mobile';
import CreateInvoice from './CreateInvoice';
import Invoice from './Invoice';
import InvoiceDetails from './InvoiceDetails';
import InvoiceSetting from './InvoiceSetting';
import Aside from '../../../Components/Sidebar/Aside';

function InvoiceRoute() {
  return (
    <div class="app-view-screen">
      <aside
        className="sidebar-color z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
        style={{ borderRight: '1px solid #cec5c5' }}
      >
        <Aside />
      </aside>
      <aside
        class="fixed inset-y-0 z-20 flex-shrink-0 w-64 hidden overflow-y-auto bg-white dark:bg-gray-800 mouseleav md:hidden"
        id="mobile-menu"
      >
        <Mobile />
      </aside>

      <div
        class="flex flex-col flex-1 w-full overflow-y-auto"
        style={{ backgroundColor: '#eff6fc', paddingBlockEnd: '6rem' }}
      >
        <Headbar />

        <Routes>
          <Route path="/" element={<Invoice />} />
          <Route path="/settings" element={<InvoiceSetting />} />
          <Route path="/create" element={<CreateInvoice />} />
          <Route path="/:id" element={<InvoiceDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default InvoiceRoute;
