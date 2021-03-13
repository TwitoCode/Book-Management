import { Request, Response } from "express";

export const root = (_: Request, res: Response) => {
	res.send("Book Management");
};
