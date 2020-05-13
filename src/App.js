import React from 'react';
// import Project from './components/Project.js';
import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
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

  // COLORS: https://flatuicolors.com/palette/nl

  render() {
    // { this.state.projects.map((project) =>
    //   <Project {...project} key={project.name} />
    // )}
    const options = {
      template: templateExtend(TemplateName.Metro, {
        colors: [
          "gray",
          "#5758BB",
          "#EA2027",
          "#EE5A24",
          "#B53471",
          "#F79F1F",
          "#006266",
          "#6F1E51",
          "#B53471",
          "#1B1464",
          "#006266",
          "#EE5A24"
        ],
        commit: {
          message: { displayHash: false, displayAuthor: false }
        }
      })
    }

    // learning.commit({
    //   subject: 'Dec 2008',
    //   body: 'Took Introduction to programming in Java (CS 142) at Brigham Young University',
    //   dotText: 'x',
    //   tag: 'a gag'
    // })
    if (this.state.projects.length === 0) {
      return null
    }

    return (
      <div className="App" >
        <h1 style={{ fontFamily: 'Arial', textAlign: 'center' }}>
          Marvin Alejandro Herrera Vizuett
        </h1>

        <div style={{ marginTop: '2.5em' }}>
          <Gitgraph options={options}>
            {(gitgraph) => {
              const learning = gitgraph.branch('learning');
              learning.commit('Initial commit');

              this.state.projects.forEach(project => {
                const name = project.name;
                const date = `${project.date.start} - ${project.date.end}`;
                const highlights = project.highlights;

                const branch = gitgraph.branch(name);

                highlights.forEach(highlight => {
                  const desc = highlight.desc;
                  let summary = desc.substring(0, 50);
                  summary += '...';

                  branch.commit({
                    subject: summary,
                    body: desc,
                    // tag: project.employer
                  });
                });

                branch.merge(learning, date);
              });
            }}
          </Gitgraph>
        </div>
      </div>
    )
  }
}

export default App;
