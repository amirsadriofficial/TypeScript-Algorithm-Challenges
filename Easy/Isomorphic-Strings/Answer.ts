function isIsomorphic(s: string, t: string): boolean {
  const objS = {};
  const objT = {};
  for (let i = 0; i < s.length; i++) {
    if (objS[s[i]] === undefined) objS[s[i]] = t[i];
    if (objT[t[i]] === undefined) objT[t[i]] = s[i];
    if (objS[s[i]] !== t[i] || objT[t[i]] !== s[i]) return false;
  }
  return true;
}
