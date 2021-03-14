import React from "react";
import { reconciler } from "./reconciler";

export default {
  render(elem: React.ReactNode, dom: HTMLElement | null): void {
    const container = reconciler.createContainer(dom, 0, false, null);
    reconciler.updateContainer(elem, container, null, () => undefined);
  },
};
