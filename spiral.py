import sys
from pprint import pprint


def spiral(spiral_size):
    x = 0
    y = 0
    dx = 0
    dy = -1
    number = 0

    radius = spiral_size//2 if spiral_size % 2 != 0 else (spiral_size//2)-1
    grid = [[0 for _ in range(spiral_size)] for _ in range(spiral_size)]

    for _ in range(spiral_size ** 2):
        if -spiral_size/2 < x <= spiral_size/2:
            grid[y + radius][x + radius] = number
            number += 1
        if x == y or (x < 0 and x == -y) or (x > 0 and x == 1-y):
            dx, dy = -dy, dx
        x, y = x+dx, y+dy

    pprint(grid)

if __name__ == "__main__":
    spiral(int(sys.argv[1]))
