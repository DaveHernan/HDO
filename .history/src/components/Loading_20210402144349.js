import React from 'react';

import './loading'

class Loading extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
           
            <div className='loading'>
            <div className="loadingTxt">
                <p className='shinyTxt'>HDO Building and Design</p>
            </div>
            <div className="wrapLoad">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    </>
         );
    }
}
 
export default Loading;