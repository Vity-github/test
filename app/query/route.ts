import { db } from "@vercel/postgres";
import { client } from "@/app/myquery/route";

// const client = await db.connect();

async function listInvoices() {
  const data = await client.query(`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `);
  //  client.sql;
  console.log(data);

  // return data.rows;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     "Uncomment this file and remove this line. You can delete this file when you are finished.",
  // });
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
