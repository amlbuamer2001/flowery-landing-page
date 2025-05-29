export function WelcomeMessage({ visible }) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        right: "10px",
        backgroundColor: "#760490",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        zIndex: 9999,
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        fontWeight: "bold",
      }}
    >
      Welcome to Fl🌸wery 🎉
    </div>
  );
}
