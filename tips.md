# tips

## version map

| package | version | dep          |
| ------- | ------- | ------------ |
| pkg-A   | ^1.0.0  | N/A          |
| pkg-A   | ^2.0.0  | N/A          |
| pkg-A   | 3.0.0   | pkg-C ^1.0.0 |
| pkg-A   | 3.0.1   | pkg-C ^2.0.0 |
| pkg-B   | ^1.0.0  | pkg-A ^1.0.0 |
| pkg-B   | 2.0.0   | pkg-C ^2.0.0 |
| pkg-B   | 2.0.1   | pkg-C ^1.0.0 |
| pkg-C   | ^1.0.0  | N/A          |
| pkg-C   | ^2.0.0  | N/A          |
