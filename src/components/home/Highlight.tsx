"use client";

const Highlight = () => {
  return (
    <section className="mt-20 bg-base-alt py-10 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full lg:w-9/12">
            <div className="text-center lg:text-left">
              <h6 className="badge-text">You may be interested in</h6>
              <h2 className="section-title alt">
                Visit our kitchen hardware partner
              </h2>
            </div>
          </div>
          <div className="flex w-full justify-center lg:w-3/12 lg:justify-end">
            <a href="https://eurogrober.com/" target="_blank" rel="noreferrer">
              <button type="submit" className="button alt max-md:mt-4!">
                Go to Eurogrober site
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
