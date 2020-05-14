import React from 'react';
// import Project from './components/Project.js';
import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // COLORS: https://flatuicolors.com/palette/nl
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

  // { this.state.projects.map((project) =>
  //   <Project {...project} key={project.name} />
  // )}
  render() {
    if (this.state.projects.length === 0) {
      return null
    }

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

    return (
      <div className="App" >
        <h1 style={{ fontFamily: 'Arial', textAlign: 'center' }}>
          Marvin Alejandro Herrera Vizuett
        </h1>

        <div style={{ margin: '2em' }}>
          <Gitgraph options={options}>
            {(gitgraph) => {
              const learning = gitgraph.branch('learning');
              const jobs = gitgraph.branch('job');
              const freelance = gitgraph.branch('freelance');

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
