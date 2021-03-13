import { Request, Response } from "express";
import { Book, BookModel } from "./../models/book";

export const updateBook = async (req: Request, res: Response) => {
	try {
		const { author, pages, title, bookID } = req.body as Partial<Book>;
		const book = await BookModel.findOne({ bookID });

		if (!book) return res.status(404).json({ error: { message: "Book not found" } });

		book.author = author ?? book.author;
		book.pages = pages ?? book.pages;
		book.title = title ?? book.title;

		const saved = await book.save();
		res.status(201).json({ book: saved.toJSON() });
	} catch (err) {
		console.log(err);
		res.status(500).send({ error: { message: err.message } });
	}
};
