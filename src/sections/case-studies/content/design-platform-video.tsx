import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function DesignPlatformVideo() {
  return (
    <div className="w-full aspect-video overflow-hidden bg-black/90">
      <CustomVideoPlayer
        cloudName="day7gel9b"
        publicId="72C94B09-71C4-4795-BCF3-AD0D8EA6EF16_Copy_vavtfh"
        className="w-full h-full [&>video]:object-cover [&>video]:w-full [&>video]:h-full"
        muted={true}
        autoPlay={true}
      />
    </div>
  );
}