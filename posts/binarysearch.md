---
title: "Binary Search"
date: "2024-02-02"
shortDescription: "Binary search is a searching algorithm designed for sorted array or list. Binary search efficiently narrows down the search space by repeatedly dividing our search interval in half until we locate the position of the element we are searching for."
---

## **Introduction**

&ensp;

An algorithm is a set of instructions for accomplishing a task similar to following a cooking recipe. Binary search is a searching algorithm designed for sorted array or list. It efficiently narrows down the search space by repeatedly dividing our search interval in half until we locate the position of the element we are searching for. It is important to note that binary search can only be used effectively when the list or array is sorted. If the element is present in the list, binary search will reveal the position of the element; otherwise, it will indicate that the element is not in the sorted list.

&ensp;

## **When to use a binary Search**

Consider a scenario where we aim to locate a target number within the range of 1 and 100. The conventional approach involves a linear search, sequentially scanning through each number until finding the target (1,2,3,4,5……). For instance, if the target number were 99, this would mean going through the process 99 times. In the worst-case scenario, linear search might require checking every number in the range, making this method time-consuming and inefficient.

&nbsp;

A more efficient way to approach this is to start by finding the middle number in our list, which in this case is 50. We then check if our target number is less than, greater than, or equal to 50. For instance, since 50 is less than our target number 99, we can eliminate all the numbers from 1 to 50 and focus on the range between 51 and 100.The process repeats: we find the middle number between 51 and 100, which is 75. Checking if 75 is greater than, less than, or equal to our target number, we discover that 75 is less than our target number. This means we can ignore all the numbers on the left side (51-75). This iterative process continues until we find our target number. Using this approach, it will take approximately 7 iterations to go through the whole list and find the number we are looking for.

&nbsp;

By employing a binary search, we significantly reduce the time required to search through the list because with each iteration, we eliminate over half of the list that does not contain our search item. This stands in stark contrast to a linear search, where each iteration checks one number at a time, resulting in a considerably longer process.

&ensp;

_Although I primarily use numbers in my examples throughout this article, binary search is applicable to any sorted collection of items_

&ensp;

## **Running Time**

In evaluating the running time for algorithms, we use the Big O notation. In simple terms, Big O notation is a way to describe the performance or efficiency of an algorithm. It helps us understand how the runtime or space requirements of an algorithm grow as the input size increases.
In our first example ; going through every item one by one till we find our target element (linear search), the running time is denoted as O(N) also know as linear time complexity, where N represents the number of inputs. In linear time complexity, the runtime grows linearly with the input size. Simply put, the more the inputs, the longer it takes for your algorithm to run. This direct relationship between input size and running time is captured by the term "linear" in the notation.

&nbsp;

Binary search on the other hand, operates with a time complexity of O(log N) also known as logarithmic time. For those who may need a refresher on logarithms, think of them as the reverse of exponents. In the context of binary search, logarithmic time O(log N) indicates that, with each step, the algorithm effectively halves the remaining possibilities.

&nbsp;

Consider an example log10(100) = x.

This is essentially asking: “How many times do you need to multiply 10 by itself to get 100?” In this case, the answer is 2 (10 x 10 = 100). So, we can also express it as 10^2 = 100. Logarithms provide a concise way of expressing exponent relationships in mathematics. Similarly, in the realm of algorithms, the logarithmic time complexity of binary search signifies its ability to efficiently reduce the search space by dividing it logarithmically with each iteration making O(log N) significantly more efficient than O(N) on large datasets.

&nbsp;

## **Implementing Binary Search**

My code here is going to be in JavaScript but I will write out a pseudo code of the process so you can transfer to whichever programming language of choice. As stated earlier binary search works on sorted input, so we can assume that our list is sorted

&nbsp;

## **Pseudo Code**

```js

function binarySearch(sortedList, targetItem):
  lowIndex = 0
  highIndex = length of sortedList - 1

    while lowIndex <= highIndex:
      // Calculate the middle index
      middleIndex = (lowIndex + highIndex) / 2

      if sortedList[middleIndex] is equal to targetItem:
      // If the middle item is the target item, return its index
      return middleIndex
      else if targetItem is less than sortedList[middleIndex]:
      // If the target item is less than the middle item,
      //adjust the high index to the left half
      highIndex = middleIndex - 1
      else:
      // If the target item is more than the middle item,
      //adjust the low index to the right half
      lowIndex = middleIndex + 1

    return -1  // If the target item was not found in the list, return -1
```

</pre>

Full code in JavaScript

&nbsp;

```js
function binarySearch(sortedList, targetItem) {
  let lowIndex = 0;
  let highIndex = sortedList.length - 1;

  while (lowIndex <= highIndex) {
    // Calculate the middle index
    //We use Math.floor to ensure we get an
    //integer rather than a floating point number
    let middleIndex = Math.floor((lowIndex + highIndex) / 2);

    if (sortedList[middleIndex] === targetItem) {
      return middleIndex;
    } else if (targetItem < sortedList[middleIndex]) {
      highIndex = middleIndex - 1;
    } else {
      lowIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch(list, 5));
// returns 2 because our target number 5 is at index 2
console.log(binarySearch(list, 10));
//return -1 because 10 is not in our list
```

&nbsp;

### **Conclusion**

In this article we have learnt about binary search and how to implement it. The efficiency of binary search in sorted arrays can greatly impact algorithmic performance. Feel free to leave a message or send an email if you have any questions.
