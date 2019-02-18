import React, { Component } from 'react';

class ErrorMs extends Component {
    render(){
        return(

                <div className="messages-wrapper">

                    <div role="contentinfo" aria-label="Fejlmeddelelse" className={this.props.error + " messages messages--error"}>
                        <div role="alert">
                                <h2 className="visually-hidden">Fejlmeddelelse</h2>
                                    Udfyld alle felter
                                </div>
                        <div className="close" onClick={this.props.closeError}>Luk</div>
                    </div>
                </div>

            );
        }
}

export default ErrorMs;