import "./buttongo.css";

interface ButtonGoProps {
  isActive: string | boolean;
}

const ButtonGo = ({ isActive }: ButtonGoProps) => {
  return (
    <>
      <button className="start" disabled={!isActive}>
        Let's shuffle it!
      </button>
    </>
  );
};

export default ButtonGo;
