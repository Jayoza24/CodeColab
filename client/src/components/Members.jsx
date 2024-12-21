import Avatar from "react-avatar";

function Members({ username }) {
  return (
    <div
      className="client"
      style={{
        height: "80px",
        width: "80px",
        backgroundColor: "var(--light-blue)",
        borderRadius: "20px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar round="50px" name={username} size={50} />
      <span
        className="userName"
        style={{
          textAlign: "center",
          margin: "10px 0px",
          textWrap: "wrap",
          fontSize: "13px",
          color: "var(--black)",
        }}
      >
        {username}
      </span>
    </div>
  );
}

export default Members;
