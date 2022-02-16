import React from "react";
import { Link } from 'react-router-dom';


function header(date) {
    let dateFormat = "";
    Object.values(date).forEach(value => {
        dateFormat += value.valueOf()
    });
    return (
        <div className="head">
            <Link className="titleNotOutstanding" to={{
                pathname: '/'
            }}>
                <div className="headerobjectswrapper">

                    <header>El Mundo Tolai</header>
                </div>
            </Link>

            <div className="subheadHeader">{dateFormat}</div>
            <br></br>
        </div>

    );
}


export default header;







/*<div>
<head>
    <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic,900italic|Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="styles/newspaper.css">
    <title>Newspaper Style Design Experiment</title>
    <meta name="viewport" content="width=device-width">

</head>
<body>

</div>*/