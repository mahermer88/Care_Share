const signIn = async (user, dispatchAssistant) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (!res.ok) {
      dispatchAssistant({ type: "ERROR", payload: data.err });
      throw new Error(data.err);
    } else {
      dispatchAssistant({ type: "LOG_IN" });
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export default signIn;
