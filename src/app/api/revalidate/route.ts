import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

//Not working for now.
export async function GET(_: NextRequest) {
   revalidateTag("books");
   return NextResponse.json({ revalidated: true, now: Date.now() });
}
