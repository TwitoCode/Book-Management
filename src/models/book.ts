import { DocumentType, getModelForClass, ModelOptions, Prop } from "@typegoose/typegoose";

@ModelOptions({ options: { customName: "book-management-books" } })
export class Book {
	@Prop({ unique: true })
	bookID: string;

	@Prop({ unique: true })
	title: string;

	@Prop()
	author: string;

	@Prop()
	pages: number;

	@Prop()
	published: string;
}

export const BookModel = getModelForClass(Book);
export type BookDocument = DocumentType<Book>;
