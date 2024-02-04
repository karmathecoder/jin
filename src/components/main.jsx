import React, { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import logo from "../asset/logo.png";
import "primeicons/primeicons.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const dummy_list = [
  { id: 1, name: "Dashboard" },
  { id: 2, name: "Timesheet" },
  { id: 3, name: "Leave" },
];

const tableData = [
  {
    id: "1000",
    name: "BAU Activity",
  },
  {
    id: "1001",
    name: "Sales Activity",
  },
  {
    id: "1002",
    name: "Total Hours",
  },
  {
    id: "1003",
    name: "Machine Hours",
  },
  {
    id: "1004",
    name: "Break Hours",
  },
];

const Main = () => {
  const [visible, setVisible] = useState(false);
  const handelVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div className="container flex">
      <div className="left">
        <Sidebar
          dismissable={false}
          visible={false}
          showCloseIcon={false}
          className="p-sidebar-sm sidebar-color p-3 relative"
        >
          <div className="w-[90%] m-auto">
            <div className="mb-5">
              <img src={logo} alt="JIN" />
            </div>
            <ul>
              {dummy_list.map((item) => (
                <li key={item.id} className="text-medium text-white mb-1">
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="absolute border-t bottom-2 text-medium text-white flex justify-between items-center w-[80%] m-auto">
              <p>Harsh</p>
              <span className="pi pi-sign-out"></span>
            </div>
          </div>
        </Sidebar>
      </div>
      <div className="right w-[100%]">
        <div className="w-[95%] m-auto">
          <header className="py-3">
            <h1 className="text-3xl font-bold text-[#19105B]">Timesheet</h1>
          </header>
          <nav className="flex justify-between items-center py-3">
            <p>Total Hours : 0.0</p>
            <p>05 feb - 10 feb</p>
          </nav>
          <div className="flex justify-between items-center p-2 bg-[#19105B] text-white">
            <h1>Allocation Extension</h1>
            <span
              onClick={handelVisibility}
              className={`${
                visible ? "pi pi-chevron-up" : "pi pi-chevron-down"
              } cursor-pointer`}
            ></span>
          </div>
          {visible && (
            <div className="border-b-[1.5px]">
              <div className="bg-[#FFE5EE] flex justify-between items-center px-2 py-2">
                <span className="font-bold text-[#19105B] text-sm">
                  {" "}
                  Project name
                </span>
                <span className="font-bold text-[#19105B] text-sm">
                  Project type
                </span>
                <span className="font-bold text-[#19105B] text-sm">
                  Project end date
                </span>
                <span className="font-bold text-[#19105B] text-sm">
                  Allocation end date
                </span>
                <span className="font-bold text-[#19105B] text-sm">
                  Allocation extension
                </span>
              </div>
              <div className="py-2">
                <p className="text-gray-400 text-sm text-center">
                  No available options
                </p>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center p-2 bg-[#19105B] text-white mt-3">
            <h1>Timesheet</h1>
          </div>
          <div className="border-b-[1.5px]">
  <div className="bg-[#FFE5EE] flex justify-between items-center px-2 py-2">
    <div className="card">
      <DataTable
        value={tableData}
        tableStyle={{ minWidth: "60rem" }}
        className="text-[#19105B]"
      >
        <Column field="name" header="Project Type" headerClassName="custom-header"></Column>
        <Column header="Project Name" className="custom-table"></Column>
        <Column field="task" header="Task" className="custom-table"></Column>
        <Column field="category" header="Comment" className="custom-table"></Column>
        {/* <Column field="rating" header="Total" className="custom-table"></Column> */}
        <Column header="Total" className="custom-table"></Column>
      </DataTable>
    </div>
  </div>

            <div className="py-2">
              <p className="text-gray-400 text-sm text-center">
                No available options
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
