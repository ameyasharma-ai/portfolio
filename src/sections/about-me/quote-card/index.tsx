export function QuoteCard() {
  return (
    <div className="flex flex-col h-full justify-center">
      <h3 className="font-heading text-md [@media(min-width:414px)]:text-lg text-foreground mb-4">
        BUSINESS-FIRST BUILDER
      </h3>

      <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
        I don’t build tech for the sake of it. I build systems that drive revenue, reduce cost, or unlock scale. Every solution starts with one question: <span className="text-foreground">“What business outcome does this create?”</span>
      </p>
    </div>
  );
}