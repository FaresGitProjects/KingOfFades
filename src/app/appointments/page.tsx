"use client";

import React from "react";
import Nav from "@/components/nav";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import cn from "classnames";

import "react-day-picker/dist/style.css";
import { mockItems } from "../page";

export default function AppointmentsPage() {
  // placeholder for selected date state
  const [selectedDay, setSelectedDay] = useState<Date>();
  let submitted = true; // placeholder for setSelected handler
  //   const disabledDays = []; // Define disabled days as necessary
  const footer = "Choose a date"; // Footer text based on state

  return (
    <div className="bg-white ">
      <Nav
        classNames="dark-gradient-theme"
        nav={[{ title: "Checkout", href: "/checkout" }]}
      />
      <div className="Forms_container border-8 flex flex-col justify-center md:flex-row">
        <form
          className={cn(
            "max-w-6xl transition-all duration-1000 flex-0 border p-8",
            {
              " flex-1 ": !submitted,
            }
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 md:col-span-4">
              <h2 className="text-xl font-semibold mb-4">
                Book an Appointment
              </h2>
            </div>
            <div className="col-span-2">
              <DayPicker
                required
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
                className="dark-gradient-theme p-5 text-white border border-gray-200 rounded-lg"
                showOutsideDays
                modifiersStyles={{
                  selected: { backgroundColor: "white", color: "black" },
                  today: { border: "1px solid white" },
                }}
              />
            </div>
            <div className="Input_container col-span-2 m-4">
              <div className="Input_container">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    className="shadow focus:border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    className="shadow focus:border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    className="shadow focus:border-black appearance-none border rounded 
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                    focus:shadow-outline"
                    placeholder="123-456-7890"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="cars"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Service
                  </label>
                  <select
                    defaultValue={"Haircut & Shave"}
                    required
                    className="shadow focus:border-black appearance-none border 
                                rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="cars"
                    id="cars"
                  >
                    <option className=" placeholder-gray-500" disabled selected>
                      Select Service
                    </option>
                    {mockItems.map((item) => (
                      <option className="" value={item.name}>
                        {item.name}
                      </option>
                    ))}
                    {/* <option value="volvo">Haircut</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option> */}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-4 my-4">
              <button
                type="submit"
                className=" rhombus-shape border-y-2 border-black hover:text-black
            hover:bg-white hover bg-black text-white  font-bold py-2 px-4 
            focus:outline-none focus:shadow-outline w-full transition"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
