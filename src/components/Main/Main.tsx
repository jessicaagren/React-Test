import Button from '../Button/Button';
import CuteCatImageDiv from '../CuteCatImageDiv/CuteCatImageDiv';
import Dropdown from '../Dropdown/Dropdown';
import './Main.scss';

function Main() {
  const cars = ['Volvo', 'Saab', 'Honda', 'Hyundai'];

  const cookies = [
    'Chocolate Chip',
    'White Chocolate Macadadamia',
    'Sugar Cookie',
    'Gingerbread',
  ];
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
