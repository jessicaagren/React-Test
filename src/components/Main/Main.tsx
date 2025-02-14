import Button from '../Button/Button';
import CuteCatImageDiv from '../CuteCatImageDiv/CuteCatImageDiv';
import Dropdown from '../Dropdown/Dropdown';
import List from '../List/List';
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
        <Button title='Knappis' clickFunction={() => console.log('Hej')} />
        <Button title='Knappis igen' clickFunction={() => console.log('Bu')} />
        <CuteCatImageDiv />
        <List title='Cars' items={cars} isNumbered={false} />
        <List title='Cookies' items={cookies} isNumbered={true} />
      </main>
    </>
  );
}

export default Main;
