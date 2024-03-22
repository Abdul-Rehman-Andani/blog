import React from 'react';

const Loading2 = () => {
  return (
    <>
      {
        Array(10).fill(0).map((l) => {
            return <div style={{height: "50px"}} className='full'></div>
        })
      }
    </>
  )
}

export default Loading2;
