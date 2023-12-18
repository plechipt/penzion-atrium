const ContactDetails = () => {
  return (
    <div className="mt-8 w-full lg:hidden">
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
  );
};

export default ContactDetails;
