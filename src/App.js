import React from 'react';
import Project from './components/Project.js';
import "./App.css";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  
  
  componentDidMount() {
    window.fetch('data.json').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ projects: data.projects });
    });
  }
  
  
  render() {
    return (
      <div className="App" >
        <h1>Marvin Alejandro Herrera Vizuett</h1>
        <h2>cv | projects</h2>
        
        <div style={{ marginTop: '2.5em' }}>
          { this.state.projects.map((project) =>
            <Project {...project} key={project.name} />
          )}
        </div>
      </div>
    )
  }
}

export default App;