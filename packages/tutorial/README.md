# Tutorial

https://google.github.io/flatbuffers/flatbuffers_guide_tutorial.html

## Generate lanugage files

```sh
flatc --cs monster.fbs
```

## Generate the binary file

```sh
flatc -b monster.fbs monsterdata.json5
```

## Test

### TS file

https://github.com/google/flatbuffers/issues/4493

Need to change `flatbuffers` path.

```ts
import './flatbuffeers';
// ↓
import 'flatbuffeers';
```

## Test

```
yarn ts-node test.ts
```
