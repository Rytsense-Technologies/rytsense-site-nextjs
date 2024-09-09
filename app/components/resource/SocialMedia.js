import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="px-4 py-10">
      <div className="max-w-7xl mx-auto p-5 flex flex-col sm:flex-row sm:items-center gap-8 justify-between">
        <div
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col gap-4 sm:gap-8"
        >
          <div className="relative">
            <h1 className="text-3xl font-bold sm:text-5xl">Social Media</h1>
            <h1
              className="text-5xl font-bold top-0 sm:text-7xl"
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
                left: "0",
              }}
            >
              Social
            </h1>
          </div>
          <p className="text-base font-normal">
            Don’t Miss To Follow Us On Our Social Networks Accounts.
          </p>
        </div>
        <div className="flex justify-center sm:justify-end gap-4 flex-wrap">
          {/* Facebook */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 shadow-lg flex justify-center items-center rounded-lg hover:border-2 hover:border-indigo-300">
            <Link
              href="https://www.facebook.com/rytsense/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <rect
                    fill="#3d5a98"
                    x="4.83"
                    y="4.83"
                    width="118.35"
                    height="118.35"
                    rx="6.53"
                    ry="6.53"
                  />
                  <path
                    fill="#fff"
                    d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Twitter */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 shadow-lg flex justify-center items-center rounded-lg hover:border-2 hover:border-indigo-300">
            <Link
              href="https://twitter.com/rytsense_tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path
                    fill="#1d9bf0"
                    d="M114.896 37.888c.078 1.129.078 2.257.078 3.396 0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435 26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42 52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* LinkedIn */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 shadow-lg flex justify-center items-center rounded-lg hover:border-2 hover:border-indigo-300">
            <Link
              href="https://www.linkedin.com/company/rytsense/mycompany/verification/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path
                    fill="#0076b2"
                    d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                  />
                  <path
                    fill="#fff"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Instagram */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 shadow-lg flex justify-center items-center rounded-lg hover:border-2 hover:border-indigo-300">
            <Link
              href="https://instagram.com/rytsense_technologies?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <radialGradient
                    id="TGwjmZMm2W~B4yrgup6jda_119026_gr1"
                    cx="32"
                    cy="32.5"
                    r="31.259"
                    gradientTransform="matrix(1 0 0 -1 0 64)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#efdcb1"></stop>
                    <stop offset="0" stop-color="#f2e0bb"></stop>
                    <stop offset=".011" stop-color="#f2e0bc"></stop>
                    <stop offset=".362" stop-color="#f9edd2"></stop>
                    <stop offset=".699" stop-color="#fef4df"></stop>
                    <stop offset="1" stop-color="#fff7e4"></stop>
                  </radialGradient>
                  <path
                    fill="url(#TGwjmZMm2W~B4yrgup6jda_119026_gr1)"
                    d="M58,54c-1.1,0-2-0.9-2-2s0.9-2,2-2h2.5c1.9,0,3.5-1.6,3.5-3.5S62.4,43,60.5,43H50c-1.4,0-2.5-1.1-2.5-2.5	S48.6,38,50,38h8c1.7,0,3-1.3,3-3s-1.3-3-3-3H42v-6h18c2.3,0,4.2-2,4-4.4c-0.2-2.1-2.1-3.6-4.2-3.6H58c-1.1,0-2-0.9-2-2	s0.9-2,2-2	h0.4c1.3,0,2.5-0.9,2.6-2.2c0.2-1.5-1-2.8-2.5-2.8h-14C43.7,9,43,8.3,43,7.5S43.7,6,44.5,6h3.9c1.3,0,2.5-0.9,2.6-2.2	C51.1,2.3,50,1,48.5,1H15.6c-1.3,0-2.5,0.9-2.6,2.2C12.9,4.7,14,6,15.5,6H19c1.1,0,2,0.9,2,2s-0.9,2-2,2H6.2c-2.1,0-4,1.5-4.2,3.6	C1.8,16,3.7,18,6,18h2.5c1.9,0,3.5,1.6,3.5,3.5S10.4,25,8.5,25H5.2c-2.1,0-4,1.5-4.2,3.6C0.8,31,2.7,33,5,33h17v11H6	c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0c1.1,0,2,0.9,2,2s-0.9,2-2,2H4.2c-2.1,0-4,1.5-4.2,3.6C-0.2,60,1.7,62,4,62h53.8	c2.1,0,4-1.5,4.2-3.6C62.2,56,60.3,54,58,54z"
                  ></path>
                  <radialGradient
                    id="TGwjmZMm2W~B4yrgup6jdb_119026_gr2"
                    cx="18.51"
                    cy="66.293"
                    r="69.648"
                    gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".073" stop-color="#eacc7b"></stop>
                    <stop offset=".184" stop-color="#ecaa59"></stop>
                    <stop offset=".307" stop-color="#ef802e"></stop>
                    <stop offset=".358" stop-color="#ef6d3a"></stop>
                    <stop offset=".46" stop-color="#f04b50"></stop>
                    <stop offset=".516" stop-color="#f03e58"></stop>
                    <stop offset=".689" stop-color="#db359e"></stop>
                    <stop offset=".724" stop-color="#ce37a4"></stop>
                    <stop offset=".789" stop-color="#ac3cb4"></stop>
                    <stop offset=".877" stop-color="#7544cf"></stop>
                    <stop offset=".98" stop-color="#2b4ff2"></stop>
                  </radialGradient>
                  <path
                    fill="url(#TGwjmZMm2W~B4yrgup6jdb_119026_gr2)"
                    d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"
                  ></path>
                  <circle cx="41" cy="25" r="2" fill="#fff"></circle>
                </svg>
              </div>
            </Link>
          </div>

          {/* YouTube */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 shadow-lg flex justify-center items-center rounded-lg hover:border-2 hover:border-indigo-300">
            <Link
              href="https://www.youtube.com/@rytsense"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100%"
                  height="auto"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FF3D00"
                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                  ></path>
                  <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
