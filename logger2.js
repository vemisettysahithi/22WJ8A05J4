
// logger-exportable.js
export const logEvent = async (stack, level, pkg, message) => {
  try {
    const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message
      })
    });
    return await res.json();
  } catch (err) {
    console.error("Logging failed:", err);
    return null;
  }
};
