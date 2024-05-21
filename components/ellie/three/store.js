// export const generateGameLevel = ({nbStages}) => {
//   const level = [];

//   for (let i = 0; i < nbStages; i++) {
//     const stage = [];
//     const nbOptions = 3+1;
//     for( let j = 0; j < nbOptions; j++) {
//       let obj = null;
//       while (!obj || stage.includes(obj)) {
//         obj = objs[Math.floor(Math.radom() * objs.length)];
//       }
//       stage.push(obj);
//     }
//     stage[Math.floor(Math.radom() * objs.length)].correct = true;
//     level.push(stage);
//   }
//   return  level;
// };