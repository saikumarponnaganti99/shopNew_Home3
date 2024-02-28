export default function ProductsAds({
  className,
  ads = ["", ""],
  sectionHeight,
}) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="container-x mx-auto">
        <div
          className={`${sectionHeight} ${
            ads.length > 1 && ads.length <= 4
              ? "sm:flex xl:space-x-[30px] sm:space-x-5"
              : ""
          } items-center w-full overflow-hidden`}
        >
          <div
            data-aos="fade-right"
            className={`h-full sm:mb-0 mb-5 ${
              ads.length > 1 && ads.length <= 4 ? "w-full" : "w-full"
            }  `}
          >
            <a to="/single-product">
              <img src={ads[0]} alt="" className="w-full sm:h-full h-auto" />
            </a>
          </div>
          {ads.length > 1 && ads.length <= 4 && (
            <div data-aos="fade-left" className="flex h-full">
              <a to="/single-product">
                <img src={ads[1]} alt="" className="w-full h-full" />
              </a>
            </div>
            
          )}
          {ads.length > 1 && ads.length <= 4 && (
            <div data-aos="fade-left" className="flex h-full">
              <a to="/single-product">
                <img src={ads[2]} alt="" className="w-full h-full" />
              </a>
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}