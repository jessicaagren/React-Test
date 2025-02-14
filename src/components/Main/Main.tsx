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
        <Button
          title='Knappis'
          id='Knappis'
          hasIcon={false}
          clickFunction={() => console.log('Hej')}
        />
        <Button
          title='Knappis igen'
          hasIcon={false}
          clickFunction={() => console.log('Bu')}
        />
        <Button
          title='Hello'
          hasIcon={true}
          clickFunction={() => console.log('Hello')}
        />
        <CuteCatImageDiv />
        <List title='Cars' items={cars} isNumbered={false} />
        <List title='Cookies' items={cookies} isNumbered={true} />
      </main>
    </>
  );
}

export default Main;
