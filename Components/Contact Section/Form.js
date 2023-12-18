import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
