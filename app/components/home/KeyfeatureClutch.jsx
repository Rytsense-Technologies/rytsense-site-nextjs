"use client"
import React, { useState } from "react";
import "../../css/keyfeature.css";
const KeyfeatureClutch = () => {
  const [isSelected, setIsSelected] = useState("first");

  const [expandCardOne, setExpandCardOne] = useState(false);
  const [expandCardTwo, setExpandCardTwo] = useState(false);
  const [expandCardThree, setExpandCardThree] = useState(false);
  const [expandCardFour, setExpandCardFour] = useState(false);
  const [expandCardFive, setExpandCardFive] = useState(false);
  const handleMouseEnter = () => {
    // setIsHovered(true);
  };
  const handleMouseEnterOne = () => {
    setIsSelected("first");
    setExpandCardOne(true);
  };
  const handleMouseEnterTwo = () => {
    setIsSelected("second");
    setExpandCardTwo(true);
  };
  const handleMouseEnterThree = () => {
    setIsSelected("third");
    setExpandCardThree(true);
  };
  const handleMouseEnterFour = () => {
    setIsSelected("fourth");
    setExpandCardFour(true);
  };
  const handleMouseEnterFive = () => {
    setIsSelected("five");
    setExpandCardFive(true);
  };

  const handleMouseLeave = () => {
    // setIsHovered(false);
  };

  const handleMouseLeaveOne = () => {
    setIsSelected("first");
    setExpandCardOne(false);
  };
  const handleMouseLeaveTwo = () => {
    setIsSelected("second");
    setExpandCardTwo(false);
  };
  const handleMouseLeaveThree = () => {
    setIsSelected("third");
    setExpandCardThree(false);
  };
  const handleMouseLeaveFour = () => {
    setIsSelected("fourth");
    setExpandCardFour(false);
  };
  const handleMouseLeaveFive = () => {
    setIsSelected("five");
    setExpandCardFive(false);
  };
  return (
    <div className=" p-10  keycard text-[#092947]">
      <div className=" flex justify-center items-center text-4xl inter-semibold headkeyfeature">
        We dont just Engineer solutions,we future-proof it
      </div>
      <div className="inter-semibold flex justify-center items-center md:text-center text-lg  text-black mt-2 ">
        Services That We Deliver Makes Us Dignified As One of The Top App
        Development Companies.
      </div>
      <div className="flex justify-center items-center entireCard mt-8">
        <div
          className={`card relative cardOne mt-5 ${
            isSelected === "first" ? "default-expanded" : "w-32"
          }   bg-black rounded-lg ml-2 `}
          onMouseEnter={handleMouseEnterOne}
          onMouseLeave={handleMouseLeaveOne}
        >
          {" "}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url("/images/keyfeatures/key4.webp")`,
                //  // filter: "blur(2px)",,
              }}
            ></div>
          </div>
          {isSelected != "first" && (
            <div className="absolute inset-0 bg-white bg-opacity-30 rounded-lg"></div>
          )}
          {isSelected === "first" && (
            <>
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
              <div className="relative z-10 p-10 text-white w-full text-window">
                <div className="mt-10 w-10">
                  {" "}
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48.4374 24.9992C48.4472 28.7203 47.2401 32.3425 44.9999 35.3137C44.8766 35.4778 44.7221 35.6161 44.5453 35.7205C44.3685 35.825 44.1728 35.8936 43.9695 35.9224C43.7662 35.9513 43.5592 35.9398 43.3604 35.8886C43.1615 35.8374 42.9746 35.7476 42.8105 35.6242C42.6463 35.5009 42.5081 35.3464 42.4036 35.1696C42.2992 34.9928 42.2306 34.7971 42.2018 34.5938C42.1729 34.3905 42.1844 34.1835 42.2356 33.9847C42.2867 33.7858 42.3766 33.5989 42.4999 33.4348C44.3336 31.0056 45.3214 28.0428 45.3124 24.9992C45.3124 21.2696 43.8309 17.6928 41.1936 15.0556C38.5564 12.4183 34.9795 10.9367 31.2499 10.9367C27.5203 10.9367 23.9435 12.4183 21.3063 15.0556C18.669 17.6928 17.1874 21.2696 17.1874 24.9992C17.1874 25.4136 17.0228 25.8111 16.7298 26.1041C16.4368 26.3971 16.0393 26.5617 15.6249 26.5617C15.2105 26.5617 14.8131 26.3971 14.5201 26.1041C14.2271 25.8111 14.0624 25.4136 14.0624 24.9992C14.0617 23.4224 14.2779 21.853 14.705 20.3352C14.4921 20.3117 14.2773 20.3117 14.0624 20.3117C11.576 20.3117 9.19147 21.2995 7.43332 23.0576C5.67516 24.8158 4.68744 27.2003 4.68744 29.6867C4.68744 32.1731 5.67516 34.5577 7.43332 36.3159C9.19147 38.074 11.576 39.0617 14.0624 39.0617H18.7499C19.1643 39.0617 19.5618 39.2264 19.8548 39.5194C20.1478 39.8124 20.3124 40.2098 20.3124 40.6242C20.3124 41.0386 20.1478 41.4361 19.8548 41.7291C19.5618 42.0221 19.1643 42.1867 18.7499 42.1867H14.0624C12.344 42.1871 10.644 41.8332 9.06852 41.1471C7.49304 40.4609 6.07594 39.4573 4.90575 38.1989C3.73556 36.9405 2.83739 35.4544 2.26736 33.8333C1.69732 32.2122 1.46766 30.4909 1.59271 28.7771C1.71777 27.0632 2.19485 25.3936 2.99416 23.8724C3.79348 22.3512 4.89786 21.0111 6.23832 19.9359C7.57879 18.8607 9.12656 18.0735 10.7849 17.6233C12.4433 17.1731 14.1767 17.0697 15.8769 17.3196C17.6081 13.857 20.4576 11.0802 23.9639 9.43915C27.4701 7.79805 31.4276 7.38869 35.1955 8.27737C38.9634 9.16606 42.3209 11.3007 44.7242 14.3357C47.1276 17.3706 48.4359 21.128 48.4374 24.9992ZM30.7929 23.8938C30.6478 23.7485 30.4755 23.6332 30.2858 23.5546C30.0961 23.476 29.8928 23.4355 29.6874 23.4355C29.4821 23.4355 29.2788 23.476 29.0891 23.5546C28.8994 23.6332 28.7271 23.7485 28.582 23.8938L22.332 30.1438C22.1868 30.2889 22.0716 30.4613 21.9931 30.651C21.9145 30.8406 21.8741 31.0439 21.8741 31.2492C21.8741 31.4545 21.9145 31.6578 21.9931 31.8475C22.0716 32.0372 22.1868 32.2095 22.332 32.3547C22.6252 32.6479 23.0228 32.8126 23.4374 32.8126C23.6427 32.8126 23.846 32.7722 24.0357 32.6936C24.2254 32.615 24.3977 32.4999 24.5429 32.3547L28.1249 28.7707V40.6242C28.1249 41.0386 28.2896 41.4361 28.5826 41.7291C28.8756 42.0221 29.273 42.1867 29.6874 42.1867C30.1018 42.1867 30.4993 42.0221 30.7923 41.7291C31.0853 41.4361 31.2499 41.0386 31.2499 40.6242V28.7707L34.832 32.3547C34.9771 32.4999 35.1495 32.615 35.3392 32.6936C35.5288 32.7722 35.7321 32.8126 35.9374 32.8126C36.1427 32.8126 36.346 32.7722 36.5357 32.6936C36.7254 32.615 36.8977 32.4999 37.0429 32.3547C37.1881 32.2095 37.3032 32.0372 37.3818 31.8475C37.4604 31.6578 37.5008 31.4545 37.5008 31.2492C37.5008 31.0439 37.4604 30.8406 37.3818 30.651C37.3032 30.4613 37.1881 30.2889 37.0429 30.1438L30.7929 23.8938Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-3xl mt-12  text-indigo-300 inter-semibold">
                  Data Backups
                </div>
                <div className="text-lg mt-1 inter-med">
                  The backups area the best option and we carefully
                  <br />
                  maintainous clients project backup to deal with <br />{" "}
                  mifortunes in the best manner
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className={`card relative cardTwo mt-5  ${
            isSelected === "second" ? "default-expanded" : "w-32"
          }  bg-black rounded-lg ml-2`}
          onMouseEnter={handleMouseEnterTwo}
          onMouseLeave={handleMouseLeaveTwo}
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("/images/keyfeatures/key2.webp")`,
                // filter: "blur(2px)",,
              }}
            ></div>
          </div>
          {isSelected != "second" && (
            <div className="absolute inset-0 bg-white bg-opacity-30 rounded-lg"></div>
          )}
          {isSelected === "second" && (
            <>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <div className="relative z-10 p-10 text-white w-full text-window">
                <div className="mt-10 text-5xl">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.4375 34.4512H21.875V33.6699C21.875 32.2195 21.2988 30.8285 20.2732 29.8029C19.2477 28.7773 17.8567 28.2012 16.4062 28.2012C14.9558 28.2012 13.5648 28.7773 12.5393 29.8029C11.5137 30.8285 10.9375 32.2195 10.9375 33.6699V34.4512H9.375C8.9606 34.4512 8.56317 34.6158 8.27015 34.9088C7.97712 35.2018 7.8125 35.5993 7.8125 36.0137V43.8262C7.8125 44.2406 7.97712 44.638 8.27015 44.931C8.56317 45.2241 8.9606 45.3887 9.375 45.3887H23.4375C23.8519 45.3887 24.2493 45.2241 24.5424 44.931C24.8354 44.638 25 44.2406 25 43.8262V36.0137C25 35.5993 24.8354 35.2018 24.5424 34.9088C24.2493 34.6158 23.8519 34.4512 23.4375 34.4512ZM14.0625 33.6699C14.0625 33.0483 14.3094 32.4522 14.749 32.0126C15.1885 31.5731 15.7846 31.3262 16.4062 31.3262C17.0279 31.3262 17.624 31.5731 18.0635 32.0126C18.5031 32.4522 18.75 33.0483 18.75 33.6699V34.4512H14.0625V33.6699ZM21.875 42.2637H10.9375V37.5762H21.875V42.2637ZM41.7305 16.1582L30.793 5.2207C30.6478 5.07565 30.4754 4.96063 30.2857 4.88221C30.096 4.80379 29.8928 4.76351 29.6875 4.76367H10.9375C10.1087 4.76367 9.31384 5.09291 8.72779 5.67896C8.14174 6.26501 7.8125 7.05987 7.8125 7.88867V25.0762C7.8125 25.4906 7.97712 25.888 8.27015 26.181C8.56317 26.4741 8.9606 26.6387 9.375 26.6387C9.7894 26.6387 10.1868 26.4741 10.4799 26.181C10.7729 25.888 10.9375 25.4906 10.9375 25.0762V7.88867H28.125V17.2637C28.125 17.6781 28.2896 18.0755 28.5826 18.3685C28.8757 18.6616 29.2731 18.8262 29.6875 18.8262H39.0625V42.2637H31.25C30.8356 42.2637 30.4382 42.4283 30.1451 42.7213C29.8521 43.0143 29.6875 43.4118 29.6875 43.8262C29.6875 44.2406 29.8521 44.638 30.1451 44.931C30.4382 45.2241 30.8356 45.3887 31.25 45.3887H39.0625C39.8913 45.3887 40.6862 45.0594 41.2722 44.4734C41.8583 43.8873 42.1875 43.0925 42.1875 42.2637V17.2637C42.1877 17.0584 42.1474 16.8552 42.069 16.6655C41.9905 16.4758 41.8755 16.3034 41.7305 16.1582ZM31.25 10.0977L36.8535 15.7012H31.25V10.0977Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-3xl mt-12 inter-semibold text-indigo-300">
                  Data Protection
                </div>
                <div className="text-lg inter-med mt-1 ">
                  By signing an NDA, our company ensures the utmost <br />{" "}
                  safety of all your private data. We deliver best-rated <br />
                  products to maintain confidentiality
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className={`card relative cardThree mt-5  ${
            isSelected === "third" ? "default-expanded" : "w-32"
          }    h-96 bg-black rounded-lg ml-2 `}
          onMouseEnter={handleMouseEnterThree}
          onMouseLeave={handleMouseLeaveThree}
        >
          {" "}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url("/images/keyfeatures/key3.webp")`,
                // filter: "blur(2px)",,
              }}
            ></div>
          </div>
          {isSelected != "third" && (
            <div className="absolute inset-0 bg-white bg-opacity-30 rounded-lg"></div>
          )}
          {isSelected === "third" && (
            <>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <div className="relative z-10 p-10 text-white w-full text-window">
                <div className="mt-10 text-5xl">
                  {" "}
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.5469 39.1387H7.8125V17.2637H42.1875V23.5137C42.1875 23.9281 42.3521 24.3255 42.6451 24.6185C42.9382 24.9116 43.3356 25.0762 43.75 25.0762C44.1644 25.0762 44.5618 24.9116 44.8549 24.6185C45.1479 24.3255 45.3125 23.9281 45.3125 23.5137V17.2637C45.3125 16.4349 44.9833 15.64 44.3972 15.054C43.8112 14.4679 43.0163 14.1387 42.1875 14.1387H25.6465L20.3125 8.8047C20.0234 8.51326 19.6792 8.28219 19.3 8.12494C18.9207 7.96768 18.514 7.88738 18.1035 7.88869H7.8125C6.9837 7.88869 6.18884 8.21793 5.60279 8.80398C5.01674 9.39003 4.6875 10.1849 4.6875 11.0137V39.2598C4.68853 40.0561 5.00535 40.8196 5.56847 41.3827C6.13158 41.9458 6.89504 42.2627 7.69141 42.2637H23.5469C23.9613 42.2637 24.3587 42.0991 24.6517 41.806C24.9448 41.513 25.1094 41.1156 25.1094 40.7012C25.1094 40.2868 24.9448 39.8894 24.6517 39.5963C24.3587 39.3033 23.9613 39.1387 23.5469 39.1387ZM18.1035 11.0137L21.2285 14.1387H7.8125V11.0137H18.1035ZM46.8027 31.1699C46.7088 30.8734 46.5285 30.6117 46.285 30.4182C46.0414 30.2247 45.7456 30.1084 45.4355 30.084L39.6074 29.6328L37.375 24.457C37.2544 24.1763 37.0541 23.9372 36.7989 23.7691C36.5438 23.6011 36.245 23.5115 35.9395 23.5115C35.6339 23.5115 35.3351 23.6011 35.08 23.7691C34.8248 23.9372 34.6245 24.1763 34.5039 24.457L32.2715 29.6328L26.4434 30.084C26.1332 30.1084 25.8374 30.2249 25.5938 30.4185C25.3503 30.6121 25.1701 30.874 25.0763 31.1707C24.9825 31.4674 24.9794 31.7852 25.0675 32.0837C25.1555 32.3821 25.3306 32.6474 25.5703 32.8457L29.9668 36.4766L28.6289 41.8887C28.5555 42.1871 28.5716 42.5005 28.6754 42.7898C28.7792 43.079 28.966 43.3313 29.2124 43.5149C29.4588 43.6986 29.7538 43.8055 30.0607 43.8223C30.3675 43.8391 30.6725 43.765 30.9375 43.6094L35.9375 40.666L40.9395 43.6094C41.2044 43.765 41.5094 43.8391 41.8163 43.8223C42.1231 43.8055 42.4182 43.6986 42.6646 43.5149C42.911 43.3313 43.0978 43.079 43.2015 42.7898C43.3053 42.5005 43.3215 42.1871 43.248 41.8887L41.9102 36.4766L46.3066 32.8457C46.5469 32.6476 46.7225 32.3823 46.8109 32.0837C46.8993 31.7851 46.8964 31.4669 46.8027 31.1699ZM39.1621 34.6856C38.9348 34.8728 38.7651 35.1205 38.6725 35.4001C38.5799 35.6797 38.5681 35.9797 38.6387 36.2656L39.3223 39.0235L36.7305 37.4981C36.4902 37.3565 36.2164 37.2819 35.9375 37.2819C35.6586 37.2819 35.3848 37.3565 35.1445 37.4981L32.5527 39.0235L33.2363 36.2656C33.3069 35.9797 33.2951 35.6797 33.2025 35.4001C33.1099 35.1205 32.9402 34.8728 32.7129 34.6856L30.543 32.8926L33.4512 32.668C33.7349 32.6462 34.0072 32.5474 34.2389 32.3822C34.4705 32.2169 34.6526 31.9916 34.7656 31.7305L35.9375 29.0117L37.1094 31.7305C37.2224 31.9916 37.4045 32.2169 37.6361 32.3822C37.8678 32.5474 38.1401 32.6462 38.4238 32.668L41.332 32.8926L39.1621 34.6856Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-3xl mt-12 inter-semibold text-indigo-300">
                  Quality deliverance
                </div>
                <div className="text-lg inter-med mt-1 ">
                  We believe in delivering quality products to our clients by{" "}
                  <br />
                  assuring all their project specification at the best industry
                  <br /> competitive price
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className={`card relative cardFour mt-5  ${
            isSelected === "fourth" ? "default-expanded" : "w-32"
          }  h-96 bg-black rounded-lg ml-2 `}
          onMouseEnter={handleMouseEnterFour}
          onMouseLeave={handleMouseLeaveFour}
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url("/images/keyfeatures/key7.webp")`,
                // filter: "blur(2px)",,
              }}
            ></div>
          </div>
          {isSelected != "fourth" && (
            <div className="absolute inset-0 bg-white bg-opacity-30 rounded-lg"></div>
          )}
          {isSelected === "fourth" && (
            <>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <div className="relative z-10 p-10 text-white w-full text-window">
                <div className="mt-10 text-5xl">
                  {" "}
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.3125 40.7012C45.3125 41.1156 45.1479 41.513 44.8549 41.806C44.5618 42.0991 44.1644 42.2637 43.75 42.2637H6.25C5.8356 42.2637 5.43817 42.0991 5.14515 41.806C4.85212 41.513 4.6875 41.1156 4.6875 40.7012V9.45117C4.6875 9.03677 4.85212 8.63934 5.14515 8.34632C5.43817 8.05329 5.8356 7.88867 6.25 7.88867C6.6644 7.88867 7.06183 8.05329 7.35485 8.34632C7.64788 8.63934 7.8125 9.03677 7.8125 9.45117V30.6797L17.6445 20.8457C17.7896 20.7004 17.962 20.5852 18.1517 20.5065C18.3413 20.4279 18.5447 20.3874 18.75 20.3874C18.9553 20.3874 19.1587 20.4279 19.3483 20.5065C19.538 20.5852 19.7104 20.7004 19.8555 20.8457L25 25.9922L35.291 15.7012H31.25C30.8356 15.7012 30.4382 15.5366 30.1451 15.2435C29.8521 14.9505 29.6875 14.5531 29.6875 14.1387C29.6875 13.7243 29.8521 13.3268 30.1451 13.0338C30.4382 12.7408 30.8356 12.5762 31.25 12.5762H39.0625C39.4769 12.5762 39.8743 12.7408 40.1674 13.0338C40.4604 13.3268 40.625 13.7243 40.625 14.1387V21.9512C40.625 22.3656 40.4604 22.763 40.1674 23.056C39.8743 23.3491 39.4769 23.5137 39.0625 23.5137C38.6481 23.5137 38.2507 23.3491 37.9576 23.056C37.6646 22.763 37.5 22.3656 37.5 21.9512V17.9102L26.1055 29.3066C25.9604 29.4519 25.788 29.5672 25.5983 29.6458C25.4087 29.7244 25.2053 29.7649 25 29.7649C24.7947 29.7649 24.5913 29.7244 24.4017 29.6458C24.212 29.5672 24.0396 29.4519 23.8945 29.3066L18.75 24.1602L7.8125 35.0977V39.1387H43.75C44.1644 39.1387 44.5618 39.3033 44.8549 39.5963C45.1479 39.8893 45.3125 40.2868 45.3125 40.7012Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-3xl mt-12 inter-semibold text-indigo-300">
                  Enhancement
                </div>
                <div className="text-lg inter-med  mt-1">
                  During Discovery,Designing and development phases,
                  <br />
                  our technical team is always there to provide suggestion
                  <br /> and edits to improvise their product in the
                  <br /> best possible manner
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className={`card relative cardFive mt-5 ${
            isSelected === "five" ? "default-expanded" : "w-32"
          }   h-96 bg-black rounded-lg ml-2 `}
          onMouseEnter={handleMouseEnterFive}
          onMouseLeave={handleMouseLeaveFive}
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url("/images/keyfeatures/key5.webp")`,
                // filter: "blur(2px)",,
              }}
            ></div>
          </div>
          {isSelected != "five" && (
            <div className="absolute inset-0 bg-white bg-opacity-30 rounded-lg"></div>
          )}
          {isSelected === "five" && (
            <>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <div className="text-window relative z-10 p-10 text-white w-full  ">
                <div className="mt-10 text-5xl">
                  {" "}
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.1875 7.8125H14.0625C13.2337 7.8125 12.4388 8.14174 11.8528 8.72779C11.2667 9.31384 10.9375 10.1087 10.9375 10.9375V14.0625H7.8125C6.9837 14.0625 6.18884 14.3917 5.60279 14.9778C5.01674 15.5638 4.6875 16.3587 4.6875 17.1875V39.0625C4.6875 39.8913 5.01674 40.6862 5.60279 41.2722C6.18884 41.8583 6.9837 42.1875 7.8125 42.1875H35.9375C36.7663 42.1875 37.5612 41.8583 38.1472 41.2722C38.7333 40.6862 39.0625 39.8913 39.0625 39.0625V35.9375H42.1875C43.0163 35.9375 43.8112 35.6083 44.3972 35.0222C44.9833 34.4362 45.3125 33.6413 45.3125 32.8125V10.9375C45.3125 10.1087 44.9833 9.31384 44.3972 8.72779C43.8112 8.14174 43.0163 7.8125 42.1875 7.8125ZM35.9375 17.1875V20.3125H7.8125V17.1875H35.9375ZM35.9375 39.0625H7.8125V23.4375H35.9375V39.0625ZM42.1875 32.8125H39.0625V17.1875C39.0625 16.3587 38.7333 15.5638 38.1472 14.9778C37.5612 14.3917 36.7663 14.0625 35.9375 14.0625H14.0625V10.9375H42.1875V32.8125Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-3xl mt-12 inter-semibold text-indigo-300">
                  Client centric development
                </div>
                <div className="text-lg inter-med  mt-1">
                  We craft the client’s needs on web,mobile, and
                  <br /> blockchain to tailor the solution and enchance growth
                  <br /> of the business.
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyfeatureClutch;
