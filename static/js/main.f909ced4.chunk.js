(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],[,function(e,t,c){e.exports={project:"Project_project__1PEBx",projectPeriod:"Project_projectPeriod__c0Z4g",projectName:"Project_projectName__176WS",projectClient:"Project_projectClient__1rU2J",projectDesc:"Project_projectDesc__3BjQa",projectHighlight:"Project_projectHighlight__2jLL3",projectHighlights:"Project_projectHighlights__2cn9t",projectHighlightDesc:"Project_projectHighlightDesc__3rwDs",projectHighlightTech:"Project_projectHighlightTech__3UOoX",projectHighlightsTech:"Project_projectHighlightsTech__1GSLR",projectRole:"Project_projectRole__1rISg",projectEmployer:"Project_projectEmployer__39mfN",projectTechnologies:"Project_projectTechnologies__2otJe"}},,,,,,,function(e,t,c){e.exports=c(16)},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var r=c(0),o=c.n(r),a=c(3),n=c.n(a),i=(c(14),c(4)),s=c(5),l=c(7),p=c(6),j=c(1),h=c.n(j),m=function(e){var t=e.date.end?"".concat(e.date.start," - ").concat(e.date.end):"".concat(e.date.start," - present");return o.a.createElement("div",{className:h.a.project},o.a.createElement("h3",{className:h.a.projectName},e.name,o.a.createElement("span",{className:h.a.projectRole},"\xa0|\xa0",e.role)),o.a.createElement("div",{className:h.a.projectPeriod},e.employer&&o.a.createElement("span",{className:h.a.projectEmployer},e.employer),"\xa0|\xa0",t),o.a.createElement("p",{className:h.a.projectDesc},o.a.createElement("b",null,e.desc)),o.a.createElement("div",{className:h.a.projectHighlights},e.highlights.map((function(e,t){return o.a.createElement("div",{className:h.a.projectHighlight,key:t},o.a.createElement("p",{className:h.a.projectHighlightDesc},e.desc,"\xa0|\xa0",e.tech.map((function(e){return o.a.createElement("span",{className:h.a.projectHighlightTech,key:e},e)}))))}))))},g=(c(15),function(e){Object(l.a)(c,e);var t=Object(p.a)(c);function c(e){var r;return Object(i.a)(this,c),(r=t.call(this,e)).state={projects:[]},r}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var e=this;window.fetch("data.json").then((function(e){return e.json()})).then((function(t){e.setState({projects:t.projects})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Marvin Alejandro Herrera Vizuett"),o.a.createElement("h2",null,"cv | projects"),o.a.createElement("div",{style:{marginTop:"2.5em"}},this.state.projects.map((function(e){return o.a.createElement(m,Object.assign({},e,{key:e.name}))}))))}}]),c}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f909ced4.chunk.js.map