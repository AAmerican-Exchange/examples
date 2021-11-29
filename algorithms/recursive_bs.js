// Program to implement recursive Binary Search

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
function binarySearch(arr, left, right, target) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == target) {
      return mid;
    }

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > target) {
      return binarySearch(arr, left, mid - 1, target);
    }

    // Else the element can only be present
    // in right subarray
    else {
      return binarySearch(arr, mid + 1, right, target);
    }
  }

  // We reach here when element is not
  // present in array
  return -1;
}

let arr = new Array(2, 3, 4, 10, 40);
let x = 10;
let n = arr.length;
let result = binarySearch(arr, 0, n - 1, x);

result == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);
