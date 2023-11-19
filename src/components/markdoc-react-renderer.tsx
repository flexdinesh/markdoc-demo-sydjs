import React from "react";
import Markdoc from "@markdoc/markdoc";
import YouTubeEmbed from "./youtube-embed";

export default function MarkdocReactRenderer({ content }: { content: any }) {
  if (!content) {
    return <p>no content</p>;
  }

  const components = {
    YouTubeEmbed,
  };

  return Markdoc.renderers.react(content, React, { components });
}
