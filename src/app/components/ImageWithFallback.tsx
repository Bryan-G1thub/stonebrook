"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
};

export function ImageWithFallback({ src, alt, className, ...rest }: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={className}
        aria-label={alt}
        role="img"
        style={{ backgroundColor: "#0A1628", opacity: 0.1 }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...rest}
    />
  );
}


