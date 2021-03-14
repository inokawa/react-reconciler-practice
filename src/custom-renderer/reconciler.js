import ReactReconciler from "react-reconciler";

export const reconciler = ReactReconciler({
  supportsMutation: true,

  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    const el = document.createElement(type);
    if (props.className) el.className = props.className;
    if (props.src) el.src = props.src;
    return el;
  },
  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    return document.createTextNode(text);
  },

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
