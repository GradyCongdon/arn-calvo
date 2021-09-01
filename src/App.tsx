import { useState } from 'react';
import { NodeComponent, Node } from './Node';
import './App.css';
import styled from 'styled-components';


const n = ({ value, left = null, right = null, width = 220, height = 90 }: any) => ({
  value,
  left,
  right,
  width,
  height,
});


const nR = (width: number, height: number) => {
  const B = {
    value: 'B',
    width,
    height: height * (5 / 2),
    left: null,
    right: null,
  }

  const A = {
    value: 'A',
    width,
    height,
    left: null,
    right: null,
  };

  const C = {
    value: 'C',
    left: B,
    right: A,
    width,
    height: 0,
  }

  return {
    root: C,
  }
}




const inOrder = (node: Node, callback: any) => {
  callback(node)
  if (node.left) inOrder(node.left, callback);
  if (node.right) inOrder(node.right, callback);
}


const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Tree = ({ tree, x, y }: any) => {
  const nodes = [] as Node[];
  const addNode = (x: any) => nodes.push(x);
  inOrder(tree.root, addNode);
  console.log(nodes);
  const Nodes = nodes.map((node, i) => <NodeComponent key={i} {...node} />);
  const style = {
    position: 'absolute' as any,
    top: y,
    left: x,
  }
  return (
    <div style={style}>
      {Nodes}
    </div>
  )
}


function App() {

  return (
    <Main>
      <div>
        <Tree tree={nR(20, 100)} x={500} y={200} />
        <Tree tree={nR(250, 50)} x={500 + 20} y={200 - 100} />
        <Tree tree={nR(560, 175)} x={500 + 20 + 250} y={200 - 100 + 50} />
        <Tree tree={nR(150, 95)} x={500 + 20 + 250 + 560} y={200 - 100} />
      </div>
    </Main>
  );
}

export default App;
