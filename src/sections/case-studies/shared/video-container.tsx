import { DesignPlatformVideo } from "../content/design-platform-video";
import { AdvertisingPlatformVideo } from "../content/advertising-platform-video";
import { CodeGraphVideo } from "../content/codegraph-video";

interface VideoContainerProps {
  activeVideo: 'design' | 'advertising' | 'codegraph';
}

export function VideoContainer({ activeVideo }: VideoContainerProps) {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-black/40">
      {/* For now, just render the active video */}
      {activeVideo === 'design' && <DesignPlatformVideo />}
      {activeVideo === 'advertising' && <AdvertisingPlatformVideo />}
      {activeVideo === 'codegraph' && <CodeGraphVideo />}
    </div>
  );
}