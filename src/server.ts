import "dotenv/config";
import express from "express";
import { setupDatabase } from "./config/setupDatabase";
import { addBook } from "./controllers/addBook";
import { allBooks } from "./controllers/allBooks";
import { deleteBook } from "./controllers/deleteBook";
import { root } from "./controllers/root";
import { updateBook } from "./controllers/updateBooks";

export const app = express();
const PORT = process.env.PORT || 5000;

setupDatabase();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", root);
app.get("/api/allBooks", allBooks);
app.post("/api/addBook", addBook);
app.delete("/api/deleteBook/:id", deleteBook);
app.put("/api/updateBook", updateBook);

const main = async () => {
	app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
};

main();
