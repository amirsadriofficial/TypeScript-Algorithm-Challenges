function isSubsequence(s: string, t: string): boolean {
    if (s.length > t.length) return false;
    let idxCharacter: number = -1;
    for (let character of s) {
        idxCharacter = t.indexOf(character, idxCharacter + 1);
        if (idxCharacter === -1) return false;
    }
    return true;
};
