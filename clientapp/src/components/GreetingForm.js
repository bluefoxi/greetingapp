import React, { Component } from 'react';
import categoryJson from '../customJson/category.json';
import { Row, Col } from 'react-bootstrap';


class GreetingForm extends Component {
    render(){
        return(
            <div>
                <form className="greetingForm" onSubmit={this.props.handleSubmit}>

                    <Row>
                        <Col className=" margin-right-5">
                            <input className="nameInput" data-type="name" type="text" placeholder="Navn" value={this.props.form.name} onChange={this.props.handleChange} />
                        </Col>
                        <Col className=" margin-left-5">
                            <input className="enmailInput" data-type="email" type="text" placeholder="Email" value={this.props.form.email} onChange={this.props.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <textarea className="commentInput" rows="10" data-type="comment" type="text" placeholder="Hilsen" value={this.props.form.comment} onChange={this.props.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span:7}}>
                            <div htmlFor="customCategoryChecked" className="checkBox">
                            <label htmlFor="customCategoryChecked" className={this.props.customCategory.customCategoryActive + " checkboxLabel"}>
                                <p>Brugerdefineret kategori</p>
                                <input className="hidden" type="checkbox" checked={this.props.customCategory.customCategoryChecked} id="customCategoryChecked" onChange={this.props.toggleChange}/>
                            </label>
                            </div>
                        </Col>
                    
                        <Col className="alignCenter">
                            <div className="fullWidth">
                            <select className="categoryDropDown" value={this.props.form.category} data-type="category" disabled={this.props.customCategory.customCategoryChecked} onChange={this.props.handleChange} >
                            
                            {categoryJson.map((data, index) => {
                                return <option key={index} value={data.Category}>
                                {data.Category}
                                </option>
                            })}
                            </select>
                            </div>
                        </Col>
                    </Row>
                    <Row className={this.props.customCategory.hideCustomCategory + " customCategory"}>
                        <Col>
                            <input  className="categoryInput" data-type="category" type="text" placeholder="kategori" disabled={!this.props.customCategory.customCategoryChecked} value={this.props.form.category} onChange={this.props.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="submitBox">
                            <input type="submit" value="SEND" className="submit" />
                        </Col>
                    </Row>
                </form>
            </div>

        );
    }

}

export default GreetingForm;