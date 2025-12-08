var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;

    function dfs(r, c, idx) {
        if (idx === word.length) return true;
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[idx]) {
            return false;
        }

        // Mark visited
        let temp = board[r][c];
        board[r][c] = '#';

        // Explore 4 directions
        let found = dfs(r+1, c, idx+1) ||
                    dfs(r-1, c, idx+1) ||
                    dfs(r, c+1, idx+1) ||
                    dfs(r, c-1, idx+1);

        // Backtrack
        board[r][c] = temp;
        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};
