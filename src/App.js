import React from 'react';
import Project from './components/Project.js';

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
      console.log(data.projects);
      this.setState({ projects: data.projects });
    });
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>Marvin Alejandro Herrera Vizuett</h1>
        <div>CV</div>
        
        <h2>Experience by Projects:</h2>  
        { this.state.projects.map((project) =>
          <Project {...project} key={project.id} />
        )};
      </div>
    ); 
  }
}

export default App;
