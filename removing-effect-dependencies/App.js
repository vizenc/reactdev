import { useEffect, useEffectEvent } from "react";
import { createEncryptedConnection, createUnencryptedConnection } from "./chat.js";

export default function ChatRoom({ serverUrl, roomId, isEncrypted, onMessage }) {
  const onMsg = useEffectEvent(onMessage);

  useEffect(() => {
    const createConnection = isEncrypted ? createEncryptedConnection : createUnencryptedConnection;
    const connection = createConnection({ serverUrl, roomId });
    connection.on("message", (msg) => onMsg(msg));
    connection.connect();
    return () => connection.disconnect();
  }, [isEncrypted, serverUrl, roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
