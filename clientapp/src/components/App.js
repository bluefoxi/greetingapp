import React, {Component} from 'react';
import update from 'immutability-helper';
import './../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import categoryJson from '../customJson/category.json';
import ErrorMs from './ErrorMs';
import SuccesMs from './SuccesMs';
import CenterElements from './CenterElements';
import Footer from './Footer';
import HeaderImg from './HeadImg'
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name : "",
        email: "",
        comment: "",
        category: categoryJson[0].Category
      },
      customCategory:{
        customCategoryChecked: false,
        customCategoryActive: "checkboxLabel",
        hideCustomCategory: "hide"
      },
      errorMs: "hide",
      succesMs: "hide",
      greetings:[{}]
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.closeError = this.closeError.bind(this);
    this.closeSucces = this.closeSucces.bind(this);
  }

  closeError(){
    this.setState({errorMs:"hide"});

  }
  closeSucces(){
    this.setState({succesMs:"hide"});
  }

  getGreetings() {
    axios.get('/jsonHandler/get')
    .then((response) => {
      console.log(response);
      this.setState({greetings: response.data})
    })
   .catch((error)=>{
      console.log(error);
   })
  };

  resetCheckBox(){
    var state = this.state.customCategory.customCategoryChecked;
    if(state){
      this.setState({
        customCategory:{
          customCategoryChecked: !state,
          customCategoryActive: !state ? "active" : "",
          hideCustomCategory: !state ? "show" : "hide"
        }
      })
    }

  }

  toggleChange(){

    var state = !this.state.customCategory.customCategoryChecked;

    this.setState({
      customCategory:{
        customCategoryChecked: state,
        customCategoryActive: state ? "active" : "",
        hideCustomCategory: state ? "show" : "hide"
      }
    })
  }
  handleChange(event) {

    var stateKey = event.target.getAttribute("data-type");

    var newState = update(this.state, {
      form: { [stateKey]: {$set: event.target.value} }
    })
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    var form = this.state.form;

    if ( (form.name && form.email && form.comment && form.category) !==""){
    
      axios.post('/jsonHandler/post', {
        name: form.name,
        email: form.email,
        comment: form.comment,
        category: form.category
      })
      .then((response) => {
        this.getGreetings();
        console.log(response)
        this.setState({errorMs:"hide"});
        this.setState({succesMs:"show"});
        this.setState({
          form:{
            name : "",
            email: "",
            comment: "",
            category: categoryJson[0].Category
          }
        })
        this.resetCheckBox();
        setTimeout(()=>{this.closeSucces()},7000)

      })
      .catch(function (error) {
        console.log(error);
      });
    }else{
      this.setState({errorMs:"show"});
    }

  }

  componentDidMount() {
    this.getGreetings();
  }

  render() {
    return (
      <div>
        <ErrorMs error={this.state.errorMs} closeError={this.closeError} />
        <SuccesMs succes={this.state.succesMs} closeSucces={this.closeSucces} />
        <HeaderImg />
        <CenterElements greetings={this.state.greetings} form={this.state.form}  customCategory={this.state.customCategory} handleChange={this.handleChange} handleSubmit={this.handleSubmit} toggleChange={this.toggleChange}/>
        <Footer />

      </div>
    );
  }
}

export default App;
