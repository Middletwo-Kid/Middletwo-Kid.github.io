## 介绍

`Typescript`是`JavaScript`的类型的超集，可以编译成纯`JavaScript`。编译出来的`JavaScript`可以运行在任何浏览器上。

## 优点

- 增加了可读性和可维护性：看类型定义就知道如何使用、在编译阶段就可以发现大部分错误、增强了编辑器和IDE的功能，包括代码补全、接口提示、跳转到定义等；
- 包容： 可以直接将`.js`文件改为`.ts`文件、即使编译报错，也可以生成`JavaScript`文件、即使不显式定义类型，也能够做出类型推断；
- 拥有活跃的社区：大部分第三方库都提供了`TypeScript`的类型定义文件、很多库和框架都是用`Typecript`编写的、拥抱了`ES6`规范。

## 缺点

- 有一定的学习成本；
- 短期会增加一些开发成本，毕竟要多写一些类型的定义；
- 和一些库的结合并不是很完美。

## 安装

```bash
npm install -g typescript
```

新建`hello.ts`：

```ts
function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```

命令行执行`tsc hello.ts`，这时候会生成一个编译好的文件 `hello.js`。

对比两个文件，会发现：**Typescript只会在编译时对类型进行静态检查，如果发现错误，编译就会报错，而在运行时，与普通的JavaScript**文件一样，不会对类型进行检查。如果要在报错的时候终止`JavaScript`文件的生成，可以在 `tsconfig.json` 中配置 `noEmitOnError` 即可。
