import Thanks from "../thanks.gif";
import { Card } from 'react-bootstrap';


function ColumnGrid(props) {
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let columns = Object.values(props);
    console.log("props", columns)
    if (props) {
        return (
            <div>
                {columns.map((a, k) => {
                    return (
                        <Card>
                            <Card.Header as="h5">Columnas de opinión - El Mundo Tolai</Card.Header>
                            <Card.Body>
                                <Card.Title>{a.title}</Card.Title>
                                <Card.Text>
                                    {a.highlights}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
                <img className="newspaperGif" src={Thanks} alt='Thank You!!' />

            </div>
        );
    } else {
        return (
            <img className="newspaperGif" src={Thanks} alt='Than You!!' />
        );

    }
}
export default ColumnGrid;