import React from "react";
import { Link } from 'react-router-dom';


function detail_header(){
    return (
        <div className="detailHeader">
             <Link className="detailHeaderLink" to={{
                pathname: '/'            }}>
            <h1 className="detailHeaderEMT">EMT</h1>
            </Link>
        </div>

    );

}
export default detail_header;