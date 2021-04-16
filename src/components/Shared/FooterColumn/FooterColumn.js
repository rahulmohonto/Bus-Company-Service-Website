import React from 'react';
import { Link } from 'react-router-dom';

const FooterColumn = (props) => {
    return (
        <div className="col-md-6">
            <h3 className="text-white">{props.menuTitle ? props.menuTitle : " "}</h3>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-warning">{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterColumn;