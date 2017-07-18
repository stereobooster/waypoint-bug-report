# Bug report for waypoint

https://github.com/brigade/react-waypoint/issues/202

Open example, try to scroll fast. See logs in console.

When you scroll from top to bottom:

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
```

Which is Ok. But if you scroll from bottom to top. You get


```
16
14
15
12
13
7
8
9
10
11
3
4
5
6
0
1
2
```

Browser Chrome Version 58.0.3029.110 (64-bit). OS: MacOS X.
