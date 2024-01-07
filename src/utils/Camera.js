import k from "../kaboomContext";

export default class Camera {
    attachedObject = null;

    attach(
        gameObject,
        offsetX = 0,
        offsetY = -100,
    ) {
        this.attachedObject = gameObject;

        k.onUpdate(() => {
          k.camPos(
              this.attachedObject.pos.x + offsetX,
              this.attachedObject.pos.y + offsetY
          );
        })
    }
}
