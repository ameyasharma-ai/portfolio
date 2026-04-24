import { ContactMethods } from '../contact-methods';

export function FooterHero() {
  return (
    <div className="flex flex-col">
      <h2 className="font-heading text-4xl [@media(min-width:1055px)]:text-5xl [@media(min-width:1275px)]:text-6xl text-foreground mb-4 text-center [@media(min-width:1024px)]:text-left">
        Build It Right. Ship It Fast.
      </h2>
      <p className="font-body text-lg [@media(min-width:1045px)]:text-xl [@media(min-width:1275px)]:text-2xl font-light text-muted-foreground leading-relaxed text-center [@media(min-width:1024px)]:text-left">
        I design and build AI-powered systems that move your business forward<br className="hidden [@media(min-width:1024px)]:inline" />
        {' '}— from first idea to production-ready reality.
      </p>
      <div className="hidden [@media(min-width:1024px)]:block">
        <ContactMethods />
      </div>
    </div>
  );
}