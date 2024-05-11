import { Model } from "@/types/model";

export function isModelValid(model: Model) {
  return (
    model.name &&
    model.attributes.length &&
    !model.attributes.some(i => !i.name || !i.dataType))
}