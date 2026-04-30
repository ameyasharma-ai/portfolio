import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function AdvertisingPlatformVideo() {
  return (
    <div className="w-full aspect-video overflow-hidden bg-black/90">
      <CustomVideoPlayer
        cloudName="day7gel9b"
        publicId="26DB46C3-6640-4540-B20D-6C3000E35676_Copy_gabigd"
        className="w-full h-full [&>video]:object-cover [&>video]:w-full [&>video]:h-full"
        muted={true}
        autoPlay={true}
        onPlay={() => console.log('InLine platform video started playing')}
        onPause={() => console.log('InLine platform video paused')}
      />
    </div>
  );
}