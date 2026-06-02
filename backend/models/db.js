import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  port: parseInt(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Krishna1@_",
  database: process.env.DB_NAME || "BudgetPal",
});

db.connect((err) => {
  if (err) console.error("DB connection failed:", err);
  else console.log("Connected to MySQL");
});

export default db;
