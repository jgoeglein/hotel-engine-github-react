import React from 'react';
import './Loading.css';

// From https://loading.io/css/
class Loading extends React.PureComponent {
    render() {
        return <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>;
    }
}

export default Loading;