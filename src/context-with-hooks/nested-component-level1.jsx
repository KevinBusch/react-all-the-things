import React                      from 'react';
import { NestedComponentLevel2 } from './nested-component-level2';

export function NestedComponentLevel1 () {
  console.log("rendering nested-component-level1");
  return <NestedComponentLevel2 />
};
