import Button from '../Button/Button';
import CuteCatImageDiv from '../CuteCatImageDiv/CuteCatImageDiv';
import Dropdown, { cars, cookies } from '../Dropdown/Dropdown';
import './Main.scss';

function Main() {
  return (
    <>
      <main>
        <Dropdown label='cars' id='cars' items={cars} />
        <Dropdown label='cookies' id='cookies' items={cookies} />
        <Button title='Knappis' />
        <Button title='Knappis igen' />
        <CuteCatImageDiv />
      </main>
    </>
  );
}

export default Main;
