
import React from 'react';

const DEFAULT_NUM_SQUARES = 25; // Default number of squares 
const boxSize = 100; // Size of each large box in pixels
const smallBoxSize = boxSize / 4; // Size of each smaller box (1/4 of large box size)

interface HeaderMainProps {
  numSquares?: number; // Allow for customization if needed
}

export const HeaderMain: React.FC<HeaderMainProps> = ({ numSquares = DEFAULT_NUM_SQUARES }) => {
  return (
    <div className="fixed top-[71px] left-0 w-full overflow-hidden z-[-1]">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${numSquares}, ${boxSize}px)`,
          gridTemplateRows: `repeat(${numSquares}, ${boxSize}px)`,
        }}
      >
        {Array.from({ length: numSquares * numSquares }).map((_, index) => (
          <div
            key={index}
            className="relative"
            style={{
              width: boxSize,
              height: boxSize,
            }}
          >
            <div
              className="grid grid-cols-4 grid-rows-4 gap-0 absolute top-0 left-0 w-full h-full box-border"
              style={{
                border: `${1.86}px solid #EBEBEB`, 
              }}
            >
              {Array.from({ length: 16 }).map((_, smallIndex) => (
                <div
                  key={smallIndex}
                  className="box-border"
                  style={{
                    width: smallBoxSize,
                    height: smallBoxSize,
                    backgroundColor: 'white', 
                    border: `${1.33}px solid #EBEBEB`, 
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderMain;

