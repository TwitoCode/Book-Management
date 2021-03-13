import { Request, Response } from "express";
import { BookModel } from "./../models/book";

export const deleteBook = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		if (!id) return res.status(404).json({ error: { message: "ID was not provided" } });

		BookModel.deleteOne({ bookID: id })
			.then(() => res.status(200).json({ deleted: true }))
			.catch((err) => res.status(500).json({ error: { message: err.message } }));
	} catch (err) {
		console.log(err);
		res.status(500).send({ error: { message: err.message } });
	}
};
