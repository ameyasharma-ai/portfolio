import { Link } from "react-router";

export function FooterNav() {
  return (
    <div className="flex items-center gap-6">
      <a 
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        Resume
      </a>
      <Link 
        to="/privacy-policy"
        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        Privacy Policy
      </Link>
    </div>
  );
}