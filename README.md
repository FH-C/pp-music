# 移动端纯净版网易云音乐（仿网易云音乐）
> 使用 Vue3 + Typescript + Vite + Vant 开发
> API来自 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)
## 在线试用
[https://music.yybf.ltd](https://music.yybf.ltd)
## 功能
- 网易云账号登录（验证码/密码登录）
- 播放云盘音乐
- 播放MV
- 歌词显示
- PWA，Android在进入首页时弹出安装，IOS点击添加到桌面
- 每日推荐歌单、歌曲
- 搜索音乐、歌手、专辑、视频
- 歌单详情
- 歌手详情
- 播放界面
- 更多功能正在开发中

## 运行
1. Fock本项目
2. Clone项目
3. 启动后端 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)
4. 修改 .env.development 为自己的后端
```
npm install
npm run dev
```
5. 访问http://localhost:3000
## 部署
1. Fock本项目
2. Clone项目
3. 启动后端 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)
4. 使用 Nginx 反向代理 API，将 API 路径映射为 `/api`
5. 新建文件 `/.env`，修改里面 `VITE_APP_BASE_API` 的值为网易云 API 地址。如果你使用了反向代理 API，可以填写 API 地址为 `/api`
6. 编译
```
npm install
npm run build
```
7. 将 `/dist` 目录下的文件上传到你的 Web 服务器
## 截图预览
![home](/public/home.png)
![album](/public/album.png)
![lyric](/public/lyric.png)
![player](/public/player.png)
![playlist](/public/playlist.png)
![search](/public/search.png)
![singer](/public/singer.png)
![video](/public/video.png)
## 免责声明
本项目的图片、音频文件均来自第三方平台，本项目只做展示用，不会修改任何资源。

音频版权来自各网站，本站只提供数据查询服务，不提供任何音频存储和贩卖服务，亦不提供第三方图片、音频文件的下载功能。

本项目仅用于学习和交流，请勿用作商业用途，请勿通过本项目下载盗版歌曲资源，否则后果自负！