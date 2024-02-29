import datas from "../../mock-data/products.json";
import SectionStyleFour from "../SectionStyleFour";
import SectionStyleThree from "../SectionStyleThree";
import SectionStyleTwo from "../SectionStyleTwo";
import ViewMoreTitle from "../ViewMoreTitle";
import Banner from "./Banner";
import BrandSection from "./BrandSection";
import CampaignCountDown from "./CampaignCountDown";
import ProductsAds from "./ProductsAds";
import LayoutHomeThree from "../LayoutHomeThree";
import SectionStyleOneHmThree from "../SectionStyleOneHmThree";

export default function HomeThree() {
  const { products } = datas;
  const brands = [];
  products.forEach((product) => {
    brands.push(product.brand);
  });
  return (
    <>
      <LayoutHomeThree type={3} childrenClasses="pt-0">
        <Banner className="banner-wrapper mb-[60px]" />
        <BrandSection
          type={3}
          sectionTitle="Shop by Brand"
          className="brand-section-wrapper mb-[60px]"
        />
        <SectionStyleThree
          type={3}
          products={products}
          sectionTitle="New Arrivals"
          seeMoreUrl="/all-products"
          className="new-products mb-[60px]"
        />
        <ProductsAds
          ads={[`${import.meta.env.VITE_PUBLIC_URL}src/assets/images/ads-3.png`]}
          className="products-ads-section mb-[60px]"
        />

        <SectionStyleOneHmThree
          type={3}
          products={products}
          brands={brands}
          categoryTitle="Mobile & Tablet"
          sectionTitle="Gamer World"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />

        <ViewMoreTitle
          className="top-selling-product mb-[60px]"
          seeMoreUrl="/all-products"
          categoryTitle="Top Selling Products"
        >
          <SectionStyleTwo
            type={3}
            products={products.slice(3, products.length)}
          />
        </ViewMoreTitle>

        <ProductsAds
          ads={[
            `${import.meta.env.VITE_PUBLIC_URL}/src/assets/images/ads-1.png`,
            `${import.meta.env.VITE_PUBLIC_URL}src/assets/images/ads-2.png`,
          ]}
          sectionHeight="sm:h-[295px] h-full"
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleOneHmThree
          type={3}
          categoryBackground={`${
            import.meta.env.VITE_PUBLIC_URL
          }src/assets/images/section-category-2.jpg`}
          products={products.slice(4, products.length)}
          brands={brands}
          categoryTitle="Electronics"
          sectionTitle="Popular Sales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
        
        <SectionStyleFour
          products={products}
          sectionTitle="Popular Sales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
      </LayoutHomeThree>
    </>
  );
}
