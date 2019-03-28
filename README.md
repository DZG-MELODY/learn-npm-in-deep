# learn-npm-in-deep

learn npm in deep by simple examples

## list

- simpleDep 简单依赖
- nestedDep 嵌套依赖
- orderDep 顺序依赖
- nestedWebpack 嵌套依赖的构建
- package-lock npm 锁定版本
- yarn-lock yarn 锁定版本

## 结论

### 工程

1. 工程在启动开发时应生成基础 lock 文件（lock 文件一旦生成各工程不能删除）
2. 各工程初始的 lock 文件应该共享，每个工程不应该出现单独的引用(待定)
3. 各工程初始化使用 npm ci 进行初始化
4. 私服组件库可以频繁进行更新，更新必须通过 npm install lib@version 的方式，通过 npm 自身机制更新 lock 文件
5. 重要依赖组件（Vue 及其配套，lodash，moment 等）需要通过前端组讨论统一认知后，同时进行更新，更新过程依然使用 npm install 的方式（或提供脚本）
6. 工程开发完毕时，在打 tag 时应该对各工程的 lock 文件的一致性做校验（待考证），保证各工程 lock 文件一致后，统一打 tag，此次开发结束

### 组件库

组件库引入 lock 文件的注意点：

- 组件库属于通用业务，不能依赖项目的具体版本，理论上应该保持实时更新
- 项目依赖组件库时，又是在具体版本下使用，因此需要追溯到组件库具体对应的依赖版本

1. 组件库在开发新版本时，必须生成本次版本的 lock 文件，一旦生成不能删除
2. 其他人同时参与组件库开发时，通过 npm ci 进行初始化工程
3. 一旦需要确认更新依赖时，必须更新主版本或者次版本号，小版本号更新时，不能更新 lock 文件
4. 需要更新依赖时，只能通过 npm install lib@version 通过 npm 自身机制更新 lock 文件
5. 对于每次更新 lock 文件后，必须明确 dependence 的依赖版本，如果开发插件(vue)，需要明确基于 vue 的开发版本，一旦有超前的风险，必须加入到 peerDependence
6. 组件库每个次版本更新都要打 tag，并将 lock 文件一并打入，一旦发现该版本下存在 bug，则应该从该 tag 下拉分支，修改后，发布小版本，重新打 tag

_问题：_ 出现通用性 bug 时，可能各版本都需要修正
