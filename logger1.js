
// logger-basic.js
async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2ZW1pc2V0dHlzYWhpdGhpQGdtYWlsLmNvbSIsImV4cCI6MTc1MTUyNzI5NywiaWF0IjoxNzUxNTI2Mzk3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTAyMTc5NTEtZDEzNy00OTkzLThlOTYtNGU4MjU2YzJmODJkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmVtaXNldHR5IHNhaGl0aGkiLCJzdWIiOiI1ZTQ0OGJiYS1kNTcyLTQ0NDMtYjkyOS0yODJjYmYyYjVhN2YifSwiZW1haWwiOiJ2ZW1pc2V0dHlzYWhpdGhpQGdtYWlsLmNvbSIsIm5hbWUiOiJ2ZW1pc2V0dHkgc2FoaXRoaSIsInJvbGxObyI6IjIyd2o4YTA1ajQiLCJhY2Nlc3NDb2RlIjoiUGJtVkFUIiwiY2xpZW50SUQiOiI1ZTQ0OGJiYS1kNTcyLTQ0NDMtYjkyOS0yODJjYmYyYjVhN2YiLCJjbGllbnRTZWNyZXQiOiJlZ1JrV0dnZ0dKdVlITkN1In0.2RTpPKZfCQAWJFbYC358I1-LmFtCbqXzpXVGOFJH0Qo",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message
      })
    });
    const data = await response.json();
    console.log("Log sent:", data);
  } catch (error) {
    console.error("Log failed:", error);
  }
}
