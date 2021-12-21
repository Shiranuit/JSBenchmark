# Unique Integer Array

| Array Size | lodash_unique.js (µs) | sort_and_copy.js (µs) | sort_and_remove.js (µs) | unique_with_set.js (µs) |
| ---------- | --------------------- | --------------------- | ----------------------- | ----------------------- |
| 1          | 7.7                   | 2.9                   | 3                       | 3.3                     |
| 10         | 2.6                   | 2                     | 2.6                     | 1.6                     |
| 100        | 110.7                 | 17.8                  | 19.8                    | 11.6                    |
| 1000       | 141.5                 | 421.5                 | 286.5                   | 182.7                   |
| 10000      | 1633.7                | 2104.9                | 2676.9                  | 1523.7                  |
| 100000     | 20801.1               | 26644.2               | 32940.2                 | 19958.9                 |
| 1000000    | 267276.3              | 324867.4              | 386241.3                | 262305.8                |

![unique_integer_graph](unique_integer_graph.png)

# Unique String Array

| Array Size | lodash_unique.js (µs) | sort_and_copy.js (µs) | sort_and_remove.js (µs) | unique_with_set.js (µs) |
| ---------- | --------------------- | --------------------- | ----------------------- | ----------------------- |
| 1          | 8                     | 3.5                   | 3.4                     | 9.7                     |
| 10         | 2.6                   | 2.6                   | 2.9                     | 1.6                     |
| 100        | 113.4                 | 21.8                  | 18.8                    | 12.9                    |
| 1000       | 257.1                 | 261                   | 291.3                   | 181.5                   |
| 10000      | 1684.7                | 2382.9                | 2965.9                  | 1724.2                  |
| 100000     | 22445.4               | 34673.8               | 43054.2                 | 26164.1                 |
| 1000000    | 291761.2              | 633470.2              | 793328.3                | 532289.2                |

![unique_string_graph](unique_string_graph.png)