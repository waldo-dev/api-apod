import React from 'react';
import Content from './Content';
import './App.css';

class App extends React.Component{

    state = {
        title: '',
        image: '',
        date: '',
        copyright: '',
        explanation: ''
    }

    async componentDidMount(){
      await this.fetchApi()
    }

    fetchApi = async () => {
      const key = 'nBO0suGfc5jRpUyiP3zSHUaiNQmiHllSwsBfu6iD'
      const URL_API = `https://api.nasa.gov/planetary/apod?api_key=${key}`
      let res = await fetch(URL_API);
      let data = await res.json();

      this.setState({
        title: data.title,
        image: data.url,
        date: data.date,
        copyright: data.copyright,
        explanation: data.explanation
      });
    }

    render(){
      return (
        <div className="container">
          <h1 className="text-center">Imagen del Día Nasa</h1>
          <Content {...this.state}/>
        </div>
      )
    }
  }

export default App;
