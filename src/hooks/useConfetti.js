// import React, { Component } from "react"
// import PropTypes from "prop-types"
// // this libraries are client-side only
// import confetti from "canvas-confetti"
// import Loadable from "react-loadable"

// const Confetti = () => {
//   let end = performance.now() + 3 * 1000

//   let colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]

//   // custom component using shopify client-side libraries
//   const frame = () => {
//     confetti({
//       particleCount: 5,
//       angle: 60,
//       spread: 55,
//       origin: { x: 0 },
//       colors: colors,
//     })
//     confetti({
//       particleCount: 5,
//       angle: 120,
//       spread: 55,
//       origin: { x: 1 },
//       colors: colors,
//     })

//     if (performance.now() < end) {
//       requestAnimationFrame(frame)
//     }
//   }
//   requestAnimationFrame(frame)
//   return <div></div>
// }
// const useConfetti = Loadable({
//   loader: () => import("./confetti"),
//   loading: Loading,
// })

// export default useConfetti
