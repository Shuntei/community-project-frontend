import React,{ useState } from 'react'
import { createRoot } from "react-dom/client"
import App from './App'
import _JSXStyle from 'styled-jsx/style'

function Overlay() {
  const [ready, set] = useState(false)
  return (
    <>
      <App />
      <div className="dot" />
      <div className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
        <div className="stack">
          <button onClick={() => set(true)}>Start</button>
        </div>
      </div>
      <style global jsx>{`
      * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: lightblue;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          overflow: hidden;
        }

        body {
          position: fixed;
          overflow: hidden;
          overscroll-behavior-y: none;
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
            sans-serif;
          color: black;
        }

        .dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transform: translate3d(-50%, -50%, 0);
          border: 2px solid white;
        }

        button {
          width: 32px;
          height: 32px;
          color: inherit;
          font: inherit;
          cursor: pointer;
          outline: inherit;
          background: white;
          border: 1px solid transparent;
          border-bottom: 3px solid #a0a0a0;
          border-radius: 3px;
          padding: 8px 24px;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          width: auto;
          height: 45px;
        }

        .fullscreen {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: all 1s;
          z-index: 9999;
        }

        .stack {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: #606060;
        }

        .bg {
          background: #101010;
        }

        .fullscreen .logout {
          background: transparent;
          border: none;
          width: auto;
          color: white;
          display: block;
          margin: 10px auto;
        }

        .fullscreen .continue-link {
          text-decoration: none;
          transition: all 1s;
          width: 20%;
          text-align: center;
        }

        .fullscreen.notready .continue-link {
          cursor: auto;
          color: #606060;
        }

        .fullscreen.ready .continue-link {
          cursor: pointer;
          color: white;
        }

        .fullscreen.clicked {
          pointer-events: none;
          opacity: 0;
        }

        {/* .pmndrs-menu {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          color: #808080;
          padding: 40px;
          pointer-events: none;
          justify-content: center;
          align-items: flex-end;
          flex-direction: row;
          font-size: 10px;
          line-height: 1.5em;
        }

        .pmndrs-menu.left {
          justify-content: flex-start;
        }

        .pmndrs-menu.right {
          justify-content: flex-end;
        }

        .pmndrs-menu > div {
          word-wrap: none;
          word-break: none;
          white-space: pre;
          padding-left: 25px;
          padding-right: 25px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
        }

        .pmndrs-menu > div b {
          font-weight: 600;
          color: #b0b0b0;
        }

        .pmndrs-menu a {
          pointer-events: all;
          cursor: pointer;
          color: inherit;
          text-decoration: none;
        }

        .pmndrs-menu a:hover {
          text-decoration: underline;
          color: inherit;
        } */}
        `} </style>
    </>
  )
}

export default Overlay;