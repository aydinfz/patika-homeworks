// Insertion Sort 
/*

[22,27,16,2,18,6]

1) Write the stages of the above sequence according to the sort type.
The smallest number is found and replaced with the first number. It is replaced by the next smallest number and the second number. This continues until the sequence is complete.

[2,27,16,22,18,6] 
[2,6,16,22,18,27] 
[2,6,16,22,18,27] 
[2,6,16,18,22,27] 
[2,6,16,18,22,27]  
[2,6,16,18,22,27] 

2) Write the Big-O notation.
O(n²) = O(6²) = O(36)

3) Time Complexity: 
Best case: The number we are looking for is at the beginning of the series
Average case: The number we are looking for is in the middle
Worst case: The number we are looking for is at the end

4) Which case involves 18 after array is sorted?
Average case

*/