import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export function CodeGraphVideo() {
  return (
    <div className="w-full aspect-video overflow-hidden bg-black/90">
      <CustomVideoPlayer
        cloudName="day7gel9b"
        publicId="387AC562-8E99-45EC-B14F-55A25FD85C1B_Copy_cgwb2v"
        className="w-full h-full [&>video]:object-cover [&>video]:w-full [&>video]:h-full"
        muted={true}
        autoPlay={true}
      />
    </div>
  );
}
