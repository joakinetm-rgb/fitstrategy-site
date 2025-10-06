
import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const form = await req.formData();
  const email = String(form.get('email') || '');
  if (!email) return NextResponse.json({ ok:false }, { status:400 });
  return NextResponse.json({ ok:true });
}
