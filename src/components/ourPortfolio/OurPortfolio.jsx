import PortfolioCards from "./portfolioItems/PortfolioCards";
import PortfolioSection1 from "./portfolioItems/PortfolioSection1";

const OurPortfolio = () => {
  return (
    <div
      className="w-full lg:min-h-screen font-poppins relative "
      style={{
        background:
          "linear-gradient(360deg, rgba(240,240,240,1) 0%, rgba(240,240,240,1) 53%, rgba(255,255,255,1) 53%, rgba(255,255,255,1) 100%)",
      }}
    >
      <PortfolioSection1 />
      <PortfolioCards />
    </div>
  );
};

export default OurPortfolio;
