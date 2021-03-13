import { Request, Response } from "express";
import { BookModel } from "./../models/book";

export const allBooks = async (_: Request, res: Response) => {
	try {
		const books = await BookModel.find();
		res.status(200).json({ books });
	} catch (err) {
		console.log(err);
		res.status(500).send({ error: { message: err.message } });
	}
};
