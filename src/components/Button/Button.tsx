import './Button.scss';

type ButtonProps = {
  title: string;
};

function Button({ title }: ButtonProps) {
  const handleClick = () => {
    console.log('You clicked me!');
  };
  return (
    <>
      <button onClick={handleClick}>{title}</button>
    </>
  );
}

export default Button;
