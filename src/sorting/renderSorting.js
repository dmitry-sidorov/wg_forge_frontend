export default function (sortingState, headingSelector) {
  if (sortingState === null || sortingState !== headingSelector) {
    sortingState = headingSelector;
    console.log(sortingState);
  } else {
    sortingState = null;
    console.log(sortingState);
  }
  return sortingState;
}
