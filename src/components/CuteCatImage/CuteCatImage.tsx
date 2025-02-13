import './CuteCatImage.scss';

type CuteCatImageProps = {
  image: string;
};

function CuteCatImage({ image }: CuteCatImageProps) {
  return (
    <>
      <img src={image} alt='CuteCatImage' />
    </>
  );
}

export default CuteCatImage;
