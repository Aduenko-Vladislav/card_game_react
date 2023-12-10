import "./ButtonRoundStyle.css";

interface ButtonShuffle {
  onClick: ()=>void;
}

const ButtonRound = ({onClick}:ButtonShuffle) => {  
  
  return (
    <>
      <button className="round" onClick={onClick}>
        Next Round!
      </button>
    </>
  );
};

export default ButtonRound;
