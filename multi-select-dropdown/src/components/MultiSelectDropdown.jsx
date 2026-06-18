import { useState, useRef, useEffect } from "react";

export default function MultiSelectDropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef();
  const inputRef = useRef();

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleOption = (option) => {
    const isAlreadyChecked = selected.some((o) => o.id === option.id);
    if (isAlreadyChecked) {
      setSelected((prev) => prev.filter((o) => o.id !== option.id));
    } else {
      setSelected((prev) => [...prev, option]);
    }
  };

  const clearAll = () => {
    setSelected([]);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="container">
      <div className="title">Multi Select Dropdown</div>
      <div className="wrapper" ref={dropdownRef}>
        <div className="trigger" onClick={() => setIsOpen(true)}>
          <div className="selected-container">
            {selected.length > 0 ? (
              selected.map((item) => (
                <span key={item.id} className="tag">
                  {item.label}
                  <button className="remove-btn">×</button>
                </span>
              ))
            ) : (
              <span className="placeholder">Select options ...</span>
            )}
          </div>

          <div className="actions">
            {selected.length > 1 && (
              <button onClick={clearAll} className="clear-btn">
                Clear All
              </button>
            )}
            <span className="arrow">{isOpen ? "▲" : "▼"}</span>
          </div>
        </div>
        {isOpen && (
          <div className="dropdown">
            <input
              className="search-input"
              placeholder="Search ..."
              type="text"
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="options-list">
              {filteredOptions.map((option) => {
                return (
                  <div
                    key={option.id}
                    className="option"
                    onClick={() => handleOption(option)}
                  >
                    <input
                      type="checkbox"
                      checked={selected.some((o) => o.id === option.id)}
                      onChange={() => {}}
                    />
                    <span>{option.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
