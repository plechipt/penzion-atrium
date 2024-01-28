"use client";
import axios from "axios";
import dotenv from "dotenv";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
import { useState, useContext } from "react";

import { Label } from "@/components/UI/label";
import { Button } from "@/components/UI/button";
import Dropdown from "@/components/Other/Dropdown";
import { AppContext } from "@/app/[locale]/providers";
import CheckInAndOut from "@/components/Other/CheckInAndOut";

import FormInput from "./FormInput";
import RoomInputs from "./RoomInputs";

import { format } from "date-fns";
import { cs } from "date-fns/locale";

/*
const MY_EMAIL = "mail@jakubplechac.cz";
const PENZION_EMAIL = "ubytovani@penziontrutnov.cz";
const FORM_SUBMIT_URL = "https://formsubmit.co/ajax";
*/

axios.defaults.headers.post["Content-Type"] = "application/json";

dotenv.config();

const ContactForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const tHome = useTranslations("Home");
  const tGeneral = useTranslations("General");
  const tContact = useTranslations("Contact");
  const tAcc = useTranslations("Accommodation");

  const tourist = tGeneral("tourist");

  const roomTypeOptions = [tourist, "Standard"];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [roomType, setRoomType] = useState(tourist);
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
    setGroup(tAcc("oneDay"));
    setPeople(1);
    setStay(tAcc("shortTermStayWithDays"));
    setRoomType(tourist);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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
      "Typ pobytu": roomType,
      "Počet lidí": people,
      "Počet dní (když je skupinový pobyt)": group,
    };

    await axios
      .post(`https://api.web3forms.com/submit`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });

    data["access_key"] = process.env.NEXT_PUBLIC_FORM_API_KEY_DAD;

    await axios
      .post(`https://api.web3forms.com/submit`, data)
      .then((res) => {
        console.log(res);
        router.push("/success");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });

    setIsLoading(false);
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
            oneDay: tAcc("oneDay"),
            twoOrMoreDays: tAcc("twoOrMoreDays"),
            bedroom: tAcc("bedroom"),
            moreBedroom: tAcc("moreBedroom"),
            peoplet: tAcc("people"),
          }}
        />
        <div className="flex flex-1 items-center gap-y-4">
          <Dropdown
            required
            value={roomType}
            options={roomTypeOptions}
            onChange={(value) => setRoomType(value)}
            divClass={"mb-4 relative flex-1"}
          />
        </div>
        <Button
          disabled={isLoading}
          className="bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold w-full"
        >
          {isLoading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            tContact("send")
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
