import React from "react";

interface HamburgerProps {
  onClick: () => void;
  toggled: boolean;
  className?: string;
}

const Hamburger: React.FC<HamburgerProps> = ({
  onClick,
  toggled,
  className = "",
}) => {
  return (
    <button
      type='button'
      aria-label='navigation'
      className={`root ${className}`}
      onClick={onClick}
    >
      <style jsx>{`
        .root {
          border: none;
          outline: none;
          background: none;
          position: relative;
          padding: 5px 2px 2px 2px;
          min-width: 45px;
          min-height: 45px;
          margin-right: 0.5rem;
          z-index: 3;
        }
        .bar {
          background-color: #310056;
          min-height: 4px;
          min-width: 20px;
          transition: transform 300ms;
        }
        .bar ~ .bar {
          margin-top: 6px;
        }
      `}</style>
      <style jsx>{`
        .first {
          transform: translateY(${toggled ? "250%" : 0})
            rotateZ(${toggled ? "45deg" : 0});
        }
        .second {
          transform: scaleX(${toggled ? 0 : 1});
        }
        .third {
          transform: translateY(${toggled ? "-250%" : 0})
            rotateZ(${toggled ? "-45deg" : 0});
        }
      `}</style>
      <div className='bar first'></div>
      <div className='bar second'></div>
      <div className='bar third'></div>
    </button>
  );
};

export default Hamburger;
