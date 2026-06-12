import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") ?? "Amir Karimi";

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white text-black">
        <div tw="flex flex-col w-full py-12 px-12">
          <span tw="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Software Engineering · AI · Infrastructure
          </span>
          <h2 tw="text-5xl font-bold tracking-tight mt-6">{title}</h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
