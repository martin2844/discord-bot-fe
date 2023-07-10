import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(_: NextRequest) {
   revalidateTag("books");
   return NextResponse.json({ revalidated: true, now: Date.now() });
}
