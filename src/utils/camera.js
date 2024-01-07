import k from "../kaboomContext";

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
