import ProductCardRowStyleTwo from "./ProductCardRowStyleTwo";
import DataIteration from "./DataIteration";
import ViewMoreTitle from "./ViewMoreTitle";

export default function SectionStyleFour({
  className,
  sectionTitle,
  seeMoreUrl,
  products = [],
}) {
  return (
    <div className={`section-style-one ${className || ""}`}>
      <ViewMoreTitle categoryTitle={sectionTitle} seeMoreUrl={seeMoreUrl}>
        <div className="products-section w-full">
          <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-[30px] lg:gap-5">
            <div className="item-col">
              <DataIteration datas={products} startLength={0} endLength={9}>
                {({ datas }) => (
                  <ProductCardRowStyleTwo key={datas.id} datas={datas} />
                )}
              </DataIteration>
            </div>
            <div className="item-col">
              <DataIteration datas={products} startLength={4} endLength={13}>
                {({ datas }) => (
                  <ProductCardRowStyleTwo key={datas.id} datas={datas} />
                )}
              </DataIteration>
            </div>
            <div className="item-col">
              <DataIteration datas={products} startLength={8} endLength={17}>
                {({ datas }) => (
                  <ProductCardRowStyleTwo key={datas.id} datas={datas} />
                )}
              </DataIteration>
            </div>
          </div>
        </div>
      </ViewMoreTitle>
    </div>
  );
}
