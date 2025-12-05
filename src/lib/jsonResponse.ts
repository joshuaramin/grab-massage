interface Props {
  message: string | string[] | unknown;
  status: number;
  data?: unknown;
  version?: string | null;
}

export function jsonResponse({ message, status, data, version }: Props) {
  return Response.json(
    {
      message,
      data,
      version: version ?? "unknown",
      timeStamp: new Date().toISOString(),
    },
    { status },
  );
}
