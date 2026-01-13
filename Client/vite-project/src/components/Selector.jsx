function Selector({ label, data = [], onChange }) {
  return (
    <div className="selector">
      <label>{label}</label>

      <select onChange={e => onChange(e.target.value)}>
        <option value="">Select {label}</option>

        {Array.isArray(data) &&
          data.map(item => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Selector;
