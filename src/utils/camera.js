import k from "../kaboomContext";

/**
 * Attaches the camera to a game object.
 * @param attachedObject
 * @param offsetX
 * @param offsetY
 */
export function attachCamera (
    attachedObject,
    offsetX = 0,
    offsetY = -100
    ) {
        k.onUpdate(() => {
            k.camPos(
                attachedObject.pos.x + offsetX,
                attachedObject.pos.y + offsetY
            );
        })
}
