import React,{ useState, useRef, useEffect } from 'react'
import create from 'zustand';
import { treasure } from './Constents';


export const GameLevel=({thStages}) =>{

   const level =[];

   for(let i=0; i < thStages; i++) {
    const stage = [];
    const thOptions = 1+1;
    for (let j = 0; j < thOptions; j++) {
      let obj = null;
      while (!obj || stage.includes(obj)){
        obj = treasure[Math.floor(Math.random() * treasure.length)];
      }
      stage.push(obj);
    }
    stage[Math.floor(Math.random() * stage.length)].correct = true; level.push(stage);
   }
   return level;
  };

  export const useGameStore = create((set) => ({
    level: null,
    currentStage: 0,
    currentObj: null,
    startGame: () =>{
      const level = GameLevel({thStages:1});
      currentObj = level[0].find((obj)=>obj.correct);
      set({level,currentStage: 0, currentObj});
    },
    nextStage: ()=>{
      set((state) =>{
        const currentStage = state.currentStage + 1;
        const currentObj = state.level[currentStage].find((obj) => obj.correct
        );
        return {currentStage, currentObj};
      })
    }
  }));