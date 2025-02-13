import './Subheading.scss';

type SubHeadingProps = {
  title: string;
};

function Subheading({ title }: SubHeadingProps) {
  return (
    <>
      <p>{title}</p>
    </>
  );
}

export default Subheading;
