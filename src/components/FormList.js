import React from 'react';
import Collapsables from './Collapsables';


class FormList extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        console.log('hey :)');
          return (
              <div className="grid-1">
                <ul id="formList" className="formList">
                    <Collapsables></Collapsables>
                </ul>
              </div>
          );
    }
  }

export default FormList;