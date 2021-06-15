const deleteUser = async (user, dispatchAssistant) => {
  try {
    const res = await fetch(`http://localhost:5000/api/users/${user._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!res.ok) {
      dispatchAssistant({ type: "ERROR", payload: data.err });
      throw new Error(data.message);
    } else {
      return data;
    }
  } catch (err) {
    console.log(err.message);
  }
};

export default deleteUser;
