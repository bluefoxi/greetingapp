import React, { Component } from 'react';

class SuccesMs extends Component {
    render(){
        return(

                <div className="messages-wrapper">

                    <div role="contentinfo" aria-label="Succesmeddelelse" className={this.props.succes + " messages messages--succes"}>
                        <div role="alert">
                                <h2 className="visually-hidden">Succesmeddelelse</h2>
                                    besked sendt
                                </div>
                        <div className="close" onClick={this.props.closeSucces}>Luk</div>
                    </div>
                </div>

            );
        }
}

export default SuccesMs;