import React from "react";

function AppointmentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="Appointments_layout">
      <div></div>
      {children}
    </div>
  );
}

export default AppointmentsLayout;
