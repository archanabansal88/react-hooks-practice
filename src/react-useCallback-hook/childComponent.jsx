import { memo } from "react";

// type ChildComponentprops = {
//   onChange: (text: string) => void;
// };
const ChildComponent = ({ onChange }) => {
  console.log("rendered");
  return (
    <div>
      <input
        type="text"
        placeholder="enter text..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default memo(ChildComponent);
