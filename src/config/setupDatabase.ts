import { connect } from "mongoose";

export async function setupDatabase() {
	try {
		await connect(process.env.MONGO ?? "", {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}).then(() => console.log("Database Connected"));
	} catch (err) {
		console.log(err);
	}
}
