import "./buttongo.css";

interface ButtonGoProps {
  isActive: string | boolean;
  onClick: ()=>void;
}

const ButtonGo = ({ isActive, onClick }: ButtonGoProps) => {
  return (
    <>
      <button className="start" disabled={!isActive} onClick={onClick}>
        Let's shuffle it!
      </button>
    </>
  );
};

export default ButtonGo;
