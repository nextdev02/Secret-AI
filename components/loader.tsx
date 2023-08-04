import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      {/* <div className="w-8 h-8 relative">
        <Image
          alt="Logo"
          src="/loader.png"
          fill
        />
      </div> */}
      <p className="text-sm text-muted-foreground">
        Secret AI is running...
      </p>
    </div>
  );
};