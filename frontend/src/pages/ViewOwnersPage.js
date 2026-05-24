import { useEffect, useState } from "react";

function ViewOwnersPage({
  setCurrentPage
}) {

  const [owners, setOwners] = useState([]);

  useEffect(() => {

    fetchOwners();

  }, []);

  const fetchOwners = async () => {

    const response = await fetch("http://localhost:8080/owners");

    const data = await response.json();

    setOwners(data);
  };

  const deleteOwner = async (ownerId) => {

    await fetch(`http://localhost:8080/owners/${ownerId}`, {
      method: "DELETE"
    });

    fetchOwners();
  };

  return (

    <div style={{
      padding: "30px"
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>

        <h1 style={{
          color: "#d94f8a"
        }}>
          Owners
        </h1>

        <button
          onClick={() => setCurrentPage("addOwner")}
          style={{
            backgroundColor: "#f7d7e6",
            border: "1px solid #d94f8a",
            padding: "10px 16px",
            cursor: "pointer"
          }}
        >
          + Add Owner
        </button>

      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "220px 260px 180px 120px",
        fontWeight: "bold",
        borderBottom: "2px solid lightpink",
        paddingBottom: "10px",
        marginBottom: "10px"
      }}>

        <div>Name</div>

        <div>Email</div>

        <div>Phone</div>

        <div>Action</div>

      </div>

      {owners.map((owner) => (

        <div
          key={owner.ownerId}
          style={{
            display: "grid",
            gridTemplateColumns: "220px 260px 180px 120px",
            alignItems: "center",
            padding: "12px 0",
            borderBottom: "1px solid #eee"
          }}
        >

          <div>
            {owner.name}
          </div>

          <div>
            {owner.email || "N/A"}
          </div>

          <div>
            {owner.phone || "N/A"}
          </div>

          <div>

            <button
              onClick={() => deleteOwner(owner.ownerId)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default ViewOwnersPage;