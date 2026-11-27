export function QuoteCard() {
  return (
    <div className="flex flex-col h-full justify-center">
      <h3 className="font-heading text-md [@media(min-width:414px)]:text-lg text-foreground mb-4">
        PRODUCTION-FIRST ENGINEER
      </h3>

      <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
        I care about latency, reliability, and clean architecture—from sub-1.5s WebSocket voice pipelines to 32% faster PostgreSQL queries and 94 Lighthouse scores. Every system is built to hold up in production.
      </p>
    </div>
  );
}
