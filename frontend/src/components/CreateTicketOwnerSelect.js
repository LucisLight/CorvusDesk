function CreateTicketOwnerSelect({
  owners,
  formData,
  setFormData,
  setCurrentPage
}) {

  const handleOwnerChange = (event) => {

    const selectedOwner = owners.find(
      (owner) => owner.ownerId === event.target.value
    );

    if (!selectedOwner) {

      setFormData({
        ...formData,
        ownerId: "",
        ownerName: "",
        ownerEmail: "",
        ownerPhone: ""
      });

      return;
    }

    setFormData({
      ...formData,
      ownerId: selectedOwner.ownerId,
      ownerName: selectedOwner.name,
      ownerEmail: selectedOwner.email,
      ownerPhone: selectedOwner.phone
    });
  };

  return (

    <>

      <p>Owner</p>

      <select
        name="ownerId"
        value={formData.ownerId}
        onChange={handleOwnerChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      >

        <option value="">
          Select Owner
        </option>

        {owners.map((owner) => (

          <option
            key={owner.ownerId}
            value={owner.ownerId}
          >
            {owner.name}
          </option>

        ))}

      </select>

      <button
        type="button"
        onClick={() => setCurrentPage("addOwner")}
        style={{
          marginBottom: "15px",
          backgroundColor: "#f7d7e6",
          border: "1px solid #d94f8a",
          padding: "6px 12px",
          cursor: "pointer"
        }}
      >
        + New Owner
      </button>

    </>
  );
}

export default CreateTicketOwnerSelect;