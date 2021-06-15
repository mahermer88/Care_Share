import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAssistantContext } from "../components/context/context-assistant";

const NotFound = () => {
  const { dispatchAssistant } = useAssistantContext();

  useEffect(() => {
    dispatchAssistant({ type: "ERROR" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Not Found</h1>
      <Link to="/">Back to home</Link>
    </>
  );
};

export default NotFound;
