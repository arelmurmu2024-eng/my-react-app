import { useState } from "react";
import { ToggleRow, ClickGenerate, WordRange, GenerateButton } from "./Components.jsx";
import generatePassword from "./logic.js"; // Import the logic here too

function App() {
  // 1. Centralized State
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [settings, setSettings] = useState({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });

  // 2. Toggle Handler
  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // 3. Generate Function
  const handleGenerate = () => {
    const newPassword = generatePassword(
      length,
      settings.uppercase,
      settings.lowercase,
      settings.numbers,
      settings.symbols
    );
    setPassword(newPassword);
  };

  return (
    <div className="card border rounded-3 border-0">
      <div className="card-body">
        <h4 className="card-title">Password Generator</h4>
      </div>

      {/* Show the actual password here */}
      <ClickGenerate password={password} />

      <WordRange value={length} setValue={setLength} />

      <label id="settings">SETTINGS</label>
      <ToggleRow 
        label="uppercase" 
        isOn={settings.uppercase} 
        onToggle={() => handleToggle("uppercase")} 
      />
      <ToggleRow 
        label="lowercase" 
        isOn={settings.lowercase} 
        onToggle={() => handleToggle("lowercase")} 
      />
      <ToggleRow 
        label="numbers" 
        isOn={settings.numbers} 
        onToggle={() => handleToggle("numbers")} 
      />
      <ToggleRow 
        label="symbols" 
        isOn={settings.symbols} 
        onToggle={() => handleToggle("symbols")} 
      />

      <GenerateButton onGenerate={handleGenerate} />
    </div>
  );
}

export default App;