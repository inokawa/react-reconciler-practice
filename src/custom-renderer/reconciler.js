import ReactReconciler from "react-reconciler";

export const reconciler = ReactReconciler({
  supportsMutation: true,

  createInstance() {},
  createTextInstance() {},

  appendChildToContainer() {},
  appendChild() {},
  appendInitialChild() {},

  prepareUpdate() {},
  commitUpdate() {},

  finalizeInitialChildren() {},
  getChildHostContext() {},
  getPublicInstance() {},
  getRootHostContext() {},
  prepareForCommit() {},
  resetAfterCommit() {},
  shouldSetTextContent() {
    return false;
  },
});
