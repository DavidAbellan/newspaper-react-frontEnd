import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CardOfGrid(props) {
    let path
    let id = props.id
    if (!props.highlights ) {
        path = '/art/' + id;
    } else {
        path = '/col/' + id;
    }
    let text = "**El Mundo Tolai reservado**";
    if (props.main_text !== undefined) {
        text = props.main_text.substring(0, 100) + "...";
    }
    return (
        <Card>
            <Card.Body>
            <Link onClick={()=>props.history.push(id)}  to={{
            pathname: path,
            query: { id }
          }}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
              </Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.updatedAt}</small>
            </Card.Footer>
        </Card>
    );

}
export default CardOfGrid;
