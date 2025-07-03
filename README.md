# Reusable Logger Middleware - TypeScript

This repository contains a reusable `Log()` function written in TypeScript. It is designed to send log data (like errors, warnings, and info messages) to a centralized logging API for monitoring and debugging purposes.

---

## 📌 Overview

The `Log()` function can be used in any TypeScript or Node.js project to send logs to the following server endpoint:


---

## 🔐 Authentication

To use the API, an Authorization Bearer Token must be included in the headers of the request. This token is received upon registration.

---

## 🧠 Function Signature

```ts
Name: Vemisetty Sahithi

Email: vemisettysahithi@gmail.com

GitHub: vemisettysahithi 
Log(stack: string, level: string, pkg: string, message: string): Promise<void>
