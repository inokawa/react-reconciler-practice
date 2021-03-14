import React from "react";
import { reconciler } from "./reconciler";

export default {
  render(whatToRender: React.ReactNode, div: HTMLElement | null): void {
    const container = reconciler.createContainer(div, 0, false, null);
    reconciler.updateContainer(whatToRender, container, null, () => {});
  },
};
