function SortableHeader({
  label,
  field,
  sortField,
  sortDirection,
  onSort
}) {

  const showArrow =
    sortField === field;

  const arrow =
    sortDirection === "default"
      ? " ↓"
      : sortDirection === "reverse"
        ? " ↑"
        : "";

  return (

    <div
      onClick={() => onSort(field)}
      style={{
        cursor: "pointer",
        userSelect: "none"
      }}
    >
      {label}
      {showArrow && arrow}
    </div>
  );
}

export default SortableHeader;