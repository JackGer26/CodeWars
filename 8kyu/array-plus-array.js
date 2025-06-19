// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let added1 = arr1.reduce((total, current) => total + current, 0)
    let added2 = arr2.reduce((total, current) => total + current, 0)
    return added1 + added2;
  }

  