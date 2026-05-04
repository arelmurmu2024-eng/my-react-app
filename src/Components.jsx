import "./App.css";

// 1. Use the 'isOn' and 'onToggle' props from App.jsx
export function ToggleRow({ label, isOn, onToggle }) {
  const onPhase = { backgroundColor: "#5e69e0", justifyContent: "flex-end" };
  const offPhase = { backgroundColor: "#1d2041", justifyContent: "flex-start" };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center border rounded-1 border-0">
      <span style={{textTransform: 'capitalize'}}>{label}</span>
      <div
        className="toggle-container"
        onClick={onToggle}
        style={isOn ? onPhase : offPhase}
      >
        <div className="toggle-knob"></div>
      </div>
    </div>
  );
}

// 2. Display the generated password
export function ClickGenerate({ password }) {
  return (
    <div className="click-generate d-flex justify-content-center align-items-center border rounded-1 border-0">
      <h2 className="click-generate-msg">
        {password || "Click Generate"}
      </h2>
    </div>
  );
}

// 3. Control the range from props
export function WordRange({ value, setValue }) {
  return (
    <div className="word-range d-flex flex-column align-items-start border rounded-2 border-0">
      <div className="d-flex justify-content-between w-100">
        <label id="rangeLabel">LENGTH</label>
        <output id="rangeValue">{value}</output>
      </div>
      <input
        type="range"
        className="form-range"
        min="6"
        max="20"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
}

// 4. Trigger the generate function passed via props
export function GenerateButton({ onGenerate }) {
  return (
    <div className="card-body">
      <button type="button" className="btn" onClick={onGenerate}>
        GENERATE
      </button>
    </div>
  );
}