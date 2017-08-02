import React from 'react';
import './accordion.css'

export class Accordion extends React.Component {
  // mock data this could come from an api.
  accordion = [
    {
      id: 'accordion-id-1',
      title: 'accordion title 1',
      content: 'I am the contents of tab 1'
    },
    {
      id: 'accordion-id-2',
      title: 'accordion title 2',
      content: 'I am the contents of tab 2'
    }
  ];

  constructor(props) {
    super();
  }

  toggleAccordion(event) {
    const accordionHeader = document.querySelectorAll('#accordion div h2')

    this.accordion.forEach((accordionTab, i) =>
      event.target.id === accordionTab.id ?
        accordionHeader[i].nextElementSibling.classList.value.indexOf('closed') > -1
        ? accordionHeader[i].nextElementSibling.setAttribute('class', '')
        : accordionHeader[i].nextElementSibling.setAttribute('class', 'closed')
        : null
    );
  }

  render() {
    let accordions  = this.accordion.map((accordion) =>
      <div key={accordion.id}>
        <h2 onClick={this.toggleAccordion.bind(this)} id={accordion.id}>{accordion.title}</h2>
        <div className="closed">{accordion.content}</div>
      </div>
    );

    return <div id="accordion">{accordions}</div>;
  }
}
