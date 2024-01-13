"use client";
import axios from "axios";
import dotenv from "dotenv";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
import { useState, useContext } from "react";

import { Label } from "@/components/UI/label";
import { Button } from "@/components/UI/button";
import { AppContext } from "@/app/[locale]/providers";
import CheckInAndOut from "@/components/Other/CheckInAndOut";

import FormInput from "./FormInput";
import RoomInputs from "./RoomInputs";

import { format } from "date-fns";
import { cs } from "date-fns/locale";

const MY_EMAIL = "mail@jakubplechac.cz";
axios.defaults.headers.post["Content-Type"] = "application/json";

dotenv.config();

const SUCCESS_URL = "https://web3forms.com/success";

const ContactForm = () => {
  const router = useRouter();

  const tHome = useTranslations("Home");
  const tContact = useTranslations("Contact");
  const tAcc = useTranslations("Accommodation");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let {
    checkInDate,
    checkOutDate,
    group,
    setGroup,
    people,
    setPeople,
    stay,
    setStay,
  } = useContext(AppContext);

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
    setGroup(tAcc("oneOrTwoDays"));
    setPeople(1);
    setStay(tAcc("shortTermStayWithDays"));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (checkInDate !== null) {
      checkInDate = format(checkInDate, "PPP", { locale: cs });
    }
    if (checkOutDate !== null) {
      checkOutDate = format(checkOutDate, "PPP", { locale: cs });
    }
    if (stay === null || stay === undefined) {
      stay = "Krátkodobý pobyt (1-6 dnů)";
    }

    const subject = `${name} ${checkInDate} - ${checkOutDate}`;

    const data = {
      access_key: process.env.NEXT_PUBLIC_FORM_API_KEY_MY,
      subject,
      "Jméno a přijmení": name,
      Email: email,
      Zpráva: message,
      "Datum příjezdu": checkInDate,
      "Datum odjezdu": checkOutDate,
      Pobyt: stay,
      "Počet lidí": people,
      "Počet dní (když je skupinový pobyt)": group,
    };

    axios
      .post(`https://api.web3forms.com/submit`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });

    data["access_key"] = process.env.NEXT_PUBLIC_FORM_API_KEY_DAD;

    axios
      .post(`https://api.web3forms.com/submit`, data)
      .then((res) => {
        console.log(res);
        router.push(SUCCESS_URL);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });

    clearInputs();
  };

  return (
    <div className="lg:border lg:rounded-lg lg:shadow lg:px-9 lg:py-10">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-center hidden lg:block md:text-start lg:text-center">
          {tContact("formTitle")}
        </h2>
      </div>

      <form
        onSubmit={handleOnSubmit}
        className="h-full flex flex-col justify-between"
        id="form"
      >
        <FormInput
          stateValue={name}
          setStateValue={setName}
          label={tContact("nameLabel")}
          placeholder={tContact("namePlaceholder")}
          inputType={"text"}
          type={"text"}
        />
        <FormInput
          stateValue={email}
          setStateValue={setEmail}
          label={tContact("emailLabel")}
          placeholder={tContact("emailPlaceholder")}
          inputType={"email"}
          type={"email"}
        />
        <div className="mb-6">
          <Label className="text-base font-bold pb-2" htmlFor="message">
            {tContact("messageLabel")}
          </Label>
          <textarea
            value={message}
            onChange={(value) => setMessage(value.target.value)}
            className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline resize-none"
            rows={4}
            id="message"
            required
            placeholder={tContact("messagePlaceholder")}
          ></textarea>
        </div>
        <div className="">
          <Link
            className="mb-4 text-indigo-900 underline flex justify-center"
            href="/accommodation#choose-room"
          >
            {tContact("calculatePrice")}
          </Link>
          <CheckInAndOut
            translation={{
              checkInTitle: tHome("checkInTitle"),
              checkInPlaceholder: tHome("checkInPlaceholder"),
              checkOutTitle: tHome("checkOutTitle"),
              checkOutPlaceholder: tHome("checkOutPlaceholder"),
            }}
          />
        </div>
        <RoomInputs
          stay={stay}
          group={group}
          people={people}
          setStay={setStay}
          setGroup={setGroup}
          setPeople={setPeople}
          stays={{
            shortStay: tAcc("shortTermStayWithDays"),
            mediumStay: tAcc("mediumTermStayWithDays"),
            longStay: tAcc("longTermStayWithDays"),
            groupStay: tAcc("groupStayWithDays"),
          }}
          groups={{
            oneOrTwoDays: tAcc("oneOrTwoDays"),
            threeOrMoreDays: tAcc("threeOrMoreDays"),
            bedroom: tAcc("bedroom"),
            moreBedroom: tAcc("moreBedroom"),
            peoplet: tAcc("people"),
          }}
        />
        <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold w-full">
          {tContact("send")}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
