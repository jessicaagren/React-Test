import CuteCatImage from '../CuteCatImage/CuteCatImage';
import './CuteCatImageDiv.scss';

function CuteCatImageDiv() {
  return (
    <>
      <div className='CuteCatImageDiv'>
        <CuteCatImage image='https://miro.medium.com/v2/resize:fit:1080/0*A7MUqyCLvZDcHkfM.jpg' />
        <CuteCatImage image='https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif' />
        {/* <CuteCatImage image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUWB51JwETzUH9_F2hZJzagg0LKEV6dYi8g&s' />
        <CuteCatImage image='https://rukminim2.flixcart.com/image/720/864/kph8h3k0/poster/e/w/4/large-adorable-cat-poster-cute-kittens-poster-cat-poster-funny-original-imag3p7tcxuzhpn2.jpeg?q=60&crop=false' />
        <CuteCatImage image='https://i.pinimg.com/736x/b6/a6/d5/b6a6d50de7eb36065b98ebd254d46cd5.jpg' />
        <CuteCatImage image='https://cdn.shopify.com/s/files/1/0086/0795/7054/files/cool_cat.jpg?v=1728024355' /> */}
      </div>
    </>
  );
}

export default CuteCatImageDiv;
