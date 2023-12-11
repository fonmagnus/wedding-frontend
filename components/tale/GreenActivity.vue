<template>
  <div
    id="green-activity"
    class="flex flex-col items-center px-4 gap-6 relative"
  >
    <div class="flex flex-col">
      <div class="flex" v-for="(row, i) in maze" :key="i">
        <div
          class="h-7 w-7 border bg-green-800 text-2xl overflow-hidden"
          v-for="(col, j) in row"
          :key="j"
          :class="[
            {
              'border-t-0': !maze[i][j].wall.top,
              'border-l-0': !maze[i][j].wall.left,
              'border-b-0': !maze[i][j].wall.bottom,
              'border-r-0': !maze[i][j].wall.right,
            },
          ]"
        >
          {{ getIcon(i, j) }}
        </div>
      </div>
    </div>

    <div v-if="!hasReached" class="flex flex-col items-center gap-2">
      <div class="flex justify-center gap-2">
        <div
          class="flex justify-center items-center rounded-lg h-12 w-12"
          @click.stop="moveUp(true)"
          :class="[
            {
              'text-slate-200 text-opacity-50 bg-slate-300 bg-opacity-30':
                hasGivenUp,
              'text-black bg-slate-200 hover:bg-slate-400': !hasGivenUp,
            },
          ]"
        >
          <i class="fa fa-arrow-up text-2xl"></i>
        </div>
      </div>
      <div class="flex justify-center gap-2">
        <div
          class="flex justify-center items-center rounded-lg h-12 w-12"
          @click.stop="moveLeft(true)"
          :class="[
            {
              'text-slate-200 text-opacity-50 bg-slate-300 bg-opacity-30':
                hasGivenUp,
              'text-black bg-slate-200 hover:bg-slate-400': !hasGivenUp,
            },
          ]"
        >
          <i class="fa fa-arrow-left text-2xl"></i>
        </div>
        <div
          class="flex justify-center items-center rounded-lg h-12 w-12"
          @click.stop="moveDown(true)"
          :class="[
            {
              'text-slate-200 text-opacity-50 bg-slate-300 bg-opacity-30':
                hasGivenUp,
              'text-black bg-slate-200 hover:bg-slate-400': !hasGivenUp,
            },
          ]"
        >
          <i class="fa fa-arrow-down text-2xl"></i>
        </div>
        <div
          class="flex justify-center items-center rounded-lg h-12 w-12"
          @click.stop="moveRight(true)"
          :class="[
            {
              'text-slate-200 text-opacity-50 bg-slate-300 bg-opacity-30':
                hasGivenUp,
              'text-black bg-slate-200 hover:bg-slate-400': !hasGivenUp,
            },
          ]"
        >
          <i class="fa fa-arrow-right text-2xl"></i>
        </div>
      </div>
      <Button
        v-if="!hasGivenUp"
        @click.stop="giveUp"
        class="bg-green-800 text-whit mt-6"
      >
        <h6>{{ lang === "EN" ? "Give Up 🏳️" : "Menyerah 🏳️" }}</h6>
      </Button>
      <h4 v-else>
        {{
          lang === "EN"
            ? "Love will always find its way"
            : "Cinta akan selalu menemukan jalannya"
        }}
      </h4>
    </div>
    <div v-else class="flex flex-col gap-4">
      <h4>
        {{
          lang === "EN"
            ? "The groom has finally find his home ❤️"
            : "Sang pria akhirnya bisa menemukan mempelai wanitanya ❤️"
        }}
      </h4>
      <Button @click.stop="generateMaze" class="bg-green-800 text-white">
        <h6>Restart Playing <i class="fa fa-refresh"></i></h6>
      </Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const MAZE_ROW = 12,
  MAZE_COL = 12;

const RANDOM_WALK_LENGTH = 100;
const RANDOM_SPAWN = 50;

export default {
  data() {
    return {
      maze: [],
      groom: {
        row: Math.floor(Math.random() * MAZE_ROW),
        col: Math.floor(Math.random() * MAZE_COL),
      },
      bride: {
        row: Math.floor(Math.random() * MAZE_ROW),
        col: Math.floor(Math.random() * MAZE_COL),
      },
      visited: [],
      pathToBride: [],
      prevCell: [],
      nextCell: [],
      hasReached: false,
      hasGivenUp: false,
    };
  },
  computed: {
    ...mapGetters({
      lang: "data/getLang",
    }),
    checkReached() {
      const res =
        this.groom.row === this.bride.row && this.groom.col === this.bride.col;

      if (res) this.hasReached = true;
      return res;
    },
  },
  watch: {
    groom: {
      deep: true,
      handler(val) {
        const res =
          this.groom.row === this.bride.row &&
          this.groom.col === this.bride.col;

        if (res) {
          this.hasReached = true;
          this.animateHearts();
        }
        return res;
      },
    },
  },
  mounted() {
    this.generateMaze();
  },
  methods: {
    initState() {
      this.maze = [];
      this.groom = {
        row: Math.floor(Math.random() * MAZE_ROW),
        col: Math.floor(Math.random() * MAZE_COL),
      };
      this.bride = {
        row: Math.floor(Math.random() * MAZE_ROW),
        col: Math.floor(Math.random() * MAZE_COL),
      };
      this.visited = [];
      this.pathToBride = [];
      this.prevCell = [];
      this.nextCell = [];
      this.hasReached = false;
      this.hasGivenUp = false;
    },
    generateMaze() {
      this.initState();
      for (let i = 0; i < MAZE_ROW; i++) {
        this.maze.push([]);
        this.prevCell.push([]);
        this.nextCell.push([]);
        for (let j = 0; j < MAZE_COL; j++) {
          this.maze[i].push(this.initCell(i, j));
          this.prevCell[i].push({ row: -1, col: -1 });
          this.nextCell[i].push({ row: -1, col: -1 });
        }
      }

      this.randomWalk(0, 0);
      this.getBridePosition();
    },
    initCell(i, j, type = "EMPTY") {
      return {
        row: i,
        col: j,
        wall: {
          top: true,
          left: true,
          bottom: true,
          right: true,
        },
        marked: false,
      };
    },
    randomWalk(row, col) {
      this.visited.push({ row, col });
      const dx = [-1, 0, 1, 0];
      const dy = [0, -1, 0, 1];
      const ord = this.shuffleArray([0, 1, 2, 3]);
      for (let d = 0; d < ord.length; d++) {
        const nrow = row + dx[ord[d]];
        const ncol = col + dy[ord[d]];
        if (nrow < 0 || ncol < 0 || nrow >= MAZE_ROW || ncol >= MAZE_COL)
          continue;
        if (this.hasVisited(nrow, ncol)) continue;

        switch (ord[d]) {
          case 0:
            this.maze[row][col].wall.top = false;
            this.maze[nrow][ncol].wall.bottom = false;
            break;
          case 1:
            this.maze[row][col].wall.left = false;
            this.maze[nrow][ncol].wall.right = false;
            break;
          case 2:
            this.maze[row][col].wall.bottom = false;
            this.maze[nrow][ncol].wall.top = false;
            break;
          case 3:
            this.maze[row][col].wall.right = false;
            this.maze[nrow][ncol].wall.left = false;
            break;
        }

        this.randomWalk(nrow, ncol);
        row = nrow;
        col = ncol;
      }
    },

    hasVisited(r, c) {
      const check = this.visited.filter(({ row, col }) => {
        return row === r && col === c;
      });
      return check.length > 0;
    },

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },

    getIcon(row, col) {
      if (
        row === this.groom.row &&
        row === this.bride.row &&
        col === this.groom.col &&
        col === this.bride.col
      ) {
        return "🏡";
      }
      if (row === this.groom.row && col === this.groom.col) {
        return "🤵🏻";
      }
      if (row === this.bride.row && col === this.bride.col) {
        return "👰🏻‍♀️";
      }
    },

    getBridePosition(update = true) {
      const queue = [
        {
          ...this.groom,
          distance: 0,
        },
      ];
      this.visited = [this.groom];
      for (let i = 0; i < MAZE_ROW; i++) {
        for (let j = 0; j < MAZE_COL; j++) {
          this.prevCell[i][j] = this.nextCell[i][j] = { row: -1, col: -1 };
        }
      }

      let farthest = 0;

      while (queue.length > 0) {
        const { row, col, distance } = queue[0];
        if (distance > farthest) {
          farthest = distance;
          if (update) {
            this.bride = { row, col };
          }
        }
        queue.shift();

        const dx = [-1, 0, 1, 0];
        const dy = [0, -1, 0, 1];
        for (let d = 0; d < 4; d++) {
          const nr = row + dx[d];
          const nc = col + dy[d];

          if (nr < 0 || nc < 0 || nr >= MAZE_ROW || nc >= MAZE_COL) continue;
          switch (d) {
            case 0:
              if (this.maze[row][col].wall.top) continue;
              break;
            case 1:
              if (this.maze[row][col].wall.left) continue;
              break;
            case 2:
              if (this.maze[row][col].wall.bottom) continue;
              break;
            case 3:
              if (this.maze[row][col].wall.right) continue;
              break;
          }

          if (this.hasVisited(nr, nc)) continue;
          this.visited.push({ row: nr, col: nc });
          this.prevCell[nr][nc] = { row, col };
          queue.push({ row: nr, col: nc, distance: distance + 1 });
        }
      }
    },

    moveUp(pressed = false) {
      if (this.hasGivenUp && pressed) return;
      const { row, col } = this.groom;
      if (this.maze[row][col].wall.top) return;
      if (row === 0) return;
      this.groom.row--;
    },
    moveLeft(pressed = false) {
      if (this.hasGivenUp && pressed) return;
      const { row, col } = this.groom;
      if (this.maze[row][col].wall.left) return;
      if (col === 0) return;
      this.groom.col--;
    },
    moveDown(pressed = false) {
      if (this.hasGivenUp && pressed) return;
      const { row, col } = this.groom;
      if (this.maze[row][col].wall.bottom) return;
      if (row === MAZE_ROW - 1) return;
      this.groom.row++;
    },
    moveRight(pressed = false) {
      if (this.hasGivenUp && pressed) return;
      const { row, col } = this.groom;
      if (this.maze[row][col].wall.right) return;
      if (col === MAZE_COL - 1) return;
      this.groom.col++;
    },

    solvePath(r, c) {
      if (r === -1 && c === -1) return;
      const { row, col } = this.prevCell[r][c];
      if (row > -1 && col > -1) {
        this.nextCell[row][col] = { row: r, col: c };
      }
      this.solvePath(row, col);
    },

    giveUp() {
      if (this.hasGivenUp) return;
      this.hasGivenUp = true;
      this.getBridePosition(false);
      this.solvePath(this.bride.row, this.bride.col);
      this.autoMoveGroomToBride(this.groom.row, this.groom.col);
    },

    autoMoveGroomToBride(r, c) {
      if (this.checkReached) return;
      const { row, col } = this.nextCell[r][c];
      if (row < r) this.moveUp();
      if (row > r) this.moveDown();
      if (col < c) this.moveLeft();
      if (col > c) this.moveRight();

      setTimeout(() => {
        this.autoMoveGroomToBride(row, col);
      }, 40);
    },
    animateHearts() {
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          const container = document.getElementById("green-activity");
          const heart = document.createElement("div");
          heart.innerText = "💚";
          heart.style.position = "absolute";
          heart.style.top = `${Math.random() * 100}%`;
          heart.style.left = `${Math.random() * 100}%`;
          heart.style.fontSize = "1rem";
          heart.style.transform = "translateX(-50%)";

          container.appendChild(heart);
          this.$gsap.to(heart, {
            opacity: 0,
            y: -100,
            duration: 1.5,
            fontSize: "4rem",
            visibility: "hidden"
          });
        }, 25 * i);
      }
    },
  },
};
</script>