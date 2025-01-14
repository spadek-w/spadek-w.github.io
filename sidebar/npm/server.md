## 1. 安装 Node.js 和 npm

确保你的服务器上已经安装了 Node.js 和 npm。如果没有安装，可以使用以下命令来安装：

```bash
# 在 Ubuntu 上安装 Node.js 和 npm
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. 全局安装 Verdaccio

mac系统下使用：

```bash
sudo npm install -g verdaccio
```

 window系统下使用：

```bash
npm install -g verdaccio
```

### 3. 启动 Verdaccio

```bash
verdaccio
```
默认情况下，Verdaccio 会在 localhost:4873 端口上启动。

### 4. 配置 Verdaccio

你可以通过修改 Verdaccio 的配置文件（通常是 ~/.config/verdaccio/config.yaml）来自定义你的 npm 仓库。以下是一些常用的配置：

	•	监听地址和端口：如果需要 Verdaccio 监听特定的 IP 地址和端口，可以在配置文件中设置：

```bash
listen: 0.0.0.0:4873
```
	•	存储路径：配置包的存储路径：

```bash
storage: ./storage
```
	•	用户认证：可以配置用户认证，添加访问控制：

```bash
auth:
  htpasswd:
    file: ./htpasswd
    max_users: 1000
```

### 5. 使用 Systemd 管理 Verdaccio

为了确保 Verdaccio 在服务器重启后自动启动，你可以创建一个 systemd 服务：

```bash
sudo nano /etc/systemd/system/verdaccio.service
```

将以下内容添加到文件中：

```bash
[Unit]
Description=Verdaccio NPM Registry
After=network.target

[Service]
ExecStart=/usr/bin/verdaccio
Restart=always
User=nobody
Group=nogroup
Environment=PATH=/usr/bin:/usr/local/bin:/usr/local/sbin:/usr/sbin:/sbin:/bin
Environment=NODE_ENV=production
WorkingDirectory=/home/nobody

[Install]
WantedBy=multi-user.target
```

保存并退出后，运行以下命令启用并启动 Verdaccio：

```bash
sudo systemctl daemon-reload
sudo systemctl enable verdaccio
sudo systemctl start verdaccio
```

### 6. 配置 Nginx 反向代理（可选）

如果你希望通过域名访问 Verdaccio，可以使用 Nginx 配置反向代理。

安装 Nginx：

```bash
sudo apt-get install nginx
```

配置反向代理：

```bash
sudo nano /etc/nginx/sites-available/verdaccio
```

添加以下配置：

```bash
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:4873;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

启用配置并重启 Nginx：

```bash
sudo ln -s /etc/nginx/sites-available/verdaccio /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

### 7. 使用 Verdaccio

你可以通过以下命令将 npm 的注册表指向你的 Verdaccio 服务器：

```bash
npm set registry http://your-domain.com/
```

### 8. 发布和安装包

现在你可以使用 Verdaccio 发布和安装 npm 包：

```bash
# 发布包
npm publish

# 安装包
npm install your-package
```

就是在服务器上部署 Verdaccio 的基本步骤。根据你的需求，你可以进一步配置和优化 Verdaccio。
