import * as React from 'react';

export interface ButtonProps {
  name: string;
}

export default function Button(props: ButtonProps) {
  return <button>Sample {props.name}</button>;
}
