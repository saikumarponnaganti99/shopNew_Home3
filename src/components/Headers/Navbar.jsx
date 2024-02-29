import { useEffect, useState } from "react";
import Arrow from "../svg/Arrow";

export default function Navbar({ className, type }) {
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");
  const getItems = document.querySelectorAll(`.categories-list li`).length;
  // if (categoryToggle && getItems > 0) {
  //   setSize(`${40 * getItems}px`);
  // }
  const handler = () => {
    setToggle(!categoryToggle);
  };
  useEffect(() => {
    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle]);

  return (
    <div
      className={`nav-widget-wrapper w-full  h-[60px] relative z-30 ${
        type === 3 ? "bg-qh3-blue" : "bg-qyellow"
      }  ${className || ""}`}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
            <div className="become-seller-btn">
              <a to="/become-saller">
                <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                  <div className="flex space-x-2 items-center">
                    <span className="text-sm font-600">Become a Seller</span>
                    <span>
                      <svg
                        className="fill-current"
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.08984"
                          width="6.94106"
                          height="1.54246"
                          transform="rotate(45 1.08984 0)"
                          fill="white"
                        />
                        <rect
                          x="6"
                          y="4.9082"
                          width="6.94106"
                          height="1.54246"
                          transform="rotate(135 6 4.9082)"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                <button
                  onClick={handler}
                  type="button"
                  className="w-full h-full flex justify-between items-center"
                >
                  <div className="flex space-x-3 items-center">
                    <span>
                    <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                    </span>
                    <span className="text-sm font-600 text-qblacktext">
                      All Categories
                    </span>
                  </div>
                  <div>
                    <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                  </div>
                </button>
                {categoryToggle && (
                  <div
                    className="fixed top-0 left-0 w-full h-full -z-10"
                    onClick={handler}
                  ></div>
                )}
                <div
                  className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden"
                  style={{ height: `${elementsSize} ` }}
                >
                  <ul className="categories-list">
                    <li className="category-item">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />

                            </span>
                            <span className="text-xs font-400">
                              Mobile & Laptops
                            </span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />

                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                            <span className="text-xs font-400">
                              Gaming Entertainment
                            </span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                            <span className="text-xs font-400">
                              Image & Video
                            </span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                            <span className="text-xs font-400">Vehicles</span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                            <span className="text-xs font-400">Furnitures</span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                            <span className="text-xs font-400">Sport </span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item ">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                            <span className="text-xs font-400">
                              Food & Drinks
                            </span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                            <span className="text-xs font-400">
                              Fashion Accessories
                            </span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                            <span className="text-xs font-400">
                              Toilet & Sanitation
                            </span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item ">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                            <span className="text-xs font-400">
                              Makeup Corner
                            </span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a to="/all-products">
                        <div
                          className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                            type === 3
                              ? "hover:bg-qh3-blue hover:text-white"
                              : "hover:bg-qyellow"
                          }`}
                        >
                          <div className="flex items-center space-x-6">
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                            <span className="text-xs font-400">Baby Items</span>
                          </div>
                          <div>
                            <span>
                            <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  <li className="relative">
                    <span
                      className={`flex items-center text-sm font-600 cursor-pointer ${
                        type === 3 ? "text-white" : "text-qblacktext"
                      }`}
                    >
                      <span>Homepage</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a to="/">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Home One
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/home-two">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Home Two
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/home-three">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Home Three
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/home-four">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Home Four
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/home-five">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Home Five
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span
                      className={`flex items-center text-sm font-600 cursor-pointer ${
                        type === 3 ? "text-white" : "text-qblacktext"
                      }`}
                    >
                      <span>Shop</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Shop List
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Shop Sidebar
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Shop Fullwidth
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Shop Category Icon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Shop Category Icon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Shop List View
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Product Layouts
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Horizonral Thumbnail
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Vertical Thumbnail
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Gallery Thumbnail
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Sticky Summary
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Polular Category
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Phone & Tablet
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Gaming & Sports
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Home Appliance
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Fashion Clothes
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnil w-[348px] h-full">
                          <div className="w-full h-[235px]">
                            <img
                              width=""
                              src={`${
                                import.meta.env.VITE_PUBLIC_URL
                              }src/assets/images/mega-menu-thumb.jpg`}
                              alt=""
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="relative">
                    <span
                      className={`flex items-center text-sm font-600 cursor-pointer ${
                        type === 3 ? "text-white" : "text-qblacktext"
                      }`}
                    >
                      <span>Pages</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a to="/privacy-policy">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Privacy Policy
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/terms-condition">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Terms and Conditions
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/faq">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      FAQ
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Shop Category Icon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a to="/all-products">
                                    <span
                                      className={`text-qgray text-sm font-400 border-b border-transparent   ${
                                        type === 3
                                          ? "hover:text-qh3-blue hover:border-qh3-blue"
                                          : "hover:text-qyellow hover:border-qyellow"
                                      }`}
                                    >
                                      Shop List View
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a to="/about">
                      <span
                        className={`flex items-center text-sm font-600 cursor-pointer ${
                          type === 3 ? "text-white" : "text-qblacktext"
                        }`}
                      >
                        <span>About</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a to="/blogs">
                      <span
                        className={`flex items-center text-sm font-600 cursor-pointer ${
                          type === 3 ? "text-white" : "text-qblacktext"
                        }`}
                      >
                        <span>Blog</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a to="/contact">
                      <span
                        className={`flex items-center text-sm font-600 cursor-pointer ${
                          type === 3 ? "text-white" : "text-qblacktext"
                        }`}
                      >
                        <span>Contact</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
