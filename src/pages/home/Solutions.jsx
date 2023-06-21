import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Solutions = () => {
  return (
    <section className="wrapper bg-sectionBg py-14 lg:pb-32 lg:pt-24">
      <div className="contain justify-start items-center flex-col gap-8 lg:gap-10">
        <div className="flex justify-start items-center flex-col text-center">
          <p className="text-primary font-roboto text-lg uppercase font-normal">
            For DIFFERENT INDUSTRIES{" "}
          </p>
          <h3 className="title text-[#282828]">Solutions</h3>
        </div>
        <div className="w-full solution">
          <Splide
            options={{
              perPage: 3,
              perMove: 1,
              drag: true,
              type: "loop",
              gap: "20px",
              arrows: false,
              pagination: true,
              breakpoints: {
                1024: {
                  perPage: 2,
                },
                640: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <SolutionBox
                desc="No more tickers. Search with ideas, themes, companies, lookalikes or just about whatever you are thinking about! Neuron speaks your language - and not just English! Customize it to speak with your clients in their language of choice. "
                review="“Hey, show me some companies on NASDAQ that make fighter jets” "
                title="Brokers"
              />
            </SplideSlide>
            <SplideSlide>
              <SolutionBox
                title="Insurance"
                desc="We ingest your factsheet, calculations, sales pitch, CS Q&A and everything in between to let your team and your clients interact with your plans the way they would speak to a close friend."
                review=" “Which of our insurance plans are best for a 31 year old, mother of 2 with the goal of saving for the kids’ college education?” "
              />
            </SplideSlide>
            <SplideSlide>
              <SolutionBox
                title="Equity Research"
                desc={
                  <>
                    Get insights on any Public or Private* Company, product or
                    asset and build it into your research workflow. Neuron is
                    your wingman, as you try to find that 100x idea for
                    deploying your or your client’s money.
                    <br />
                    <br />
                    *For private companies and assets, Neuron can create an
                    on-premise AI engine that organises your confidential
                    information
                  </>
                }
                review="“Which oil companies are targeting >50% revenues from renewables by 2040?”"
              />
            </SplideSlide>
            <SplideSlide>
              <SolutionBox
                title="Asset Managers"
                desc="Sync up with news, data feeds and chatter to stay ahead of the crowd. Decipher macroeconomic trends, summarise reports, news and transcript - just dump all of them together if you wish to - and get real insights."
                review="“In which report is a mention of BRI’s impact on Steel Demand?” "
              />
            </SplideSlide>
            <SplideSlide>
              <SolutionBox
                title="Investment Banking"
                desc="SAll of your documents go in - and out comes actionable insights and credible intelligence. On-premise hosted models can organise your private and confidential* information to find more than what you are looking for in seconds. 

                *documents, industry reports, transcripts, research etc.
                "
                // review="“In which report is a mention of BRI’s impact on Steel Demand?” "
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

const SolutionBox = ({ desc, review, title }) => {
  return (
    <div
      className="flex justify-start items-start h-full w-full
  flex-col gap-6"
    >
      <div className="flex justify-start h-full items-start flex-col gap-4 w-full p-7 rounded-[15px] relative isolate bg-white">
        <p className="text-slateGray text-sm font-normal">{desc}</p>
        {review && <p className="text-primary text-sm font-medium">{review}</p>}
        <div class="left-[39px] absolute bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-white"></div>
      </div>
      <h4 className="text-[#282828] text-2xl font-semibold">{title}</h4>
    </div>
  );
};
