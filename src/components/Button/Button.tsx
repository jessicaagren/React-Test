import './Button.scss';

type ButtonProps = {
  title: string;
  id?: string;
  hasIcon: boolean;
  clickFunction: () => void;
};

function Button({ title, id, hasIcon, clickFunction }: ButtonProps) {
  const handleClick = () => {
    clickFunction();
  };
  return (
    <>
      <button id={id} onClick={handleClick}>
        {hasIcon && '😻'}
        {title}
      </button>
    </>
  );
}

export default Button;
