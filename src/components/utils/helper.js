export default function LightModeText(mode) {
  if (mode === "true") {
    return { color: "white" };
  } else if (mode === true) {
    return { color: "white" };
  } else {
    return { color: "" };
  }
}
