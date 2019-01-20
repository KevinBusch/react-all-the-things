import React                      from 'react';
import { NestedComponentLevel2 } from './nested-component-level2';

export class NestedComponentLevel1 extends React.Component {
    render() {
			console.log("rendering nested-component-level1");
      return <NestedComponentLevel2 />
    }
  };
