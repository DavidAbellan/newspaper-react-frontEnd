import {Link} from 'react-router-dom';
function Header () {
    return (
        <div className="columnHeader">
             <Link to={{
            pathname: "/"
          }}>
            <h2>El Mundo Tolai presenta :</h2>
            </Link>
        </div>
    )

}
export default Header;