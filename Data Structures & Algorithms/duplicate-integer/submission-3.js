class Solution {
    /**
     * @param {number[]}
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let temp = new Map()
        for (const n of nums) {
            if(temp.has(n)) return true 
            else temp.set(n)
        }
        return false
    }
}
