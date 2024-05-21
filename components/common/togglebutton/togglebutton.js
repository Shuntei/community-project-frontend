import React, { useState } from 'react'
// import styles from './toggleButton';
import _JSXStyle from 'styled-jsx/style'

export default function ToggleButton() {
  // const ToggleButtonPage = () => {
  const [isLightOff, setIsLightOff] = useState(false)
  const [isGreen, setIsGreen] = useState(false)

  const toggleSwitchLight = () => {
    setIsLightOff(!isLightOff)
  }

  const toggleSwitch = () => {
    setIsGreen(!isGreen)
  }
  return (
    <>
      <div className="bg">
        {/* 黑底綠球 */}
        <div className="toggle" onClick={toggleSwitchLight}>
          {isLightOff ? (
            <div className="switch switch-light"></div>
          ) : (
            <div className="switch off-light"></div>
          )}
        </div>

        {/* 綠底白球 */}
        {/* <div
          className="toggle off-green"
          // onClick={() => setIsLightOff(!isLightOff)}
          onClick={toggleSwitch}>
          {isGreen ? (
            <div className="switch white-light"></div>
          ) : (
            <div className="switch off-white"></div>
          ) }
        </div> */}
        <div
          className={`toggle ${isGreen ? 'green' : 'off-green'}`}
          onClick={toggleSwitch}>
          <div
            className={`switch ${isGreen ? 'white-light' : 'off-white'}`}
          ></div>
        </div>
      </div>

      <style global jsx>{`
        :root {
          --light-bg: #ededed;
          --dark-bg: #1a1a1a;
          --light: #f2f2f2;
          --dark: #1a1a1a;

          --green: #a3e592;
          --green-bg: #c6c6c6;

          --on-light-shadow: inset 0 0 3px 0 rgb(255, 255, 255, 1),
            5px -7px 12px 0 rgb(102, 210, 51, 0.56),
            inset 5px -7px 12px 0 rgb(0, 0, 0, 0.25),
            -5px 5px 9px 0 rgb(0, 0, 0, 0.25);
          --on-light: radial-gradient(circle at 60% 30%, #acff85, #66d233);
          --off-light-shadow: inset 0 0 11px 0 rgb(255, 255, 255, 1),
            5px -7px 12px 0 rgb(197, 197, 197, 0.56),
            inset 5px -7px 12px 0 rgb(0, 0, 0, 0.25),
            -5px 5px 9px 0 rgb(0, 0, 0, 0.25);
          --off-light: radial-gradient(circle at 60% 30%, #d1d1d1, #dddddd);

          --on-dark-shadow: inset 0 0 19px 0 rgb(0, 0, 0, 1),
            15px -20px 38px 0 rgb(102, 210, 51, 0.24),
            inset 15px -20px 35px 0 rgb(0, 0, 0, 0.25),
            -15px 15px 28px 0 rgb(0, 0, 0, 0.72);
          --on-dark: radial-gradient(circle at 60% 30%, #91d372, #35651e);
          --off-dark-shadow: inset 0 0 37px 0 rgb(0, 0, 0, 1),
            15px -20px 38px 0 rgb(0, 0, 0, 0.14),
            inset 15px -20px 35px 0 rgb(0, 0, 0, 0.25),
            -15px 15px 28px 0 rgb(0, 0, 0, 0.25);
          --off-dark: radial-gradient(circle at 60% 30%, #343434, #484848);
          --off-red-dark-shadow: inset 0 0 17px 0 rgb(0, 0, 0, 1),
            15px -20px 38px 0 rgb(146, 59, 59, 0.14),
            inset 15px -20px 35px 0 rgb(0, 0, 0, 0.25),
            -15px 15px 28px 0 rgb(0, 0, 0, 0.25);
          --off-red-dark: radial-gradient(circle at 60% 30%, #a63d3d, #6f2929);

          --on-white-shadow: inset 0 0 3px 0 rgb(255, 255, 255, 1),
            5px -7px 12px 0 rgb(223, 223, 223),
            inset 5px -7px 12px 0 rgb(0, 0, 0, 0.12),
            -5px 5px 9px 0 rgb(0, 0, 0, 0.12);
          --on-white: radial-gradient(circle at 60% 30%, #ffffff, #f6f6f6);
          --off-white-shadow: inset 0 0 11px 0 rgb(255, 255, 255, 1),
            5px -7px 12px 0 rgb(197, 197, 197, 0.28),
            inset 5px -7px 12px 0 rgb(0, 0, 0, 0.2),
            -5px 5px 9px 0 rgb(0, 0, 0, 0.125);
          --off-white: radial-gradient(circle at 60% 30%, #d1d1d1, #dddddd);
        }

        .bg {
          background-color: #292929;
        }
        /* Toggle buttons */
        .toggle {
          height: 25px;
          width: 50px;
          border-radius: 25px;
        }

        .dark {
          background-color: var(--dark);
          box-shadow: inset 0 -5px 5px 0 rgb(0, 0, 0, 0.5),
            inset 0 5px 5px 0 rgb(255, 255, 255, 0.13),
            inset 23px -33px 28px 0 rgb(255, 255, 255, 0.03),
            inset -25px 28px 23px 0 rgb(0, 0, 0, 0.4),
            0 -15px 30px 0 rgb(255, 255, 255, 0.08),
            0 25px 41px 0 rgb(0, 0, 0, 0.4);
        }

        .light {
          background-color: #4a4a4a;
          box-shadow: inset 0 -5px 5px 0 rgb(0, 0, 0, 0.13),
            inset 0 5px 5px 0 #383838, 0 25px 41px 0 rgb(0, 0, 0, 0.16);
        }

        .toggle {
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          cursor: pointer;
        }

        /* Switches */

        .switch {
          height: 24px;
          width: 24px;
          border-radius: 20px;
          position: absolute;
          transition: all ease 0.3s;
          right: 0.5px;
          animation: bounce-right 0.7s ease-out;
        }

        .switch-light {
          background: var(--on-light);
          box-shadow: var(--on-light-shadow);
        }

        .switch.off-light {
          transform: translateX(-25px);
          transition: all ease 0.3s;
          background: var(--off-light);
          box-shadow: var(--off-light-shadow);

          animation: bounce-left 0.7s ease-out;
        }

        .white-light {
          background: var(--on-white);
          box-shadow: var(--on-white-shadow);
        }
        .switch.off-white {
          transform: translateX(-25px);
          transition: all ease 0.3s;
          background: var(--off-white);
          box-shadow: var(--off-white-shadow);

          animation: bounce-left 0.7s ease-out;
        }

        .green {
          background-color: #a3e592;
          box-shadow: inset 0 -5px 5px 0 rgb(0, 0, 0, 0.13),
            inset 0 5px 5px 0 #5d8253, 0 25px 41px 0 rgb(0, 0, 0, 0.16);
        }

        .off-green {
          background-color: #4a4a4a;
          box-shadow: inset 0 -5px 5px 0 rgb(0, 0, 0, 0.13),
            inset 0 5px 5px 0 #383838, 0 25px 41px 0 rgb(0, 0, 0, 0.16);
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
        }
        .center2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px;
        }

        /* animations */

        @keyframes bounce-left {
          0% {
            transform: translateX(0px);
          }
          15% {
            transform: translateX(-40px);
          }
          30% {
            transform: translateX(-25px);
          }
          45% {
            transform: translateX(-30px);
          }
          60% {
            transform: translateX(-25px);
          }
          75% {
            transform: translateX(-26px);
          }
          100% {
            transform: translateX(-25px);
          }
        }

        @keyframes bounce-right {
          0% {
            transform: translateX(-25px);
          }
          15% {
            transform: translateX(15px);
          }
          30% {
            transform: translateX(0);
          }
          45% {
            transform: translateX(5px);
          }
          60% {
            transform: translateX(0);
          }
          75% {
            transform: translateX(1px);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* screen */

        @media only screen and (max-width: 600px) {
          body {
            flex-direction: column;
            align-items: flex-start;
          }

          .light-side {
            width: 100%;
            gap: 3em;
          }

          .light-side::before {
            width: 100%;
            height: 50%;
          }
        }

        @media only screen and (max-width: 750px) {
          .light-side {
            gap: 2em;
          }
        }
      `}</style>
    </>
  )
}
