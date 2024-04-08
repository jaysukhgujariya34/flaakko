import { NextRequest, NextResponse } from "next/server";

const Routs = ["/product-detail", "/collection"];

export const middleware = (req: any) => {
  const user = false;

  if (!user && Routs.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
};
