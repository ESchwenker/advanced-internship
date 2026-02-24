import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  try {

    const { priceId } = await req.json();

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",

      payment_method_types: ["card"],

      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],

      success_url: "http://localhost:3000/for-you",
      cancel_url: "http://localhost:3000/choose-plan",
    });

    return NextResponse.json({ url: session.url });

  } catch (err) {

    console.error("STRIPE ERROR:", err);

    return NextResponse.json(
      { error: "Stripe session failed" },
      { status: 500 }
    );

  }
}


