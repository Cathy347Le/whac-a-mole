type HoleProps = {
  id: number;
};

export const Hole = ({ id }: HoleProps) => (
  <div className={`hole hole${id}`}>
    <div className="mole">{id}</div>
  </div>
);
