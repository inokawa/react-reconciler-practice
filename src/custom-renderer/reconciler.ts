// @ts-expect-error
import ReactReconciler from "react-reconciler";

type Container = HTMLElement;

type Type = string; // TODO

type ElemInstance = HTMLElement;

type TextInstance = Text;

type UpdatePayload = {
  [key: string]: any;
};

const ATTRS = ["style", "alt", "className", "href", "rel", "src", "target"];

const applyProps = (el: any, props: any, k: string) => {
  if (k.startsWith("on") && typeof props[k] === "function") {
    el.addEventListener(k.slice(2).toLowerCase(), props[k]);
  } else if (ATTRS.includes(k)) {
    if (k === "className") {
      el[k] = props[k];
    } else if (k === "style") {
      Object.keys(props.style).forEach((k) => {
        el.style[k] = props.style[k];
      });
    } else {
      el[k] = props[k];
    }
  }
};

export const reconciler = ReactReconciler({
  supportsMutation: true,

  createInstance(
    type: Type,
    props: any,
    rootContainer: Container,
    hostContext: any,
    internalHandle: any
  ): ElemInstance {
    const el = document.createElement(type);
    Object.keys(props).forEach((k) => {
      applyProps(el, props, k);
    });

    return el;
  },
  createTextInstance(
    text: string,
    rootContainer: Container,
    hostContext: any,
    internalHandle: any
  ): TextInstance {
    return document.createTextNode(text);
  },

  appendChildToContainer(
    container: Container,
    child: ElemInstance | TextInstance
  ) {
    container.appendChild(child);
  },
  appendChild(parent: ElemInstance, child: ElemInstance | TextInstance) {
    parent.appendChild(child);
  },
  appendInitialChild(parent: ElemInstance, child: ElemInstance | TextInstance) {
    parent.appendChild(child);
  },

  insertInContainerBefore(
    container: Container,
    child: ElemInstance | TextInstance,
    before: ElemInstance | TextInstance
  ) {
    container.insertBefore(child, before);
  },
  insertBefore(
    parent: ElemInstance,
    child: ElemInstance | TextInstance,
    before: ElemInstance | TextInstance
  ) {
    parent.insertBefore(child, before);
  },

  prepareUpdate(
    instance: ElemInstance,
    type: Type,
    oldProps: any,
    newProps: any,
    rootContainer: Container,
    hostContext: any
  ): UpdatePayload | null {
    const payload: UpdatePayload = {};
    ATTRS.forEach((k) => {
      if (oldProps[k] !== newProps[k]) payload[k] = newProps[k];
    });
    return Object.keys(payload).length === 0 ? null : payload;
  },
  commitUpdate(
    instance: ElemInstance,
    updatePayload: UpdatePayload,
    type: Type,
    oldProps: any,
    newProps: any,
    finishedWork: any
  ) {
    Object.keys(updatePayload).forEach((k) => {
      applyProps(instance, updatePayload, k);
    });
  },
  commitTextUpdate(instance: TextInstance, oldText: string, newText: string) {
    if (oldText !== newText) instance.textContent = newText;
  },

  removeChildFromContainer(
    container: Container,
    child: ElemInstance | TextInstance
  ) {
    container.removeChild(child);
  },
  removeChild(parent: ElemInstance, child: ElemInstance | TextInstance) {
    parent.removeChild(child);
  },

  clearContainer(container: Container) {
    let c = container.firstChild;
    while (c) {
      container.removeChild(c);
      c = container.firstChild;
    }
  },

  finalizeInitialChildren(
    instance: ElemInstance,
    type: Type,
    props: any,
    rootContainer: Container,
    hostContext: any
  ): boolean {
    return false;
  },
  commitMount(
    instance: ElemInstance,
    type: Type,
    props: any,
    internalHandle: any
  ) {},

  getRootHostContext(rootContainer: Container) {
    return null;
  },
  getChildHostContext(
    parentHostContext: any,
    type: Type,
    rootContainer: Container
  ) {
    return parentHostContext;
  },
  getPublicInstance(instance: any) {
    return instance;
  },
  prepareForCommit(containerInfo: any) {
    return null;
  },
  resetAfterCommit(containerInfo: any) {},
  shouldSetTextContent(type: Type, props: any) {
    return false;
  },
  resetTextContent(instance: TextInstance) {},
});
