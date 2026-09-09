class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let temp = []
        nums.forEach((n)=>{
            if(!temp.includes(n)) temp.push(n)   
        })
        return temp.length != nums.length
    }
}
