import { neon } from "@neondatabase/serverless";

// console.log("DATABASE_URL exists:", Boolean(process.env.DATABASE_URL));

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
	try {
		if (req.method === "GET") {
			const result = await sql`
                SELECT visits, likes
                FROM portfolio_stats
                WHERE id = 1
            `;

			return res.status(200).json(result[0]);
		}

		if (req.method === "POST") {
			const { action } = req.body;

			if (action === "visit") {
				const result = await sql`
                    UPDATE portfolio_stats
                    SET visits = visits + 1
                    WHERE id = 1
                    RETURNING visits, likes
                `;

				return res.status(200).json(result[0]);
			}

			if (action === "like") {
				const result = await sql`
                    UPDATE portfolio_stats
                    SET likes = likes + 1
                    WHERE id = 1
                    RETURNING visits, likes
                `;

				return res.status(200).json(result[0]);
			}

			return res.status(400).json({
				error: "Invalid action",
			});
		}

		return res.status(405).json({
			error: "Method not allowed",
		});
	} catch (error) {
		console.error(error);

		return res.status(500).json({
			error: "Internal server error",
		});
	}
}
