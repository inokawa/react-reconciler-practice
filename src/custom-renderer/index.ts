import React from "react";
import { reconciler } from "./reconciler";

const containers = new Map<HTMLElement, any>();

export default {
  render(elem: React.ReactNode, root: HTMLElement | null): void {
    if (!root) return;
    let container = containers.get(root);
    if (!container) {
      container = reconciler.createContainer(root, 0, false, null);
      containers.set(root, container);
    }

    reconciler.updateContainer(elem, container, null, () => undefined);
  },
};
