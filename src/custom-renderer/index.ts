import React from "react";
import { reconciler } from "./reconciler";

export default {
  render(whatToRender: React.ReactNode, div: HTMLElement | null): void {
    // @ts-expect-error
    const container = reconciler.createContainer(div, false, false, null);
    // @ts-expect-error
    reconciler.updateContainer(whatToRender, container, null, null);
  },
};
