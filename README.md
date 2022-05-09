# daily-goal

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

安装electron-icon-builder
添加图标生成器：npm i electron-icon-builder

生成图标
1、在package.json的scripts中添加一条命令并保存：
“electron:generate-icons”: “electron-icon-builder --input=./public/icon.png --output=build --flatten”

2、将你准备的图片命名为icon.png并复制到public目录下：

3、执行命令：npm run electron:generate-icons

4、生成的一系列图片在项目中多出来的build目录下的icons下：

重新打包
1、删除dist_electron文件夹，重新执行打包命令，npm run electron:build
2、打包完成后发现exe图标改变了：


