### react template

```
    # プロジェクトの作成
    yarn create vite . --template=react-ts
    # パッケージのインストール
    yarn
    # 新規インストール
    yarn add <package>
    # 開発サーバーの立ち上げ
    yarn dev
```

`vite.config.ts`をいじる

```
    export default defineConfig({
    plugins: [react()],
        server: {
            host: true,
        },
    });

```
