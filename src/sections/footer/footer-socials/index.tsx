import { GithubIcon } from '@/components/icons/socials/github-icon';
import { LinkedinIcon } from '@/components/icons/socials/linkedin-icon';
import { SoundcloudIcon } from '@/components/icons/socials/soundcloud-icon';

export function FooterSocials() {
  const handleGithubClick = () => {
    window.open('https://github.com/ameyasharma-ai', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ameyasharma999/', '_blank', 'noopener,noreferrer');
  };

  const handleSoundcloudClick = () => {
    window.open('https://soundcloud.com/ameya-sharma-565242975/sets/juice-wrld-unreleased', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center gap-6">
      <button
        onClick={handleGithubClick}
        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2"
        aria-label="Visit GitHub profile"
      >
        <GithubIcon className="w-4 h-4" />
        Github
      </button>
      <button
        onClick={handleLinkedInClick}
        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2"
        aria-label="Visit LinkedIn profile"
      >
        <LinkedinIcon className="w-4 h-4" />
        LinkedIn
      </button>
      <button
        onClick={handleSoundcloudClick}
        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-2"
        aria-label="Visit SoundCloud profile"
      >
        <SoundcloudIcon className="w-4 h-4" />
        SoundCloud
      </button>
    </div>
  );
}