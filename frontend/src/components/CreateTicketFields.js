function CreateTicketFields({
  formData,
  handleChange
}) {

  const inputStyle = {
    width: "100%",
    padding: "10px"
  };

  return (

    <>

      <p>Category</p>

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        style={inputStyle}
      >

        <option value="">
          Select Category
        </option>

        <option value="Network">
          Network
        </option>

        <option value="Personal Computing">
          Personal Computing
        </option>

        <option value="Email">
          Email
        </option>

        <option value="Phone">
          Phone
        </option>

      </select>

      <p>Priority</p>

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        style={inputStyle}
      >

        <option value="">
          Select Priority
        </option>

        <option value="Low">
          Low
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="High">
          High
        </option>

        <option value="Critical">
          Critical
        </option>

      </select>

      <p>Title</p>

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        style={inputStyle}
      />

      <p>Description</p>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "120px",
          padding: "10px"
        }}
      />

    </>
  );
}

export default CreateTicketFields;