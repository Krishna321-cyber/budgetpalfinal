import mysql from "mysql2";

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Krishna1@_",
  database: "BudgetPal"
});

db.connect((err) => {
  if (err) console.error("DB connection failed:", err);
  else console.log("Connected to MySQL");
});

export default db;

