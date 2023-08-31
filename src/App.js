import React, { useEffect } from "react";
import gsap from "gsap";
import "./App.css";
function App() {
  useEffect(() => {
    var tl = gsap.timeline({
      paused: true,
      onStart: Frame,
    });

    tl.set("#est", { opacity: 0, y: 1800 });
    tl.set("#logo", { opacity: 0, y: 260 });
    tl.set(".word, .body-copy", { opacity: 0 });
    tl.set("h1", { opacity: 0, y: 0 });
    tl.set(".separator", { width: 0 });
    tl.set("#W_Stroke", { opacity: 0 });

    tl.to("#logo", {
      duration: 1,
      opacity: 1,
      y: 360,
      ease: "sine.inOut",
    });

    tl.fromTo(
      "h1",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "sine.inOut",
      }
    );

    tl.fromTo(
      ".body-copy",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "sine.inOut",
        delay: -0.5,
      }
    );

    tl.to(".separator", {
      width: 234,
      duration: 0.5,
      ease: "sine.inOut",
      delay: -0.5,
      onComplete: wDrawing,
    });

    tl.to("#est", {
      duration: 1,
      opacity: 1,
      y: 1752,
      delay: -1.5,
      ease: "sine.inOut",
    });

    tl.set("#est", { opacity: 1, delay: 8 }); // This just to delay until the next slide
    tl.play();

    tl.eventCallback("onComplete", function () {
      outTl.play(0);
    });
  }, []);

  function Frame(path) {
    var path = document.querySelector("#frame");
    var length = path.getTotalLength();

    // Rest of the Frame function code
  }

  function wDrawing(path) {
    var path = document.querySelector("#W_Stroke");
    var length = path.getTotalLength();
    gsap.set("#W_Stroke", { opacity: 1 });

    // Rest of the wDrawing function code
  }

  var outTl = gsap.timeline({
    onStart: frameOut,
    paused: true,
  });

  // Rest of the outTl animations

  function frameOut(path) {
    var path = document.querySelector("#frame");
    var length = path.getTotalLength();

    // Rest of the frameOut function code
  }

  return (
    <div className="animation-container">
      <div className="screen">
        <div className="mask">
          <div className="copy">
            <h1>GSAP 3 | V4</h1>
            <div className="separator"></div>
            <div className="body-copy">
              <p>Discover unbeatable surgery and great after care.</p>
              <p>
                We’ve been the UK’s #1 clinic four years in a row and we’re no
                #1 for the hair transplant, too.
              </p>
            </div>
          </div>
        </div>
        <div className="transition">
          <svg width="1080" height="1920">
            <defs>
              <clipPath id="clip-start">
                <rect width="1080" height="1920" />
              </clipPath>
            </defs>
            <g id="start" clip-path="url(#clip-start)">
              <g id="logo" transform="translate(0 360)">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M71.117.417v.9c-5.039 0-7.11 1.657-12.771 16.5l-11.319 31.2h-.967L34.6 18.3 24.179 49.012h-1.036L6.852 6.7C4.919 1.728 2.573 1.314.226 1.314v-.9h18.637v.9c-6.073 0-4.348 5.453-4.209 5.936l11.871 32.306 7.593-22.572L30.529 6.7C28.6 1.728 26.25 1.314 23.9 1.314v-.9h18.571v.9c-6.143 0-4.279 5.453-4.142 5.936L49.65 39.763l7.8-22.157c2-6.627 5.8-16.291-3.865-16.291v-.9Z"
                  transform="translate(368.111 -173.796)"
                  fill="#fff"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M69.577.417v.9c-2.968 0-4.832 1.174-4.832 5.453v34.857c0 4.693 1.932 6.489 4.832 6.489v.9H52.8v-.9c2.968 0 4.832-1.8 4.832-6.489V6.767c0-4.279-1.8-5.453-4.832-5.453v-.9Z"
                  transform="translate(393.872 -173.796)"
                  fill="#fff"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M128.838 48.115v.9h-17.671v-.9c2.9 0 4.969-1.587 4.969-7.179V3.041l-16.7 46.593H98.6L79.344 7.389v24.437c0 8.007 1.174 16.29 8.836 16.29v.9H68.645v-.9c8.56 0 9.8-8.49 9.8-16.29V5.87a8.4 8.4 0 0 0-7.731-4.555v-.9h13.738L102.4 39.487 116.136.417h12.219v.9c-2.97 0-5.316 1.38-5.316 6.073v33.547c0 5.592 2.831 7.179 5.8 7.179"
                  transform="translate(401.634 -173.796)"
                  fill="#fff"
                />
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M124.6 39.556c0 8.283 2.487 8.56 6.835 8.56v.9h-18.228v-.9c3.382 0 4.556-1.8 4.556-8.353V7.8c0-4.763-.967-6.489-4.418-6.489v-.9h12.493c13.738 0 22.849 1.655 22.849 13.943 0 12.218-9.111 13.875-22.849 13.875H124.6Zm1.243-12.218c8.423 0 15.326-.207 15.326-12.978 0-13.115-7.25-13.046-15.326-13.046H124.6v26.024Z"
                  transform="translate(423.468 -173.796)"
                  fill="#fff"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M164.824 49.838c-15.187 0-22.434-10.837-22.434-24.574C142.39 11.6 149.637 0 164.824 0s22.433 11.6 22.433 25.264c0 13.738-7.247 24.574-22.433 24.574m0-48.941c-8.214 0-14.5 5.453-14.5 24.367 0 18.982 6.283 23.677 14.5 23.677 8.146 0 14.426-4.695 14.426-23.677C179.25 6.35 172.97.9 164.824.9"
                  transform="translate(437.767 -174)"
                  fill="#fff"
                />
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M213.565 34.034v14.978H179.12v-.9c2.968 0 3.8-2.622 3.8-7.317V7.113c0-4.211-1.381-5.8-4.349-5.8v-.9H195v.9c-2.968 0-5.109 1.174-5.109 6.143v40.659h2.485c7.387.069 19.121 0 20.295-14.082Z"
                  transform="translate(455.493 -173.796)"
                  fill="#fff"
                />
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M242.8 34.655v14.357h-34.724v-.9c2.9 0 3.726-2.485 3.726-7.179V7.8c0-4.279-.69-6.487-3.726-6.487v-.9H241.9v12.429h-.9c-.827-11.389-12.768-11.527-18.36-11.527h-3.728v22.709h4.488c1.865 0 9.183 0 9.527-6.972h.9v14.842h-.9c-.344-6.9-7.8-6.973-9.527-6.973h-4.486v23.194h3.175c6.145 0 18.362.344 19.812-13.46Z"
                  transform="translate(469.951 -173.796)"
                  fill="#fff"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M77.7 66.086V70.5a20.937 20.937 0 0 1-10.179 2.4 15.694 15.694 0 0 1-7.955-1.882 13.855 13.855 0 0 1-5.17-5.191 14.092 14.092 0 0 1-1.9-7.155 13.656 13.656 0 0 1 4.358-10.278 14.961 14.961 0 0 1 10.746-4.17 25.224 25.224 0 0 1 9.8 2.3v4.309a19.274 19.274 0 0 0-9.6-2.806 11.1 11.1 0 0 0-7.985 3.035 10.714 10.714 0 0 0-.051 15.178 11.14 11.14 0 0 0 8 2.967 18.146 18.146 0 0 0 9.94-3.126"
                  transform="translate(393.717 -152.332)"
                  fill="#77c5d5"
                />
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M80.95 44.466h4.007v24.348h12.604v3.646H80.95Z"
                  transform="translate(407.663 -152.213)"
                  fill="#77c5d5"
                />
                <rect
                  id="Rectangle_1"
                  data-name="Rectangle 1"
                  width="4.007"
                  height="27.994"
                  transform="translate(521.042 -107.746)"
                  fill="#77c5d5"
                />
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M140.039 44.466h3.808V72.46H140.4L121.686 50.9v21.56h-3.77V44.466h3.247l18.876 21.743Z"
                  transform="translate(425.775 -152.213)"
                  fill="#77c5d5"
                />
                <rect
                  id="Rectangle_2"
                  data-name="Rectangle 2"
                  width="4.008"
                  height="27.994"
                  transform="translate(587.964 -107.746)"
                  fill="#77c5d5"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M187.236 66.086V70.5a20.937 20.937 0 0 1-10.18 2.4 15.694 15.694 0 0 1-7.955-1.882 13.881 13.881 0 0 1-5.172-5.191 14.1 14.1 0 0 1-1.9-7.155 13.657 13.657 0 0 1 4.36-10.278 14.952 14.952 0 0 1 10.75-4.169 25.223 25.223 0 0 1 9.8 2.3v4.309a19.274 19.274 0 0 0-9.6-2.806 11.1 11.1 0 0 0-7.985 3.035 10.714 10.714 0 0 0-.051 15.178 11.14 11.14 0 0 0 8 2.967 18.146 18.146 0 0 0 9.94-3.126"
                  transform="translate(447.388 -152.332)"
                  fill="#77c5d5"
                />
                <rect
                  id="Rectangle_4"
                  data-name="Rectangle 4"
                  width="64.25"
                  height="1.539"
                  transform="translate(368 -94.37)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_5"
                  data-name="Rectangle 5"
                  width="64.25"
                  height="1.539"
                  transform="translate(648.497 -94.37)"
                  fill="#fff"
                />
              </g>
              <g id="w" transform="translate(-224.997 -620)">
                <path
                  id="W_Stroke"
                  d="M1087.927 1848v8.173c-45.914 0-64.784 15.1-116.359 150.326l-103.137 284.284h-8.811l-104.412-279.885-94.964 279.885h-9.435l-148.438-385.547c-17.61-45.289-38.992-49.063-60.374-49.063V1848h169.808v8.173c-55.336 0-39.615 49.688-38.352 54.087l2.438 6.634 105.735 287.719 69.183-205.662-32.7-93.715c-17.612-45.289-38.995-49.063-60.39-49.063V1848h169.2v8.173c-55.974 0-38.99 49.688-37.741 54.087l103.15 296.241 71.07-201.888c18.243-60.387 52.835-148.44-35.219-148.44V1848Z"
                  fill="none"
                  stroke="#77c5d5"
                  stroke-width="2"
                />
                <g id="est" transform="translate(1041.538 1751.904)">
                  <g
                    id="Group_5"
                    data-name="Group 5"
                    transform="translate(-537.775 576.981)"
                    fill="#fff"
                  >
                    <path
                      id="Path_12"
                      data-name="Path 12"
                      d="M13.44 75.962v2.267H3.357v8.052H13.1v2.265H3.357v8.188H13.71v2.3H.822V75.962Z"
                      transform="translate(-.822 -75.657)"
                    />
                    <path
                      id="Path_13"
                      data-name="Path 13"
                      d="M27.025 77.316v2.876a7.891 7.891 0 0 0-5.209-2.065c-2.435 0-4.027 1.353-4.027 3.349 0 1.524.373 2.842 4.2 4.771 4.771 2.469 5.921 4.127 5.921 7.274 0 3.415-2.638 5.987-6.6 5.987a9.841 9.841 0 0 1-5.987-2.031V94.3a8.056 8.056 0 0 0 5.987 2.942c2.333 0 4.025-1.455 4.025-3.686 0-1.965-.641-3.115-5.107-5.448-3.62-1.86-5.007-3.62-5.007-6.562 0-3.281 2.808-5.716 6.665-5.716a9.669 9.669 0 0 1 5.141 1.487"
                      transform="translate(17.518 -75.827)"
                    />
                    <path
                      id="Path_14"
                      data-name="Path 14"
                      d="M47.981 75.962V78.2h-8.255v20.833h-2.537V78.2h-8.154v-2.238Z"
                      transform="translate(35.117 -75.657)"
                    />
                    <path
                      id="Path_15"
                      data-name="Path 15"
                      d="m55.574 75.9 10.287 23.21h-2.609l-3.245-7.24H49.521l-3.111 7.24H43.8l9.984-23.21ZM50.5 89.6h8.491l-4.366-9.81Z"
                      transform="translate(53.932 -75.733)"
                    />
                    <path
                      id="Path_16"
                      data-name="Path 16"
                      d="M68.036 75.963c4.3 0 7.14 2.2 7.14 5.887a5.113 5.113 0 0 1-3.825 5.073c3.586.509 5.785 2.876 5.785 5.921 0 4.264-3.788 6.189-8.018 6.189h-7.035v-23.07Zm-3.449 10.251h2.538c3.788 0 5.412-1.76 5.412-4.127 0-2.672-1.589-3.891-5.007-3.891h-2.943ZM68.645 96.8c3.688 0 5.853-1.253 5.853-4.161 0-2.674-1.862-4.229-6.226-4.229h-3.685v8.39Z"
                      transform="translate(77.217 -75.656)"
                    />
                    <path
                      id="Path_17"
                      data-name="Path 17"
                      d="M80.34 75.962V96.7H91.2v2.333H77.8V75.962Z"
                      transform="translate(97.241 -75.657)"
                    />
                    <rect
                      id="Rectangle_3"
                      data-name="Rectangle 3"
                      width="2.538"
                      height="23.071"
                      transform="translate(208.287 .306)"
                    />
                    <path
                      id="Path_18"
                      data-name="Path 18"
                      d="M114.743 77.316v2.876a7.891 7.891 0 0 0-5.209-2.065c-2.435 0-4.027 1.353-4.027 3.349 0 1.524.373 2.842 4.2 4.771 4.771 2.469 5.921 4.127 5.921 7.274 0 3.415-2.638 5.987-6.6 5.987a9.841 9.841 0 0 1-5.987-2.031V94.3a8.056 8.056 0 0 0 5.987 2.942c2.333 0 4.025-1.455 4.025-3.686 0-1.965-.641-3.115-5.107-5.448-3.62-1.86-5.007-3.62-5.007-6.562 0-3.281 2.808-5.716 6.665-5.716a9.669 9.669 0 0 1 5.141 1.487"
                      transform="translate(129.26 -75.827)"
                    />
                    <path
                      id="Path_19"
                      data-name="Path 19"
                      d="M120.227 75.962v10.283h14V75.962h2.538v23.071h-2.538V88.582h-14v10.451h-2.535V75.962Z"
                      transform="translate(148.056 -75.657)"
                    />
                    <path
                      id="Path_20"
                      data-name="Path 20"
                      d="M148.409 75.962v2.267h-10.08v8.052h9.744v2.265h-9.744v8.188h10.351v2.3h-12.889V75.962Z"
                      transform="translate(171.112 -75.657)"
                    />
                    <path
                      id="Path_21"
                      data-name="Path 21"
                      d="M150.694 75.962h8.493c7.542 0 12.415 4.7 12.415 11.3 0 7.172-5.075 11.774-12.415 11.774h-8.493Zm8.459 20.772c6.055 0 9.809-3.586 9.809-9.268 0-5.582-3.654-9.237-10.182-9.237h-5.548v18.5Z"
                      transform="translate(190.096 -75.657)"
                    />
                    <path
                      id="Path_22"
                      data-name="Path 22"
                      d="M189.164 75.829V99.2h-2.535V80.126l-4.466 3.55-1.455-1.792 7.474-6.055Z"
                      transform="translate(228.33 -75.827)"
                    />
                    <path
                      id="Path_23"
                      data-name="Path 23"
                      d="M198.172 97.648c4.364-3.045 6.967-6.426 7.747-9.844a7.927 7.927 0 0 1-4.4 1.353 6.445 6.445 0 0 1-6.46-6.5 6.668 6.668 0 0 1 6.833-6.833c4.332 0 7.306 3.384 7.306 8.254 0 5.551-3.652 11.606-9.5 15.426Zm3.856-10.792c1.96 0 4.5-.675 4.5-3.315 0-3.045-1.662-5.378-4.636-5.378a4.2 4.2 0 0 0-4.3 4.4 4.309 4.309 0 0 0 4.434 4.3"
                      transform="translate(246.612 -75.828)"
                    />
                    <path
                      id="Path_24"
                      data-name="Path 24"
                      d="M221.167 78.365h-11.16v-2.4h14.948c-2.435 5.414-4.873 10.894-10.792 23.378l-2.231-1.016Z"
                      transform="translate(265.654 -75.657)"
                    />
                    <path
                      id="Path_25"
                      data-name="Path 25"
                      d="M236.742 75.962v2.267H229.1v6.562c.5-.034.844-.034 1.182-.034 4.668 0 7.745 2.942 7.745 7.172a7.165 7.165 0 0 1-7.577 7.408 11.27 11.27 0 0 1-5.48-1.387v-2.605a10.164 10.164 0 0 0 5.075 1.558c3.179 0 5.378-2.133 5.378-4.973 0-3.586-3.452-4.937-5.785-4.937a10.193 10.193 0 0 0-2.876.337V75.962Z"
                      transform="translate(284.712 -75.657)"
                    />
                  </g>
                </g>
              </g>
              <path
                id="frame"
                d="M50 55h975v1810H55V50"
                fill="none"
                stroke="#77c5d5"
                stroke-width="10"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
