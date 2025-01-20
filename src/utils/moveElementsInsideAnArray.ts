export default function moveElementsInsideAnArray(elements: any[], from: number, to: number): any[] {
  const maxIndex = elements.length - 1

  if (from >= 0 && to <= maxIndex) {
    const oldFromElement = elements[from]
    const oldToElement = elements[to]

    const movedElements = elements
    movedElements[from] = oldToElement
    movedElements[to] = oldFromElement

    return movedElements
  }
  else {
    console.log("Please, send valid indexes.")
    return elements
  }
}