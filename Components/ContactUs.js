import { LocationIcon, PhoneIcon, SMSIcon } from "@/assets/icons";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const ContactUs = () => {
  return (
    <div className="py-8 lg:py-12">
      <h1 className="md:text-5xl text-4xl font-bold mb-8 lg:mb-12 text-center">
        Contact Us
      </h1>

      <div className="flex flex-col-reverse lg:flex-row justify-center mb-20 items-stretch">
        {/* Left side with Google Map */}
        <div className="flex-1 h-80 lg:h-auto w-full mt-6 lg:mt-0 lg:w-4/5 lg:p-4">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed/v1/place?q=Žižkova+504,+541+01+Trutnov+1-Horní+Předměstí,+Czechia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="mt-8 w-full lg:hidden">
            <div>
              <h2 className="text-black text-2xl font-bold leading-relaxed mb-3 text-center">
                Contact Details
              </h2>

              <div className="space-y-6 text-center">
                <div className="space-y-3">
                  <h3 className="text-neutral-700 text-base font-bold">
                    Pension Atrium
                  </h3>

                  <p className="text-neutral-700 text-base font-normal">
                    Žižkova 504{"  "}541 01 - Trutnov
                  </p>
                  <p className="text-neutral-700 text-base font-normal">
                    {`50°33'39.393"N, 15°54'15.424"E`}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-neutral-700 text-base font-bold">
                    Zdeněk Plecháč
                  </h3>

                  <p className="text-neutral-700 text-base font-normal">
                    penzionatrium@seznam.cz <br /> plechac@zskomtu.cz
                  </p>
                  <p className="text-neutral-700 text-base font-normal">
                    tel.: (+420) 731 415 455 <br /> www.penziontrutnov.cz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with contact form */}
        <div className="flex-1 w-full lg:w-1/2 lg:p-4 px-4">
          <div className="lg:border lg:rounded-lg lg:shadow lg:px-9 lg:py-10">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2 text-center md:text-start lg:text-center">
                Leave Us a Message
              </h2>
            </div>

            <form className="h-full flex flex-col justify-between" id="form">
              <div className="mb-4">
                <Label className="text-base font-medium pb-2" htmlFor="name">
                  Name
                </Label>
                <input
                  className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline"
                  id="name"
                  required
                  type="text"
                  placeholder="Your name..."
                />
              </div>

              <div className="mb-4">
                <Label className="text-base font-medium pb-2" htmlFor="email">
                  Email
                </Label>
                <input
                  className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  required
                  placeholder="Your email..."
                />
              </div>

              <div className="mb-6">
                <Label
                  className="text-gray-700 text-base font-medium pb-2"
                  htmlFor="message"
                >
                  Message
                </Label>
                <textarea
                  className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline resize-none"
                  rows={4}
                  id="message"
                  required
                  placeholder="Your message..."
                ></textarea>
              </div>

              <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold w-full">
                Send
              </Button>
            </form>
          </div>

          <div className="mt-20 lg:grid grid-cols-2 w-full hidden">
            <div>
              <h2 className="text-black text-base font-bold leading-relaxed mb-3">
                Contact info
              </h2>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LocationIcon className="w-5 h-5 text-[#253871]" />
                  <p className="text-neutral-500 text-base font-normal leading-relaxed">
                    541 01 - Trutnov, Žižkova 504
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-[#253871]" />
                  <p className="text-neutral-500 text-base font-normal leading-relaxed">
                    tel.: (+420) 731 415 455
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-black text-base font-bold leading-relaxed mb-3">
                Emails
              </h2>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <SMSIcon className="w-5 h-5 text-[#253871]" />
                  <p className="text-neutral-500 text-base font-normal leading-relaxed">
                    penzionatrium@seznam.cz
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <SMSIcon className="w-5 h-5 text-[#253871]" />
                  <p className="text-neutral-500 text-base font-normal leading-relaxed">
                    plechac@zskomtu.cz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
