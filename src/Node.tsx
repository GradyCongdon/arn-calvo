import styled from 'styled-components';

const Label = styled.span`
  --size: 1rem;
  position: absolute;
  font-size: var(--size);
  line-height: var(--size);
  bottom: calc(var(--size) / -2);
  left: calc(-1 * var(--size));
`;

export interface Node {
  value: string;
  height: number;
  width: number;
  left: Node | null;
  right: Node | null;
}


interface NodeProps extends Node {
  className?: string;
}

export const NodeComponentPlain = ({ value, className }: NodeProps) => {
  return (
    <section className={className}>
      <Label>{value}</Label>
    </section>
  )
}


type NodeStyleProps = Omit<Node, 'left' | 'right' | 'className'>;
const p = (prop: keyof NodeStyleProps) => (props: NodeProps) => props[prop];

export const NodeComponent = styled(NodeComponentPlain)`
  width: ${p('width')}px;
  height: ${p('height')}px;
  margin-left: 30px;
  border: 1.5px solid black;
  border-right: none;
  border-bottom: none;
  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;
  &:first-of-type {
    height: 0;
    border: none;
  }
  &:last-of-type {
    border-bottom: 1.5px solid black;
  }
`;