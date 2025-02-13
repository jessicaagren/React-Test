import Button from '../Button/Button';
import CuteCatImageDiv from '../CuteCatImageDiv/CuteCatImageDiv';
import Dropdown from '../Dropdown/Dropdown';
import './Main.scss';

function Main() {
  return (
    <>
      <main>
        <Dropdown title='cars' />
        <Button title='Knappis' />
        <Button title='Knappis igen' />
        <CuteCatImageDiv />
      </main>
    </>
  );
}

export default Main;
