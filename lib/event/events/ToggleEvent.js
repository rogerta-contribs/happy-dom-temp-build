import Event from '../Event.js';
/**
 * Toggle event.
 */
export default class ToggleEvent extends Event {
    oldState;
    newState;
    source;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit) {
        super(type, eventInit);
        this.oldState = eventInit?.oldState ?? '';
        this.newState = eventInit?.newState ?? '';
        this.source = eventInit?.source ?? null;
    }
}
//# sourceMappingURL=ToggleEvent.js.map