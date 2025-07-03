
// logger-class.js
class Logger {
  constructor(token) {
    this.token = token;
  }

  async log(stack, level, pkg, message) {
    try {
      const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          stack,
          level,
          package: pkg,
          message
        })
      });
      const data = await res.json();
      console.log("Logged:", data);
    } catch (error) {
      console.error("Error in Logger:", error);
    }
  }
}

// Usage:
// const logger = new Logger("YOUR_TOKEN");
// logger.log("backend", "error", "handler", "Something went wrong");
