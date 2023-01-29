
class Solution:
    # Here Matrix is a 2D list
    def rotate(self, matrix):
        # Transpose and reverse

        # print(f"Input: {matrix}")
        # Part 1: Transpose
        for rowIndex in range(len(matrix)):
            for colIndex in range(rowIndex+1,len(matrix[0])):
                matrix[rowIndex][colIndex], matrix[colIndex][rowIndex] = matrix[colIndex][rowIndex], matrix[rowIndex][colIndex]

        # Part 2: Reverse
        for row in matrix:
            row.reverse()

        # print(matrix)


test = Solution()
test.rotate([[1,2,3],[4,5,6],[7,8,9]]) 
# Output: [[7,4,1],[8,5,2],[9,6,3]]

test.rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]) 
# Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]