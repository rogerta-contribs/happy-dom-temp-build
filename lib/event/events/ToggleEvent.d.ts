import Event from '../Event.js';
import type IToggleEventInit from './IToggleEventInit.js';
import type Element from '../../nodes/element/Element.js';
/**
 * Toggle event.
 */
export default class ToggleEvent extends Event {
    readonly oldState: string;
    readonly newState: string;
    readonly source: Element | null;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: IToggleEventInit);
}
//# sourceMappingURL=ToggleEvent.d.ts.map