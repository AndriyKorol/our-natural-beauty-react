import React from 'react';
import classNames from 'classnames';
import {Route} from 'react-router-dom';

function Content({ children }) {
    let contentClassName = classNames({
       content: true,
    });

    return (
        <main>
            {children}
        </main>
    )
}

export default Content