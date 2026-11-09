Union Inside Intersection: Typing a Payment in TypeScript

Introduction:Last week I had to type a checkout form. Every payment has an id and an amount, but the rest depends on how the customer pays. A card needs a number, PayPal needs an email. Mixing | and & solved it in one line.

Body: 
First, the pieces: Forget the parentheses and the precedence changes: & binds tighter than |, so Card | Paypal & Meta would only attach Meta to PayPal. That’s an easy bug to miss.

type Card = { method: "card"; cardNumber: string };
type Paypal = { method: "paypal"; email: string };
type Meta = { id: string; amount: number };

Now the combination. The union goes in parentheses, and & attaches the shared fields to whichever side you get:

type Payment = (Card | Paypal) & Meta;

TypeScript expands this to (Card & Meta) | (Paypal & Meta), so you never write the shared fields twice. Because method is a tag, checking it narrows the type:

function describe(p: Payment) {
  if (p.method === "card") {
    return `Card ending ${p.cardNumber.slice(-4)}`;
  }
  return `PayPal: ${p.email}`;
}

describe({ id: "p1", amount: 40, method: "paypal", email: "a@b.com" });


Conclusion: Put the choices in a union, wrap them in parentheses, and add the shared fields with &. I now write payment-style types this way every time.