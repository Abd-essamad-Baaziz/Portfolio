// import React, { useEffect, useRef } from 'react';

// function Animation() {
//   const bgAnimationRef = useRef(null);

//   useEffect(() => {
//     const numberOfColorBoxes = 400;

//     for (let i=0; i < numberOfColorBoxes; i++) {
//       const colorBox = document.createElement('div');
//       colorBox.classList.add('colorBox');
//       bgAnimationRef.current.append(colorBox);
//     }
//   }, []);

//   return (
//     <div ref={bgAnimationRef} id='bgAnimation' className='bgAnimation'>
//       <div className="backgroundAdmin"></div>
//     </div>
//   );
// }

// export default Animation;