import { useState } from 'react';

function Range() {
  const [value, setValue] = useState(0);

  return (
    <div className="block">
      <h1>Range</h1>

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <p>{value}</p>
    </div>
  );
}

export default Range;
