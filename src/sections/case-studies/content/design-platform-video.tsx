import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function DesignPlatformVideo() {
  return (
    <div className="w-full h-full overflow-hidden">
      <CustomVideoPlayer
        cloudName="day7gel9b"
        publicId="72C94B09-71C4-4795-BCF3-AD0D8EA6EF16_Copy_vavtfh"
        className="w-full h-full [&>video]:object-cover [&>video]:object-top [&>video]:w-full [&>video]:h-full [&>video]:scale-112"
        muted={true}
        autoPlay={true}
        onPlay={() => console.log('Design platform video started playing')}
        onPause={() => console.log('Design platform video paused')}
      />
    </div>
  );
}