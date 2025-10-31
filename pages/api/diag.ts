export default function handler(_req: any, res: any) {
  res.status(200).json({
    ok: true,
    NODE_ENV: process.env.NODE_ENV,
    flags: {
      FEATURE: process.env.NEXT_PUBLIC_FEATURE_FLAGS || null,
      MAPBOX: !!process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    },
  });
}
