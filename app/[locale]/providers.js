"use client";
import { useState, createContext } from "react";

export const AppContext = createContext();

const shortTermPeople = [1, 2, 3, 4, 5, 6, 7, 8];

export function Providers({ children }) {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const [stay, setStay] = useState();
  const [group, setGroup] = useState();
  const [people, setPeople] = useState(1);
  const [stayType, setStayType] = useState("short");
  const [peopleOptions, setPeopleOptions] = useState(shortTermPeople);

  return (
    <AppContext.Provider
      value={{
        checkInDate,
        setCheckInDate,
        checkOutDate,
        setCheckOutDate,
        group,
        setGroup,
        people,
        setPeople,
        stay,
        setStay,
        stayType,
        setStayType,
        peopleOptions,
        setPeopleOptions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
