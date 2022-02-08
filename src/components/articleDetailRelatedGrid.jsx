import { CardGroup } from 'react-bootstrap';
import Card from '../components/articleDetailRelated';

function grid(props) {
    let arrArt = Object.values(props);
    //tratar las fechas
    return (
        <div>
        <h2>Relacionados</h2>
        <CardGroup>
            {arrArt.map(a => <Card{...a}></Card>)}
        </CardGroup>
        </div>
    );

}
export default grid;