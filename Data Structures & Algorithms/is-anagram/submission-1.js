class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let sMap = new Map()
        let tMap = new Map()
        for(let i=0;i<s.length;i++){
            if(sMap.has(s[i])) sMap.set(s[i],sMap.get(s[i]) + 1)
            else sMap.set(s[i],1)
        }
        for(let k=0;k<t.length;k++){
            if(tMap.has(t[k])) tMap.set(t[k],tMap.get(t[k]) + 1)
            else tMap.set(t[k],1)
        }
        for (let [key, val] of sMap) {
            if (tMap.get(key) !== val) return false;
        }
        return true;
    }
}
