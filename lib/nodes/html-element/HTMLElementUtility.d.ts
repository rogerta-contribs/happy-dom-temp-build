import type HTMLElement from '../html-element/HTMLElement.js';
import type SVGElement from '../svg-element/SVGElement.js';
/**
 * HTMLElement utility.
 */
export default class HTMLElementUtility {
    /**
     * Triggers a blur event.
     *
     * @param element Element.
     */
    static blur(element: HTMLElement | SVGElement): void;
    /**
     * Triggers a focus event.
     *
     * @param element Element.
     */
    static focus(element: HTMLElement | SVGElement): void;
    /**
     * Returns whether an element or any of its ancestors has the inert attribute.
     *
     * @param element Element to check.
     * @returns True if the element is in an inert tree.
     */
    private static isInert;
    /**
     * Closes other auto popovers when a new auto popover is opened.  If the new
     * popover is not an auto popover, this function does nothing.
     *
     * @param targetPopover The popover that was opened.
     */
    static maybeCloseOtherAutoPopovers(targetPopover: HTMLElement): void;
    /**
     * Acts upon a popover element based on the action specified.
     *
     * @param popover The popover to act upon.
     * @param action The action to perform on the popover.
     * @param [source] The element that triggered the action.
     */
    static handlePopoverTargetAction(popover: HTMLElement, action: string, source?: HTMLElement): void;
}
//# sourceMappingURL=HTMLElementUtility.d.ts.map