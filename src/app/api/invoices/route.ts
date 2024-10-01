import invoices from './data';

export async function GET() {
    return Response.json(invoices);
}
