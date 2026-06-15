function CreateRequesterFields({
  formData,
  handleChange
}) {

  const inputStyle = {
    width: "100%",
    padding: "10px"
  };

  return (

    <>

      <p>Name</p>

      <input
        type="text"
        name="requesterName"
        value={formData.requesterName}
        onChange={handleChange}
        style={inputStyle}
      />

      <p>Email</p>

      <input
        type="text"
        name="requesterEmail"
        value={formData.requesterEmail}
        onChange={handleChange}
        style={inputStyle}
      />

      <p>Phone</p>

      <input
        type="text"
        name="requesterPhone"
        value={formData.requesterPhone}
        onChange={handleChange}
        style={inputStyle}
      />

    </>
  );
}

export default CreateRequesterFields;