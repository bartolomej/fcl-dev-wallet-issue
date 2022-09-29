import * as fcl from "@onflow/fcl";

fcl
  .config()
  .put("app.detail.title", "Flowser")
  // Point App at Emulator
  .put("accessNode.api", `http://localhost:8888`)
  .put("discovery.wallet", `http://localhost:8701/fcl/authn`);

export function App() {
  return (
    <button onClick={() => fcl.authenticate()}>Authenticate</button>
  );
}
