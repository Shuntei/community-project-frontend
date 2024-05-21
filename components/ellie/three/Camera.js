import React, { useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'

// export const Camera = (props) => {
//   const ref = useRef(); //相機接到 React元件
//   const setDefaultCamera = useThree(); //React Three Fiber 的hook
//   useEffect(() => { //hook
//     setDefaultCamera(ref.current);
//   },[]);
//   return<perspectiveCamera ref={ref} {...props}/>;
//   //透視相機，把屬性遞給 props
// };
function Camera(props) {
  const ref = useRef();
  const { setDefaultCamera } = useThree();

  useEffect(() => {
    setDefaultCamera(ref.current);
  }, [setDefaultCamera]);

  return (
    <perspectiveCamera ref={ref} {...props} />
  );
}

export default Camera;
