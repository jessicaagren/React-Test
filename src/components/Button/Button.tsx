import './Button.scss';

type ButtonProps = {
  title: string;
  clickFunction: () => void;
};

function Button({ title, clickFunction }: ButtonProps) {
  const handleClick = () => {
    clickFunction();
  };
  return (
    <>
      <button onClick={handleClick}>{title}</button>
    </>
  );
}

export default Button;
