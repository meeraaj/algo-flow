export const twoSumSteps = (nums: number[], target: number) => {
    const steps = [];

    // Initial State
    steps.push({
        line: 1,
        data: [...nums],
        pointers: { left: 0, right: nums.length - 1 }
    });

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        // Check sum
        steps.push({
            line: 3, // while left < right
            data: [...nums],
            pointers: { left, right, sum }
        });

        if (sum === target) {
            steps.push({
                line: 4, // Found!
                data: [...nums],
                pointers: { left, right, sum, finished: true }
            });
            return steps;
        } else if (sum < target) {
            steps.push({
                line: 6, // sum < target
                data: [...nums],
                pointers: { left, right, sum }
            });
            left++;
            steps.push({
                line: 7, // left++
                data: [...nums],
                pointers: { left, right, sum }
            });
        } else {
            steps.push({
                line: 8, // else
                data: [...nums],
                pointers: { left, right, sum }
            });
            right--;
            steps.push({
                line: 9, // right--
                data: [...nums],
                pointers: { left, right, sum }
            });
        }
    }

    return steps;
};

export const twoSumCode = `def two_sum(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        current_sum = nums[left] + nums[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []`;
