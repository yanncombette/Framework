import { CallBack } from "./interfaces/Event.interface"

/**
 * Class representing an event handling system.
 * This class allows you to register event listeners and trigger events.
 */
export class Eventing {
    events: { [key: string]: CallBack[] } = {}

    /**
     * Registers an event listener for a specific event.
     * @param eventName - The name of the event to listen for.
     * @param callBack - The callback function to be executed when the event is triggered.
     */
    on = (eventName: string, callBack: CallBack) => {
        const listener = this.events[eventName] || []
        listener.push(callBack)
        this.events[eventName] = listener
    }

    /**
     * Triggers an event, causing all registered listeners for that event to be executed.
     * @param eventName - The name of the event to trigger.
     */
    trigger = (eventName: string) => {
        const listener = this.events[eventName]
        if (!listener || listener.length === 0) return;
        listener.forEach(callBack => {
            callBack()
        })
    }
}