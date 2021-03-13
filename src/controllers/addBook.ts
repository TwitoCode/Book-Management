import { Request, Response } from "express";
import { v4 } from "uuid";
import { Book, BookModel } from "./../models/book";

export const addBook = async (req: Request, res: Response) => {
	try {
		const { author, pages, title } = req.body as Partial<Book>;
		if (!author || !pages || !title)
			return res.status(404).json({ error: { message: "Not all fields were provided" } });

		const [published] = new Date().toLocaleString("en-US").split(", ");
		const bookID = v4();

		const book = await new BookModel({ author, pages, title, published, bookID }).save();
		res.status(201).json({ book: book.toJSON() });
	} catch (err) {
		console.log(err);
		res.status(500).send({ error: { message: err.message } });
	}
};
