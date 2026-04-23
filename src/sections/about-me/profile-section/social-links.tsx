import { GithubIcon } from '../../../components/icons/socials/github-icon';
import { LinkedinIcon } from '../../../components/icons/socials/linkedin-icon';

export function SocialLinks() {
  const handleGithubClick = () => {
    window.open('https://github.com/ameyasharma-ai', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ameyasharma999/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleGithubClick}
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Visit GitHub profile"
      >
        <GithubIcon className="w-6 h-6" />
      </button>
      <button
        onClick={handleLinkedInClick}
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Visit LinkedIn profile"
      >
        <LinkedinIcon className="w-6 h-6" />
      </button>
    </div>
  );
}