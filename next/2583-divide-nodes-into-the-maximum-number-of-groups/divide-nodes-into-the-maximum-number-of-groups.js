
class CircularQueue {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    /**
     * @private
     * @type {number}
     */
    this._capacity = capacity;
    /**
     * @private
     * @type {number}
     */
    this._size = 0;
    /**
     * @private
     * @type {number}
     */
    this._bottom = 0;

    /**
     * @private
     * @type {TItem[]}
     */
    this._data = Array(capacity).fill(undefined);
  }

  get size() {
    return this._size;
  }

  /**
   * @param  {...TItem} items
   */
  enqueue(...items) {
    if (this._size + items.length > this._capacity) throw new Error("Queue capacity exceeded.");

    let queueIndex = (this._bottom + this._size) % this._capacity;
    this._size += items.length;
    for (let i = 0; i < items.length; i++) {
      this._data[queueIndex] = items[i];
      queueIndex = (queueIndex + 1) % this._capacity;
    }
  }

  /**
   * @returns {TItem | undefined}
   */
  dequeue() {
    if (!this._size) return undefined;

    const result = this._data[this._bottom];
    this._bottom = (this._bottom + 1) % this._capacity;
    this._size--;

    return result;
  }

  clear() {
    this._size = 0;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function (n, edges) {
  let result = 0;
  let component = Array(n).fill(undefined);

  let graph = [];
  for (let i = 0; i < n; i++) graph.push([]);
  for (let edge of edges) {
    graph[edge[0] - 1].push(edge[1] - 1);
    graph[edge[1] - 1].push(edge[0] - 1);
  }

  let q = new CircularQueue(n);
  let visited = Array(n);

  function bfs(src) {
    q.clear();
    visited.fill(0);
    q.enqueue(src);
    visited[src] = 1;
    let flagFailed = false;

    if (component[src] === undefined) component[src] = null;
    let cur;
    while (q.size) {
      cur = q.dequeue();
      if (component[cur] === undefined) component[cur] = src;

      for (let nex of graph[cur]) {
        if (!visited[nex]) {
          visited[nex] = visited[cur] + 1;
          q.enqueue(nex);
        } else {
          if (Math.abs(visited[cur] - visited[nex]) !== 1) {
            flagFailed = true;
          }
        }
      }
    }

    if (cur === src) {
      component[src] = -1;
      return;
    }

    if (flagFailed) return;

    const componentId = component[cur];

    if (component[componentId] === null || visited[cur] > -component[componentId]) {
      component[componentId] = -visited[cur];
    }
  }

  for (let i = 0; i < n; i++) bfs(i);

  for (let i = 0; i < n; i++) {
    if (component[i] === null) return -1;
    if (component[i] < 0) result -= component[i];
  }

  return result;
};