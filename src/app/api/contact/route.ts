import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  preferredDate?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const payload = {
    name,
    email,
    phone: body.phone?.trim() || undefined,
    message,
    preferredDate: body.preferredDate?.trim() || undefined,
    receivedAt: new Date().toISOString(),
  };

  console.log("[contact]", JSON.stringify(payload, null, 2));

  return NextResponse.json({ ok: true });
}
